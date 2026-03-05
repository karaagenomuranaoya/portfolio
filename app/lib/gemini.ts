import { GoogleGenerativeAI } from "@google/generative-ai";

// APIキーが設定されていない場合の安全策
const apiKey = process.env.GEMINI_API_KEY || "";

const genAI = new GoogleGenerativeAI(apiKey);

// モデルの初期化（高速な gemini-1.5-flash を使用）
export const model = genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite-preview" });