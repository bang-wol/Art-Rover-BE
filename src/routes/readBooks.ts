import { Router } from "express";
import {
  allReadBooks,
  addReadBooks,
  deleteReadBooks,
  editReadBooks,
} from "../controllers/readBookController";

const router = Router();

router.get("/", allReadBooks);
router.post("/", addReadBooks);
router.put("/:isbn", editReadBooks);
router.delete("/:isbn", deleteReadBooks);

export default router;
