"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  role: "user" | "ai";
  content: string;
};

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", content: "こんにちは！ポートフォリオへようこそ。私の経歴やプロジェクトについて、何でも聞いてください。" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 自動スクロール
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage,
          history: messages.filter(m => m.role !== "system"), // 必要に応じてフィルタリング
        }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "ai", content: data.reply }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [...prev, { role: "ai", content: "すみません、エラーが発生しました。" }]);
    } finally {
      setIsLoading(false);
    }
  };

  // ... 前半のロジックは同じなので省略。return内のみ書き換え ...

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-stone-800 text-white rounded-full shadow-xl hover:bg-stone-700 transition-colors shadow-stone-500/20"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-40 w-[90vw] sm:w-[350px] h-[500px] max-h-[70vh] bg-white border border-stone-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* ヘッダー */}
            <div className="bg-stone-50 p-4 border-b border-stone-100 flex items-center gap-2">
              <Bot size={20} className="text-orange-600" />
              <div>
                <h3 className="text-sm font-bold text-stone-700">AI Assistant</h3>
                <p className="text-xs text-stone-400">Powered by Gemini 1.5</p>
              </div>
            </div>

            {/* メッセージエリア */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50/50">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-2 ${
                    msg.role === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      msg.role === "user" ? "bg-stone-200 text-stone-600" : "bg-orange-100 text-orange-600"
                    }`}
                  >
                    {msg.role === "user" ? <User size={14} /> : <Bot size={16} />}
                  </div>
                  <div
                    className={`px-3 py-2 rounded-lg text-sm max-w-[80%] leading-relaxed shadow-sm ${
                      msg.role === "user"
                        ? "bg-stone-700 text-white rounded-tr-none"
                        : "bg-white text-stone-700 rounded-tl-none border border-stone-200"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-2 text-stone-400 text-xs ml-10">
                  <div className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* 入力エリア */}
            <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-stone-100 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="質問を入力..."
                className="flex-1 bg-stone-100 border border-transparent rounded-full px-4 py-2 text-sm text-stone-800 focus:outline-none focus:bg-white focus:border-orange-300 transition-all"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="p-2 bg-stone-800 text-white rounded-full hover:bg-stone-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}