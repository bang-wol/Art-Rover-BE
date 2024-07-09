import { Router } from "express";
import { searchBooks } from "../controllers/searchBookController";

const router = Router();

router.get('/', searchBooks);

export default router;
