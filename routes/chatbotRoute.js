import express from 'express';
import { testChatBot } from '../controllers/chatBotController.js';


const router = express.Router();

/**
 * @swagger
 * /chatbot/chat:
 *   get:
 *     summary: Get a test result
 *     responses:
 *       200:
 *         description: Text returned
 *       401:
 *         description: LLM failed
 */
router.post('/chat', testChatBot) 

export default router;