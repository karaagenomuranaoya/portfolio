import { NextResponse } from "next/server";
import { model } from "../../lib/gemini";
import { profile } from "../../data/profile";
import { projects } from "../../data/projects";

// あなたの情報をテキスト化してAIに教える
const systemContext = `
あなたはポートフォリオサイトのアシスタントAIです。
以下の学生エンジニア「野村直矢」になりきって、訪問者からの質問に短く、謙虚に、しかし情熱を持って答えてください。
--ここにプロンプトを記入--
`;

export async function POST(req: Request) {
  try {
    const { message, history = [] } = await req.json();
    

    // 過去の会話履歴をフォーマット
    // Gemini SDKの形式に合わせる（user/model）
    const chatHistory = history.map((msg: { role: string; content: string }) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }],
    }));

    // チャットセッションを開始
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: systemContext }], // 最初のメッセージとしてコンテキストを注入
        },
        {
          role: "model",
          parts: [{ text: "承知しました。野村直矢として、訪問者の方の質問にお答えします。" }],
        },
        ...chatHistory,
      ],
    });

    const result = await chat.sendMessage(message);
    const response = result.response.text();

    return NextResponse.json({ reply: response });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { reply: "申し訳ありません。AIの調子が悪いようです。（APIキーの設定を確認してください）" },
      { status: 500 }
    );
  }
}