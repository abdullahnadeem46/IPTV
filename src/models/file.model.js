import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    orignal_name: { type: String, maxlength: 100 },
    current_name: { type: String, maxlength: 100 },
    type: { type: String, maxlength: 100 },
    path: { type: String, maxlength: 100 },
    size: { type: String, maxlength: 100 },
  },
  { timestamps: true }
);
export const FileModel = mongoose.model("File", schema);
