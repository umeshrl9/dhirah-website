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
const FTSSRegistrationSchema = new mongoose.Schema({
  name: String,
  rollno: String,
  year: Number,
  branch: String,
  dob: String,
  phone: String,
  college: {
    type: String,
    enum: ["NSUT", "DDUC", "ARSD", "IIT Roorkee", "IIT Delhi", "RLA", "Bhaskaracharya", "Aryabhatta", "VMMC"],
  },
});

const FTSSRegistration = mongoose.models.FTSSRegistration || mongoose.model("FTSSRegistration", FTSSRegistrationSchema);

// Setup in-memory rate limiter
// const rateLimitOptions = {
//   max: 5,                  // max 5 requests
//   ttl: 60 * 1000 * 15,          // per 15 minutes
// };
// const rateLimiter = new LRUCache(rateLimitOptions);

//API handler function
export default async function handler(req, res) {
    await dbConnect();

    if (req.method === "POST") {
    try {
      const { name, rollno, year, branch, dob, phone, college } = req.body;

      const newRegistration = new FTSSRegistration({
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