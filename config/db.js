import mongoose from "mongoose";

let cached = global.mongoose || { conn: null, promise: null };

export default async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(process.env.MONGODB_URI)
      .then((mongoose) => mongoose);
  }

  try {
    cached.conn = await cached.promise;
  } catch (eror) {
    console.error("Error connecting to MongoDB :", error);
  }
  return cached.conn;
}
