import express, { Response, Request } from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY,
  })
);

const router = express.Router();

router.get("/ai-route", (req: Request, res: Response) => {
  res
    .status(200)
    .send({ status: "success", message: "Hello, welcome to Ai router!" });
});

router.post("/ai-completion", async (req: Request, res: Response) => {
  const { prompt } = req.body;
  try {
    const result: any = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    res.status(200).send(result.data.choices[0].content);
  } catch (error) {
    res.status(500).send({ message: "Something went wrong", error: error });
  }
});

export default router;
