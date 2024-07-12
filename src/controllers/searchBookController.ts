import axios from "axios";
import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

export const searchBooks: RequestHandler = async (req, res, next) => {
  const { query } = req.query;
  try {
    const response = await axios.get(
      "https://openapi.naver.com/v1/search/book.json",
      {
        params: { query },
        headers: {
          "X-Naver-Client-Id": process.env.NAVER_CLIENT_ID,
          "X-Naver-Client-Secret": process.env.NAVER_CLIENT_SECRET,
        },
      }
    );
    res.json(response.data.items);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Error fetching data from Naver API" });
  }
};

export const searchBookDetail: RequestHandler = async (req, res, next) => {
  const { isbn } = req.params;
  try {
    const response = await axios.get(
      "https://openapi.naver.com/v1/search/book.json",
      {
        params: { query: isbn },
        headers: {
          "X-Naver-Client-Id": process.env.NAVER_CLIENT_ID,
          "X-Naver-Client-Secret": process.env.NAVER_CLIENT_SECRET,
        },
      }
    );
    const bookDetails = response.data.items[0] || null;
    if (!bookDetails) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Book not found" });
    }
    res.json(bookDetails);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Error fetching data from Naver API" });
  }
};
