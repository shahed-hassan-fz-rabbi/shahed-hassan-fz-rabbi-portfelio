"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaTimes, FaPaperPlane, FaMagic } from "react-icons/fa";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const suggestedPrompts = [
  "What are Rabbi's main skills?",
  "Tell me about his top projects",
  "Why hire him for a Software Engineer role?",
  "How can I contact Rabbi?",
];

// অফলাইন ব্যাকআপ ডেটা (যদি API Key বা নেটওয়ার্কে সমস্যা থাকে তবে এটি স্বয়ংক্রিয়ভাবে উত্তর দেবে)
const fallbackKnowledge: { [key: string]: string } = {
  skills:
    "Rabbi specializes in Full-Stack Web Development using Next.js (App Router), React.js, TypeScript, Node.js, Express.js, PostgreSQL, and MongoDB. He is also strong in Data Structures & Algorithms (500+ CP problems solved).",
  projects:
    "Rabbi's top projects are:\n1. W2A Intelligence: Waste-to-assets allocation engine with Gemini Vision API.\n2. DriveFleet: Full-stack car rental platform with JWT & OAuth.\n3. Fable: Multi-role ebook marketplace featuring Stripe payment integration.",
  hire:
    "Rabbi combines production full-stack engineering with strong algorithmic problem-solving (500+ solved). He writes clean, typed, and maintainable software with 3NF relational architectures.",
  contact:
    "Email: shahedhassan572@gmail.com\nLinkedIn: linkedin.com/in/shahed-hassan-fz-rabbi\nGitHub: github.com/shahed-hassan-fz-rabbi",
};

export default function AskAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I am Rabbi's AI Assistant. Ask me anything about his technical stack, competitive programming, or full-stack projects.",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSend = async (queryText?: string) => {
    const textToSend = queryText || input;
    if (!textToSend.trim() || loading) return;

    const userMessage: Message = { role: "user", content: textToSend };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await res.json();

      if (res.ok && data.reply) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.reply },
        ]);
      } else {
        throw new Error("API Route issue");
      }
    } catch {
      // API ফেইল করলে অফলাইন ব্যাকআপ থেকে উত্তর তৈরি
      const q = textToSend.toLowerCase();
      let fallbackReply =
        "Rabbi is a Software Engineer & Full-Stack Developer specializing in Next.js, React, Node.js, and TypeScript with 500+ CP problems solved. Contact him at shahedhassan572@gmail.com.";

      if (q.includes("skill") || q.includes("tech") || q.includes("stack")) {
        fallbackReply = fallbackKnowledge.skills;
      } else if (q.includes("project") || q.includes("work")) {
        fallbackReply = fallbackKnowledge.projects;
      } else if (q.includes("hire") || q.includes("why")) {
        fallbackReply = fallbackKnowledge.hire;
      } else if (q.includes("contact") || q.includes("email") || q.includes("reach")) {
        fallbackReply = fallbackKnowledge.contact;
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: fallbackReply },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button: Positioned cleanly on bottom-right */}
      <div className="fixed bottom-5 right-5 z-40">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="button"
          aria-label="Ask Rabbi's AI Assistant"
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25 transition-all font-semibold text-xs sm:text-sm cursor-pointer"
        >
          <FaMagic className="text-amber-300 text-xs sm:text-sm" />
          <span>Ask Rabbi&apos;s AI</span>
        </motion.button>
      </div>

      {/* Compact Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-16 right-4 sm:right-5 z-50 w-[calc(100vw-32px)] sm:w-[380px] h-[430px] max-h-[74vh] rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--border-color)] bg-[var(--bg-main)]/90 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-white text-xs shadow-sm">
                  <FaRobot />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[var(--text-main)] leading-none">
                    Rabbi&apos;s Assistant
                  </h3>
                  <span className="text-[9px] sm:text-[10px] text-emerald-500 font-medium">
                    ● Powered by Gemini
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-[var(--text-muted)] hover:text-[var(--text-main)] rounded-lg transition-colors cursor-pointer"
                type="button"
                aria-label="Close Chat"
              >
                <FaTimes className="text-xs sm:text-sm" />
              </button>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 overflow-y-auto p-3.5 space-y-3 text-xs sm:text-[13px]">
              {messages.map((m, index) => (
                <div
                  key={index}
                  className={`flex ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3 py-2 leading-relaxed whitespace-pre-line ${
                      m.role === "user"
                        ? "bg-blue-600 text-white rounded-br-none"
                        : "bg-[var(--bg-main)] border border-[var(--border-color)] text-[var(--text-main)] rounded-bl-none shadow-sm"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="bg-[var(--bg-main)] border border-[var(--border-color)] rounded-2xl rounded-bl-none px-3 py-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse delay-100" />
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse delay-200" />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Suggested Prompts */}
            <div className="px-2.5 py-1.5 border-t border-[var(--border-color)]/60 bg-[var(--bg-main)]/40 overflow-x-auto">
              <div className="flex gap-1.5 whitespace-nowrap">
                {suggestedPrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSend(prompt)}
                    className="text-[10px] px-2 py-1 rounded-md border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-muted)] hover:border-blue-500 hover:text-blue-500 transition-colors cursor-pointer"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            {/* User Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-2 border-t border-[var(--border-color)] bg-[var(--bg-main)] flex items-center gap-1.5"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Rabbi's stack, projects..."
                className="flex-1 bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)] text-xs rounded-lg px-3 py-1.5 outline-none focus:border-blue-500 transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                aria-label="Send query"
                className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 transition-colors cursor-pointer"
              >
                <FaPaperPlane className="text-[11px]" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}