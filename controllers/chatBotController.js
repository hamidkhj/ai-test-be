import dotenv from "dotenv";
import Together from "together-ai";

dotenv.config();


const TOGETHER_AI_MODEL = "meta-llama/Llama-3.3-70B-Instruct-Turbo-Free"; 
// const TOGETHER_AI_API_URL = "https://api.together.xyz/v1/chat/completions";


const chatWithTogather = async (req, res) => {
    const together = new Together({
        apiKey: process.env.TOGETHER_API_KEY
    });

    const { message, history } = req.body
    console.log(message)
    console.log(history)

    try {
        const response = await together.chat.completions.create({
            messages: [
                {
                    role: "user",
                    content: message
                }
            ],
            model: TOGETHER_AI_MODEL
        });

        console.log(response.choices[0].message.content)

        res.json({ message: response.choices[0].message.content });


    } catch (error) {
        console.log(error)
    }

};


export { chatWithTogather }