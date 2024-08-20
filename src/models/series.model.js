import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    name: { type: String, required: true, maxlength: 50 },
    thumbnail_id: { type: mongoose.Schema.Types.ObjectId, ref: "File" },
    trailer_id: { type: mongoose.Schema.Types.ObjectId, ref: "File" },
  },
  { timestamps: true }
);
export const SeriesModel = mongoose.model("Series", schema);
