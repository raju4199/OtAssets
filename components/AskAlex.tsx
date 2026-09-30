'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import {
  DEFAULT_SUGGESTIONS,
  GREETING,
  findAnswer,
  type AlexAction,
  type SupportTab,
} from '@/components/alexKnowledge';

interface Message {
  id: number;
  role: 'alex' | 'user';
  text: string;
  suggestions?: string[];
  action?: AlexAction;
}

interface AskAlexProps {
  /** Lets Alex switch the support workspace to the tab an answer refers to. */
  onNavigate?: (tab: SupportTab) => void;
}

const INITIAL_MESSAGE: Message = {
  id: 0,
  role: 'alex',
  text: GREETING,
  suggestions: DEFAULT_SUGGESTIONS,
};

/** Renders **bold**, *italic* and `code` spans without pulling in a markdown dependency. */
function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split('\n').map((line, lineIdx) => (
        <span key={lineIdx} className={line === '' ? 'block h-2.5' : 'block'}>
          {line.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g).map((part, partIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return (
                <strong key={partIdx} className="font-bold">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            if (part.startsWith('`') && part.endsWith('`')) {
              return (
                <code
                  key={partIdx}
                  className="font-mono text-[11px] bg-slate-900/10 text-slate-800 px-1 py-0.5 rounded break-all"
                >
                  {part.slice(1, -1)}
                </code>
              );
            }
            if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
              return (
                <em key={partIdx} className="italic">
                  {part.slice(1, -1)}
                </em>
              );
            }
            return <span key={partIdx}>{part}</span>;
          })}
        </span>
      ))}
    </>
  );
}

function AlexAvatar({ size = 'md' }: { size?: 'sm' | 'md' }) {
  return (
    <div
      className={`${
        size === 'sm' ? 'w-7 h-7 text-[11px]' : 'w-9 h-9 text-sm'
      } rounded-full bg-gradient-to-br from-[#e31837] to-[#c41230] text-white font-bold flex items-center justify-center flex-shrink-0 shadow-sm`}
      aria-hidden="true"
    >
      A
    </div>
  );
}

export default function AskAlex({ onNavigate }: AskAlexProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const nextId = useRef(1);
  const replyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Nudge first-time visitors once, then leave them alone.
  useEffect(() => {
    if (isOpen) return;
    const timer = setTimeout(() => setShowTeaser(true), 4000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => () => {
    if (replyTimer.current) clearTimeout(replyTimer.current);
  }, []);

  const send = useCallback((raw: string) => {
    const question = raw.trim();
    if (!question || replyTimer.current) return;

    setMessages((prev) => [...prev, { id: nextId.current++, role: 'user', text: question }]);
    setInput('');
    setIsTyping(true);

    const match = findAnswer(question);
    // Short pause so the reply reads as a response rather than a lookup table.
    const delay = Math.min(1400, 450 + match.answer.length * 1.2);

    replyTimer.current = setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: nextId.current++,
          role: 'alex',
          text: match.answer,
          suggestions: match.suggestions,
          action: match.action,
        },
      ]);
      replyTimer.current = null;
    }, delay);
  }, []);

  const handleAction = (action: AlexAction) => {
    onNavigate?.(action.tab);
    document.getElementById('support-workspace')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openChat = () => {
    setIsOpen(true);
    setShowTeaser(false);
  };

  const resetChat = () => {
    if (replyTimer.current) {
      clearTimeout(replyTimer.current);
      replyTimer.current = null;
    }
    setIsTyping(false);
    setMessages([INITIAL_MESSAGE]);
    nextId.current = 1;
    inputRef.current?.focus();
  };

  return (
    <>
      {/* Chat panel */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Ask Alex support assistant"
          aria-modal="false"
          className="fixed z-50 bg-white shadow-2xl border border-gray-200 flex flex-col overflow-hidden
                     inset-x-0 bottom-0 top-0 rounded-none
                     sm:inset-x-auto sm:top-auto sm:right-6 sm:bottom-24 sm:w-[400px] sm:h-[560px] sm:max-h-[calc(100vh-8rem)] sm:rounded-2xl"
        >
          {/* Header */}
          <div className="bg-[#1a2332] text-white px-4 py-3.5 flex items-center gap-3 flex-shrink-0">
            <div className="relative">
              <AlexAvatar />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#1a2332]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-bold text-sm leading-tight">Alex</div>
              <div className="text-[11px] text-slate-300 leading-tight">
                OTassets Support Assistant · Online
              </div>
            </div>
            <button
              onClick={resetChat}
              title="Start a new conversation"
              aria-label="Start a new conversation"
              className="text-slate-300 hover:text-white p-1.5 rounded hover:bg-white/10 transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.65 6.35A7.958 7.958 0 0 0 12 4a8 8 0 1 0 7.73 10h-2.08A6 6 0 1 1 12 6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
              </svg>
            </button>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="text-slate-300 hover:text-white p-1.5 rounded hover:bg-white/10 transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto bg-[#f7f7f7] px-4 py-4 flex flex-col gap-4">
            {messages.map((message) =>
              message.role === 'user' ? (
                <div key={message.id} className="flex justify-end">
                  <div className="max-w-[82%] bg-[#1a2332] text-white text-[13px] leading-relaxed px-3.5 py-2.5 rounded-2xl rounded-br-sm shadow-sm">
                    {message.text}
                  </div>
                </div>
              ) : (
                <div key={message.id} className="flex flex-col gap-2">
                  <div className="flex gap-2.5 items-start">
                    <AlexAvatar size="sm" />
                    <div className="max-w-[86%] bg-white border border-gray-200 text-slate-700 text-[13px] leading-relaxed px-3.5 py-2.5 rounded-2xl rounded-tl-sm shadow-sm">
                      <RichText text={message.text} />
                    </div>
                  </div>

                  {message.action && (
                    <button
                      onClick={() => handleAction(message.action!)}
                      className="self-start ml-9 inline-flex items-center gap-1.5 bg-[#e31837] hover:bg-[#c41230] text-white text-[11px] font-bold px-3 py-1.5 rounded-md transition-colors shadow-sm cursor-pointer"
                    >
                      {message.action.label}
                      <span aria-hidden="true">→</span>
                    </button>
                  )}

                  {message.suggestions && message.suggestions.length > 0 && (
                    <div className="ml-9 flex flex-wrap gap-1.5">
                      {message.suggestions.map((suggestion) => (
                        <button
                          key={suggestion}
                          onClick={() => send(suggestion)}
                          className="text-[11px] font-semibold text-slate-600 bg-white border border-gray-300 hover:border-[#e31837] hover:text-[#e31837] px-2.5 py-1.5 rounded-full transition-colors cursor-pointer"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ),
            )}

            {isTyping && (
              <div className="flex gap-2.5 items-center" aria-live="polite">
                <AlexAvatar size="sm" />
                <div className="bg-white border border-gray-200 px-3.5 py-3 rounded-2xl rounded-tl-sm shadow-sm flex gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" />
                  <span className="sr-only">Alex is typing</span>
                </div>
              </div>
            )}
          </div>

          {/* Composer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="border-t border-gray-200 bg-white p-3 flex items-center gap-2 flex-shrink-0"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about firmware, advisories, install…"
              aria-label="Ask Alex a question"
              className="flex-1 min-w-0 text-[13px] text-slate-800 bg-slate-50 border border-gray-300 rounded-full px-4 py-2.5 focus:outline-none focus:border-[#e31837] focus:bg-white transition-colors placeholder-slate-400"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              aria-label="Send message"
              className="w-10 h-10 rounded-full bg-[#e31837] hover:bg-[#c41230] disabled:bg-slate-300 disabled:cursor-not-allowed text-white flex items-center justify-center flex-shrink-0 transition-colors cursor-pointer"
            >
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </form>

          <div className="bg-slate-50 border-t border-gray-200 px-4 py-2 text-[10px] text-slate-400 text-center flex-shrink-0">
            Alex is an automated assistant · For urgent OT incidents, contact your site engineer
          </div>
        </div>
      )}

      {/* Teaser bubble */}
      {!isOpen && showTeaser && (
        <div className="fixed bottom-24 right-6 z-40 max-w-[230px] bg-white border border-gray-200 shadow-xl rounded-xl px-3.5 py-3 flex items-start gap-2.5">
          <AlexAvatar size="sm" />
          <div className="flex-1">
            <p className="text-[12px] text-slate-700 leading-snug">
              Questions about patch <strong className="font-bold">v3.2.1.0</strong>? I can help.
            </p>
            <button
              onClick={openChat}
              className="mt-1.5 text-[11px] font-bold text-[#e31837] hover:underline cursor-pointer"
            >
              Ask Alex →
            </button>
          </div>
          <button
            onClick={() => setShowTeaser(false)}
            aria-label="Dismiss"
            className="text-slate-300 hover:text-slate-600 text-xs leading-none cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}

      {/* Floating launcher */}
      <button
        onClick={() => (isOpen ? setIsOpen(false) : openChat())}
        aria-label={isOpen ? 'Close Ask Alex chat' : 'Open Ask Alex chat'}
        aria-expanded={isOpen}
        className={`fixed bottom-6 right-6 z-50 items-center gap-2.5 bg-[#e31837] hover:bg-[#c41230] text-white pl-3 pr-5 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all hover:-translate-y-0.5 cursor-pointer ${
          // On phones the panel is full-screen and has its own close button,
          // so the launcher would just sit on top of the conversation.
          isOpen ? 'hidden sm:inline-flex' : 'inline-flex'
        }`}
      >
        {isOpen ? (
          <>
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
            <span className="font-bold text-sm">Close</span>
          </>
        ) : (
          <>
            <span className="relative flex">
              <span className="w-8 h-8 rounded-full bg-white text-[#e31837] font-bold text-sm flex items-center justify-center">
                A
              </span>
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#e31837]" />
            </span>
            <span className="font-bold text-sm whitespace-nowrap">Ask Alex</span>
          </>
        )}
      </button>
    </>
  );
}
