import mongoose, { Schema, Document } from "mongoose";

interface IReview {
  text: string;
  createdAt: Date;
  rating: number;
}

interface IBook extends Document {
  title: string;
  author: string;
  image: string;
  isbn: string;
  readStatus: "Read" | "Reading" | "Wish";
  reviews?: IReview[];
  page?: number;
  currentPage?: number;
}

const reviewSchema = new Schema<IReview>({
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  rating: { type: Number, min: 1, max: 5, required: true },
});

const bookSchema = new Schema<IBook>({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
  },
  readStatus: {
    type: String,
    enum: ["Read", "Reading", "Wish"],
    required: true,
  },
  reviews: [reviewSchema],
  page: Number,
  currentPage: Number,
});

const Book = mongoose.model<IBook>("Book", bookSchema);

export default Book;
