import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    _id: { type: string, required: true },
    name: { type: string, required: true },
    email: { type: string, required: true },
    image: { type: string, required: false },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
