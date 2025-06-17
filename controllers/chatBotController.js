import dotenv from "dotenv";
dotenv.config();

// const TOGETHER_AI_API_KEY = process.env.TOGETHER_AI_API_KEY 


const testChatBot = ('/', (req, res) => {
    console.log(req.body)
    res.json({ message: 'some test message....' });
});


export {testChatBot}