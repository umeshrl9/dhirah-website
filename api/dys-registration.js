import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then(mongoose => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

// User model
const DYSRegistrationSchema = new mongoose.Schema({
  name: String,
  rollno: String,
  year: Number,
  branch: String,
  dob: String,
  phone: String,
  college: {
    type: String,
    enum: ["NSUT", "DDUC", "ARSD", "IIT Roorkee", "IIT Delhi", "GTB4CEC", "RLA", "Bhaskaracharya", "Aryabhatta", "VMMC"],
  },
  h_ds: {
    type: String,
    enum: ["Hosteller", "Day Scholar"],
  },
  room_no: String
});

const DYSRegistration = mongoose.models.DYSRegistration || mongoose.model("DYSRegistration", DYSRegistrationSchema);

//API handler function
export default async function handler(req, res) {
    await dbConnect();

    if (req.method === "POST") {
    try {
      const { name, rollno, year, branch, dob, phone, college, h_ds, room_no } = req.body;

      const newRegistration = new DYSRegistration({
        name,
        rollno,
        year,
        branch,
        dob,
        phone,
        college,
        h_ds,
        room_no
      });

      await newRegistration.save();

      res.writeHead(302, { Location: `/success?form-type=dys-registration&college=${encodeURIComponent(college)}&h_ds=${encodeURIComponent(h_ds)}` });
      res.end();
    } catch (error) {
      console.error(error);
      res.writeHead(302, { Location: "/error" });
      res.end();
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}