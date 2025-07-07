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
const MerchRegistrationSchema = new mongoose.Schema({
  name: String,
  year: Number,
  branch: String,
  phone: String,
  
});

const DYSRegistration = mongoose.models.DYSRegistration || mongoose.model("DYSRegistration", DYSRegistrationSchema);

// Setup in-memory rate limiter
const rateLimitOptions = {
  max: 5,                  // max 5 requests
  ttl: 60 * 1000 * 15,          // per 15 minutes
};
const rateLimiter = new LRUCache(rateLimitOptions);

//API handler function
export default async function handler(req, res) {
    await dbConnect();
    const ip = req.headers["x-forwarderd-for"] || req.socket.remoteAddress;

    const current = rateLimiter.get(ip) || 0;

    if(current >= 5){
        return res.status(529).json({message: "Too many requests -- please try again later"});
    }

    rateLimiter.set(ip, current+1);

    if (req.method === "POST") {
    try {
      const { name, rollno, year, branch, dob, phone, college } = req.body;

      const newRegistration = new DYSRegistration({
        name,
        rollno,
        year,
        branch,
        dob,
        phone,
        college,
      });

      await newRegistration.save();

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