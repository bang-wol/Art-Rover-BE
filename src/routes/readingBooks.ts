import { Router } from "express";
import {
  allReadingBooks,
  addReadingBooks,
  editReadingBooks,
  deleteReadingBooks,
} from "../controllers/readingBookController";

const router = Router();

router.get("/", allReadingBooks);
router.post("/", addReadingBooks);
router.put("/:isbn", editReadingBooks);
router.delete("/:isbn", deleteReadingBooks);

export default router;
