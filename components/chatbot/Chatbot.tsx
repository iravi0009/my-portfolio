"use client";

import { useEffect, useState } from "react";
import {
  X,
  ArrowLeft,
  Sparkles,
  Bot,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Brain,
  Code2,
  History,
  Trash2,
} from "lucide-react";

import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

type ChatSession = {
  id: string;
  title: string;
  messages: Message[];
  createdAt: string;
};

const suggestedQuestions = [
  {
    label: "What are Ravi's skills?",
    icon: Code2,
  },
  {
    label: "Tell me about his projects",
    icon: Briefcase,
  },
  {
    label: "What is Ravi's education?",
    icon: GraduationCap,
  },
  {
    label: "Tell me about his DNN research",
    icon: Brain,
  },
  {
    label: "What roles is Ravi looking for?",
    icon: Sparkles,
  },
  {
    label: "Show me Ravi's GitHub",
    icon: ExternalLink,
  },
];

const welcomeMessage: Message = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi! 👋 I'm Ravi AI, Ravi Raj's portfolio assistant.\n\nI can tell you about his **skills, projects, education, research, career interests, and GitHub**.\n\nWhat would you like to know?",
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    welcomeMessage,
  ]);

  const [loading, setLoading] = useState(false);

  const [history, setHistory] = useState<ChatSession[]>([]);

  const [showHistory, setShowHistory] = useState(false);

  /*
   * Load chat history from localStorage
   */
  useEffect(() => {
    try {
      const savedHistory = localStorage.getItem(
        "ravi-ai-chat-history"
      );

      if (savedHistory) {
        setHistory(JSON.parse(savedHistory));
      }
    } catch (error) {
      console.error(
        "Failed to load chat history:",
        error
      );
    }
  }, []);

  /*
   * Save history to localStorage
   */
  function saveHistory(updatedHistory: ChatSession[]) {
    setHistory(updatedHistory);

    try {
      localStorage.setItem(
        "ravi-ai-chat-history",
        JSON.stringify(updatedHistory)
      );
    } catch (error) {
      console.error(
        "Failed to save chat history:",
        error
      );
    }
  }

  /*
   * Send message to Gemini API
   */
  async function handleSend(message: string) {
    const trimmedMessage = message.trim();

    if (!trimmedMessage || loading) {
      return;
    }

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmedMessage,
    };

    setMessages((previous) => [
      ...previous,
      userMessage,
    ]);

    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmedMessage,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Failed to get AI response."
        );
      }

      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          data.reply ||
          "Sorry, I couldn't generate a response right now.",
      };

      setMessages((previous) => [
        ...previous,
        assistantMessage,
      ]);
    } catch (error) {
      console.error("Chatbot error:", error);

      const errorMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          "Sorry, I couldn't connect to Ravi AI right now. Please try again.",
      };

      setMessages((previous) => [
        ...previous,
        errorMessage,
      ]);
    } finally {
      setLoading(false);
    }
  }

  /*
   * BACK BUTTON
   *
   * Important:
   * This does NOT clear the conversation.
   */
  function handleBack() {
    setOpen(false);
    setShowHistory(false);
  }

  /*
   * EXIT CHAT
   *
   * 1. Save current conversation
   * 2. Add it to history
   * 3. Clear active conversation
   * 4. Close chatbot
   */
  function handleExit() {
    const actualMessages = messages.filter(
      (message) => message.id !== "welcome"
    );

    if (actualMessages.length > 0) {
      const firstUserMessage =
        actualMessages.find(
          (message) => message.role === "user"
        );

      const newSession: ChatSession = {
        id: crypto.randomUUID(),
        title:
          firstUserMessage?.content ||
          "Ravi AI Conversation",
        messages: messages,
        createdAt: new Date().toISOString(),
      };

      const updatedHistory = [
        newSession,
        ...history,
      ].slice(0, 20);

      saveHistory(updatedHistory);
    }

    setMessages([
      {
        ...welcomeMessage,
        id: "welcome",
      },
    ]);

    setShowHistory(false);
    setOpen(false);
  }

  /*
   * Open an old conversation
   */
  function openHistorySession(session: ChatSession) {
    setMessages(session.messages);
    setShowHistory(false);
    setOpen(true);
  }

  /*
   * Delete one history item
   */
  function deleteHistorySession(
    sessionId: string
  ) {
    const updatedHistory = history.filter(
      (session) => session.id !== sessionId
    );

    saveHistory(updatedHistory);
  }

  /*
   * Clear complete history
   */
  function clearHistory() {
    saveHistory([]);

    try {
      localStorage.removeItem(
        "ravi-ai-chat-history"
      );
    } catch (error) {
      console.error(
        "Failed to clear chat history:",
        error
      );
    }
  }

  /*
   * Format history date
   */
  function formatDate(date: string) {
    return new Date(date).toLocaleDateString(
      undefined,
      {
        day: "numeric",
        month: "short",
        year: "numeric",
      }
    );
  }

  return (
    <>
      {/* ================================================= */}
      {/* BACKDROP */}
      {/* ================================================= */}

      {open && (
        <div
          onClick={handleBack}
          className="fixed inset-0 z-[9997] bg-black/50 backdrop-blur-[2px]"
          aria-hidden="true"
        />
      )}

      {/* ================================================= */}
      {/* CHATBOT SIDE PANEL */}
      {/* ================================================= */}

      {open && (
        <div
          className="
            fixed
            right-0
            top-0
            z-[9998]
            flex
            h-screen
            w-full
            flex-col
            overflow-hidden
            border-l
            border-zinc-800
            bg-black
            shadow-2xl
            shadow-blue-500/10
            sm:w-[500px]
            lg:w-[45vw]
            xl:w-[40vw]
          "
        >
          {/* ================================================= */}
          {/* HEADER */}
          {/* ================================================= */}

          <div className="shrink-0 border-b border-zinc-800 bg-zinc-950 px-5 py-4">
            <div className="flex items-center justify-between">
              {/* Left side */}

              <div className="flex items-center gap-3">
                {/* BACK */}

                <button
                  onClick={handleBack}
                  className="
                    rounded-xl
                    p-2
                    text-gray-400
                    transition
                    hover:bg-zinc-800
                    hover:text-white
                  "
                  aria-label="Back"
                  title="Back"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>

                {/* AI Logo */}

                <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600/20 text-blue-400">
                  <Bot className="h-6 w-6" />

                  <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-zinc-950 bg-green-400" />
                </div>

                {/* Title */}

                <div>
                  <h3 className="font-semibold text-white">
                    Ravi AI
                  </h3>

                  <div className="mt-1 flex items-center gap-1.5 text-xs text-green-400">
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                    AI Assistant • Online
                  </div>
                </div>
              </div>

              {/* Right controls */}

              <div className="flex items-center gap-1">
                {/* HISTORY */}

                <button
                  onClick={() =>
                    setShowHistory(
                      (previous) => !previous
                    )
                  }
                  className="
                    rounded-xl
                    p-2
                    text-gray-400
                    transition
                    hover:bg-zinc-800
                    hover:text-white
                  "
                  aria-label="Chat history"
                  title="Chat history"
                >
                  <History className="h-5 w-5" />
                </button>

                {/* EXIT */}

                <button
                  onClick={handleExit}
                  className="
                    rounded-xl
                    p-2
                    text-gray-400
                    transition
                    hover:bg-red-500/10
                    hover:text-red-400
                  "
                  aria-label="Exit chatbot"
                  title="Exit and save conversation"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {!showHistory && (
              <p className="mt-3 text-xs leading-5 text-gray-500">
                Ask me about Ravi's professional
                background, projects, skills, education,
                research, or career interests.
              </p>
            )}
          </div>

          {/* ================================================= */}
          {/* HISTORY PANEL */}
          {/* ================================================= */}

          {showHistory ? (
            <div className="min-h-0 flex-1 overflow-y-auto">
              <div className="p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-white">
                      Chat History
                    </h2>

                    <p className="mt-1 text-xs text-gray-500">
                      Your previous Ravi AI conversations
                    </p>
                  </div>

                  {history.length > 0 && (
                    <button
                      onClick={clearHistory}
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-lg
                        px-3
                        py-2
                        text-xs
                        text-red-400
                        transition
                        hover:bg-red-500/10
                      "
                    >
                      <Trash2 className="h-4 w-4" />
                      Clear
                    </button>
                  )}
                </div>

                {history.length === 0 ? (
                  <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/10">
                      <History className="h-8 w-8 text-blue-400" />
                    </div>

                    <h3 className="font-semibold text-white">
                      No conversations yet
                    </h3>

                    <p className="mt-2 max-w-xs text-sm leading-6 text-gray-500">
                      Your conversations will appear
                      here after you exit a chat.
                    </p>

                    <button
                      onClick={() =>
                        setShowHistory(false)
                      }
                      className="
                        mt-5
                        rounded-xl
                        bg-blue-600
                        px-5
                        py-2.5
                        text-sm
                        font-medium
                        text-white
                        transition
                        hover:bg-blue-700
                      "
                    >
                      Start Chat
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {history.map((session) => (
                      <div
                        key={session.id}
                        className="
                          group
                          rounded-2xl
                          border
                          border-zinc-800
                          bg-zinc-950
                          p-4
                          transition
                          hover:border-blue-500/40
                          hover:bg-blue-500/5
                        "
                      >
                        <button
                          onClick={() =>
                            openHistorySession(
                              session
                            )
                          }
                          className="w-full text-left"
                        >
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400">
                              <Bot className="h-4 w-4" />
                            </div>

                            <div className="min-w-0 flex-1">
                              <h3 className="line-clamp-2 text-sm font-medium text-white">
                                {session.title}
                              </h3>

                              <p className="mt-1 text-xs text-gray-500">
                                {formatDate(
                                  session.createdAt
                                )}{" "}
                                •{" "}
                                {session.messages.filter(
                                  (message) =>
                                    message.role ===
                                    "user"
                                ).length}{" "}
                                questions
                              </p>
                            </div>
                          </div>
                        </button>

                        <div className="mt-3 flex justify-end">
                          <button
                            onClick={() =>
                              deleteHistorySession(
                                session.id
                              )
                            }
                            className="
                              rounded-lg
                              p-2
                              text-gray-600
                              transition
                              hover:bg-red-500/10
                              hover:text-red-400
                            "
                            aria-label="Delete conversation"
                            title="Delete conversation"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <>
              {/* ================================================= */}
              {/* MESSAGES */}
              {/* ================================================= */}

              <div className="min-h-0 flex-1 overflow-y-auto px-5 py-6">
                <div className="mx-auto max-w-2xl space-y-5">
                  {/* Suggested Questions */}

                  {messages.length === 1 &&
                    !loading && (
                      <div className="mb-6">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                          Suggested questions
                        </p>

                        <div className="grid grid-cols-1 gap-2">
                          {suggestedQuestions.map(
                            ({
                              label,
                              icon: Icon,
                            }) => (
                              <button
                                key={label}
                                onClick={() =>
                                  handleSend(label)
                                }
                                className="
                                  group
                                  flex
                                  items-center
                                  gap-3
                                  rounded-xl
                                  border
                                  border-zinc-800
                                  bg-zinc-950
                                  px-4
                                  py-3
                                  text-left
                                  text-sm
                                  text-gray-300
                                  transition-all
                                  duration-200
                                  hover:border-blue-500/50
                                  hover:bg-blue-500/10
                                  hover:text-white
                                "
                              >
                                <Icon className="h-4 w-4 shrink-0 text-blue-400 transition-transform group-hover:scale-110" />

                                <span>
                                  {label}
                                </span>

                                <span className="ml-auto text-gray-600 transition group-hover:text-blue-400">
                                  →
                                </span>
                              </button>
                            )
                          )}
                        </div>
                      </div>
                    )}

                  {/* Conversation */}

                  {messages.map((message) => (
                    <ChatMessage
                      key={message.id}
                      role={message.role}
                      content={message.content}
                    />
                  ))}

                  {/* Loading */}

                  {loading && (
                    <div className="flex justify-start">
                      <div className="rounded-2xl rounded-bl-md border border-zinc-800 bg-zinc-900 px-5 py-4 text-sm text-gray-400">
                        <div className="flex items-center gap-3">
                          <Bot className="h-4 w-4 text-blue-400" />

                          <span>
                            Ravi AI is thinking
                          </span>

                          <span className="flex gap-1">
                            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-400 [animation-delay:-0.3s]" />

                            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-400 [animation-delay:-0.15s]" />

                            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-400" />
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* ================================================= */}
              {/* INPUT */}
              {/* ================================================= */}

              <div className="shrink-0 border-t border-zinc-800 bg-zinc-950 p-4">
                <div className="mx-auto max-w-2xl">
                  <ChatInput
                    onSend={handleSend}
                    disabled={loading}
                  />

                  <p className="mt-2 text-center text-[11px] text-gray-600">
                    Ravi AI answers questions about Ravi's
                    portfolio and professional background.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* ================================================= */}
      {/* FLOATING CHAT BUTTON */}
      {/* ================================================= */}

      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="
            fixed
            bottom-6
            right-6
            z-[9999]
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-blue-600
            text-white
            shadow-lg
            shadow-blue-500/30
            transition-all
            duration-300
            hover:scale-110
            hover:bg-blue-700
            hover:shadow-blue-500/50
          "
          aria-label="Open AI chatbot"
        >
          <Sparkles className="h-6 w-6" />
        </button>
      )}
    </>
  );
}