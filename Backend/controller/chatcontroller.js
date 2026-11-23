
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

export const askGemini = async (req, res) => {
  try {
    const { question } = req.body;

    if (!question || !question.trim()) {
      return res.status(400).json({
        success: false,
        message: "Please enter a question"
      });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: question
    });

    res.status(200).json({
      success: true,
      answer: response.text
    });

  } catch (error) {
    console.error("Gemini Error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong with Gemini AI"
    });
  }
};
