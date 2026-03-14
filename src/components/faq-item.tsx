"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

type FaqItemProps = {
  question: string;
  answer: string;
};

export function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article
      className={`rounded-3xl border bg-white px-6 py-5 shadow-[0_10px_35px_rgba(28,25,23,0.05)] transition-colors duration-300 ${
        isOpen ? "border-[#D2AE6D]" : "border-stone-200"
      }`}
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="flex w-full items-start justify-between gap-4 text-left"
      >
        <h3 className="text-base font-semibold text-stone-900">{question}</h3>
        <span
          className={`mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-white transition-all duration-300 ${
            isOpen
              ? "rotate-180 border-[#D2AE6D] text-[#61491E]"
              : "rotate-0 border-stone-200 text-stone-500"
          }`}
        >
          <ChevronDown size={16} />
        </span>
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-out ${
          isOpen
            ? "mt-3 grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="max-w-3xl overflow-hidden text-sm leading-6 text-stone-600">
          {answer}
        </p>
      </div>
    </article>
  );
}
