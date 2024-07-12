import { Router } from "express";
import {
  allWishBooks,
  addWishBooks,
  deleteWishBooks,
} from "../controllers/wishBookController";

const router = Router();

router.get("/", allWishBooks);
router.post("/", addWishBooks);
router.delete("/:isbn", deleteWishBooks);

export default router;
