import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null,
  };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;

  return cached.conn;
}

// MMD Registration Model
const MMDRegistrationSchema = new mongoose.Schema({
  name: String,
  rollno: String,
  year: Number,
  branch: String,
  dob: String,
  phone: String,

  college: {
    type: String,
    enum: [
      "NSUT",
      "DDUC",
      "ARSD",
      "IIT Roorkee",
      "IIT Delhi",
      "RLA",
      "Bhaskaracharya",
      "Aryabhatta",
      "VMMC",
    ],
  },
});

const MMDRegistration =
  mongoose.models.MMDRegistration ||
  mongoose.model("MMDRegistration", MMDRegistrationSchema);

// Temporary WhatsApp group link
const NSUT_WHATSAPP_GROUP = "WHATSAPP_GROUP_LINK_PLACEHOLDER";

// API Handler
export default async function handler(req, res) {
  await dbConnect();

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const { name, rollno, year, branch, dob, phone, college } = req.body;

    // Create registration
    const newRegistration = new MMDRegistration({
      name,
      rollno,
      year,
      branch,
      dob,
      phone,
      college,
    });

    // Save registration to MongoDB
    const savedRegistration = await newRegistration.save();

    
    const count = await MMDRegistration.countDocuments();
    // NSUT condition
    if (college === "NSUT") {
      return res.redirect("/success?mmd=true&college=NSUT");
    }

    // Non-NSUT students
    return res.redirect("/success?mmd=true");
  } catch (error) {
    console.error("MMD Registration Error:", error);

    return res.redirect("/error");
  }
}
