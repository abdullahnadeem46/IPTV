import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
   series_id: { type: mongoose.Schema.Types.ObjectId, ref: "Series" },
    name: { type: String, required: true, maxlength: 50 },
  },
  { timestamps: true }
);
export const SeasonModel = mongoose.model("Season", schema);
