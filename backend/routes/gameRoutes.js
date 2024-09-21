import express from 'express';
import { createGame, getGame } from '../controllers/gameController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/create', verifyToken, createGame);
router.get('/:gameId', getGame);

export default router;
