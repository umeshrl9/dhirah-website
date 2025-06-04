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
const UserSchema = new mongoose.Schema({
  name: String,
  rollno: String,
  year: Number,
  branch: String,
  dob: String,
  phone: String,
  college: {
    type: String,
    enum: ["NSUT", "DDUC", "ARSD"],
  },
  whydhirah: String,
  viewOnBG: String,
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const { name, rollno, year, branch, dob, phone, college, whydhirah, viewOnBG } = req.body;

      const newUser = new User({
        name,
        rollno,
        year,
        branch,
        dob,
        phone,
        college,
        whydhirah,
        viewOnBG,
      });

      await newUser.save();

      res.writeHead(302, { Location: "/success.html" });
      res.end();
    } catch (error) {
      console.error(error);
      res.writeHead(302, { Location: "/error.html" });
      res.end();
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
