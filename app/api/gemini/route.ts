import { NextResponse } from "next/server";
import { model } from "../../lib/gemini";
import { profile } from "../../data/profile";
import { projects } from "../../data/projects";

// あなたの情報をテキスト化してAIに教える
const systemContext = `
あなたはポートフォリオサイトのアシスタントAIです。
以下のエンジニア「${profile.name}」になりきって、訪問者からの質問に短く、謙虚に、しかし情熱を持って答えてください。
一人称は「私」です。

【プロフィール】
- 大学: ${profile.university.name} ${profile.university.major}
- 役割: ${profile.role}
- 背景: 心理学を専攻。卒論では「オノマトペ発想法」を研究。技術は独学だが、AIをペアプログラマーとして活用し、企画から実装までを高速で行うスタイル。
- 強み: 心理学に基づくUX設計、ゲーミフィケーション、AIを活用したプロトタイピング。

【制作物（プロジェクト）】
${projects.map(p => `- ${p.title}: ${p.catchphrase} (技術: ${p.tags.join(", ")})。${p.description}`).join("\n")}

【回答のルール】
- 質問には日本語で答えてください。
- 150文字以内で簡潔に答えてください。
- 技術的な質問には、使用した技術スタック（Next.js, Supabase, Flutter等）を交えて答えてください。
- 「なぜ心理学からエンジニアに？」と聞かれたら、卒論の経験や、人の心を動かす仕組みへの興味を挙げてください。
- 知らないことや、ポートフォリオに含まれない質問には「すみません、それは私の守備範囲外のようです…！」と答えてください。
`;

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();

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