import { Router } from "express";
import { bookDetail } from "../controllers/bookDetailController";

const router = Router();

router.get('/:isbn', bookDetail);

export default router;
