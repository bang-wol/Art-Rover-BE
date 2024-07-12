import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import Book from "../models/books";

export const allReadingBooks: RequestHandler = async (req, res, next) => {
  try {
    const books = await Book.find({});
    res.json(books);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "서버 오류가 발생했습니다." });
  }
};

export const addReadingBooks: RequestHandler = async (req, res, next) => {
  try {
    const readingBook = new Book(req.body);
    await readingBook.save();
    res.status(StatusCodes.CREATED).json(readingBook);
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "데이터 형식이 올바르지 않습니다." });
  }
};

export const editReadingBooks: RequestHandler = async (req, res, next) => {
  const { isbn } = req.params;
  try {
    const updatedBook = await Book.findOneAndUpdate({ isbn }, req.body, {
      new: true,
    });
    if (!updatedBook) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "해당 ISBN의 책을 찾을 수 없습니다." });
    }
    res.json(updatedBook);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "업데이트 중 오류가 발생했습니다." });
  }
};

export const deleteReadingBooks: RequestHandler = async (req, res, next) => {
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
