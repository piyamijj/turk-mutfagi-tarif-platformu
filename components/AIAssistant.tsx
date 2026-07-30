"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, ChefHat, Sparkles, ArrowRight } from "lucide-react";
import { getRecipeById } from "@/lib/recipes";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  suggestedRecipeIds?: string[];
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize with a welcoming message on mount
  useEffect(() => {
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        content: "Merhaba! Ben Nefis & Özgün Şef Asistanınız. 👨‍🍳\n\nElinizdeki malzemeleri yazın, size sitemizdeki tariflerden en uygun olanları önereyim. Pişirme teknikleri veya malzeme ikameleri hakkında da dilediğinizi sorabilirsiniz!\n\nÖrneğin: *\"Elimde patlıcan ve yoğurt var, ne yapabilirim?\"* veya *\"Baklava yaparken şerbetin kıvamını nasıl ayarlarım?\"*",
      },
    ]);
  }, []);

  // Auto-scroll to bottom when messages change or loading state changes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput("");

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: userText,
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      // Prepare history for the API route
      const history = messages
        .filter((m) => m.id !== "welcome")
        .map((m) => ({
          role: m.role,
          content: m.content,
        }));

      const response = await fetch("/api/asistan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userText,
          history,
        }),
      });

      if (!response.ok) {
        throw new Error("API response error");
      }

      const data = await response.json();

      const assistantMsg: Message = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: data.reply || "Anlayamadım, lütfen tekrar dener misiniz?",
        suggestedRecipeIds: data.suggestedRecipeIds || [],
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (error) {
      console.error("AI Assistant error:", error);
      const errorMsg: Message = {
        id: `error-${Date.now()}`,
        role: "assistant",
        content: "Üzgünüm, şu anda bağlantı kuramadım. Lütfen internet bağlantınızı kontrol edip tekrar deneyin.",
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end">
      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="w-[calc(100vw-2rem)] sm:w-96 h-[500px] max-h-[80vh] bg-white rounded-2xl border border-cardborder-dark shadow-2xl flex flex-col overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="bg-ink text-cream px-4 py-3.5 flex items-center justify-between border-b border-olive/20">
              <div className="flex items-center gap-2.5">
                <div className="bg-terracotta p-1.5 rounded-lg text-white">
                  <ChefHat className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold tracking-tight">Şef Asistanı</h3>
                  <p className="text-[10px] text-cream-dark/60 flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5 text-gold" /> Yapay Zeka Destekli
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-cream-dark/60 hover:text-cream hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Kapat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Message List */}
            <div className="flex-grow overflow-y-auto p-4 bg-cream/30 flex flex-col gap-4 no-scrollbar">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex flex-col max-w-[85%] ${
                    msg.role === "user" ? "self-end items-end" : "self-start items-start"
                  }`}
                >
                  {/* Message Bubble */}
                  <div
                    className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                      msg.role === "user"
                        ? "bg-terracotta text-white rounded-tr-none"
                        : "bg-white text-ink border border-cardborder-dark/60 rounded-tl-none shadow-sm"
                    }`}
                  >
                    {msg.content}
                  </div>

                  {/* Suggested Recipes Chips */}
                  {msg.suggestedRecipeIds && msg.suggestedRecipeIds.length > 0 && (
                    <div className="mt-2 flex flex-col gap-1.5 w-full">
                      <span className="text-[10px] font-bold text-ink/40 uppercase tracking-wider px-1">
                        Önerilen Tarifler:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {msg.suggestedRecipeIds.map((id) => {
                          const recipe = getRecipeById(id);
                          if (!recipe) return null;
                          return (
                            <Link
                              key={id}
                              href={`/tarif/${id}`}
                              onClick={() => setIsOpen(false)}
                              className="inline-flex items-center gap-1.5 bg-cream hover:bg-terracotta/10 border border-cardborder-dark hover:border-terracotta/30 text-xs font-medium text-ink hover:text-terracotta px-3 py-1.5 rounded-full transition-all duration-150 shadow-sm"
                            >
                              <span>{recipe.title}</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Loading Indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="self-start bg-white border border-cardborder-dark/60 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm flex items-center gap-1"
                >
                  <span className="w-1.5 h-1.5 bg-terracotta rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 bg-terracotta rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 bg-terracotta rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-cardborder-dark flex items-center gap-2">
              <input
                type="text"
                placeholder="Şefe sor..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
                className="flex-grow bg-cream-dark border border-cardborder-dark rounded-xl py-2 px-3.5 text-sm text-ink placeholder-ink/40 focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="bg-terracotta hover:bg-terracotta-dark text-white p-2 rounded-xl transition-colors disabled:opacity-40 disabled:hover:bg-terracotta"
                aria-label="Gönder"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-terracotta hover:bg-terracotta-dark text-white p-4 rounded-full shadow-2xl flex items-center justify-center relative group"
        aria-label="Şef Asistanını Aç"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 45, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -45, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              <ChefHat className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Subtle pulse ring when closed */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full border-2 border-terracotta/30 animate-ping pointer-events-none" />
        )}
      </motion.button>
    </div>
  );
}