import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    name: { type: String, required: true, maxlength: 50 },
  },
  { timestamps: true }
);
export const GenreModel = mongoose.model("Genre", schema);
