import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    genre_id: { type: mongoose.Schema.Types.ObjectId, ref: "Genre" },
    series_id: { type: mongoose.Schema.Types.ObjectId, ref: "Series" },
  },
  { timestamps: true }
);
export const GenreSeriesModel = mongoose.model("Genre_Series", schema);
