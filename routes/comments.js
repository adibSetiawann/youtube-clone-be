import express from "express";
import { addComment, deleteComent, getComment } from '../controllers/comments.js'
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.post('/', verifyToken, addComment)
router.delete('/:id', verifyToken, deleteComent)
router.get('/:videoId', getComment)


export default router