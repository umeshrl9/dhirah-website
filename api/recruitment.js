import mongoose from "mongoose";
import dotenv from "dotenv";
import { LRUCache } from "lru-cache";
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

// Setup in-memory rate limiter
const rateLimitOptions = {
  max: 5,                  // max 5 requests
  ttl: 60 * 1000 * 15,          // per 15 minutes
};
const rateLimiter = new LRUCache(rateLimitOptions);

export default async function handler(req, res) {
  await dbConnect();

  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  // Track requests per IP
  const current = rateLimiter.get(ip) || 0;

  if (current >= 5) {
    return res.status(429).json({ message: "Too many requests — please try again later." });
  }

  rateLimiter.set(ip, current + 1);

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

      res.writeHead(302, { Location: "/success" });
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
