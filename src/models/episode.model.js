import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    season_id: { type: mongoose.Schema.Types.ObjectId, ref: "Season" },
    name: { type: String, required: true, maxlength: 50 },
    description: { type: String, maxlength: 100 },
    thumbnail_id: { type: mongoose.Schema.Types.ObjectId, ref: "File" },
  },
  { timestamps: true }
);
export const EpisodeModel = mongoose.model("Episode", schema);
