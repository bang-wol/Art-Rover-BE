import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import Book from "../models/books";

export const allWishBooks: RequestHandler = async (req, res, next) => {
  try {
    const books = await Book.find({});
    res.json(books);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "서버 오류가 발생했습니다." });
  }
};

export const addWishBooks: RequestHandler = async (req, res, next) => {
  try {
    const wishBook = new Book(req.body);
    await wishBook.save();
    res.status(StatusCodes.CREATED).json(wishBook);
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "데이터 형식이 올바르지 않습니다." });
  }
};

export const deleteWishBooks: RequestHandler = async (req, res, next) => {
  const { isbn } = req.params;
  try {
    await Book.findOneAndDelete({ isbn });
    res.status(StatusCodes.NO_CONTENT);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "삭제 중 오류가 발생했습니다." });
  }
};
