import { Router } from "express";
import {
  searchBooks,
  searchBookDetail,
} from "../controllers/searchBookController";

const router = Router();

router.get("/", searchBooks);
router.get("/:isbn", searchBookDetail);

export default router;
