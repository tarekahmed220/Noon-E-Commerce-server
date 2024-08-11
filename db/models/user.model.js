import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    email: String,
    age: Number,
    password: String,
    isConfirmed: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const userModel = model("User", userSchema);
