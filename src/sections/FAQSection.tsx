"use client";
import React, { useState } from "react";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import ArrowDown from '@/assets/images/arrowDown.png';

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer:
      'I specialize in JavaScript, Laravel, React, React Native, Next.js, TypeScript, Node.js, and modern CSS frameworks like Tailwind CSS.',
  },
  {
    question: "How do you stay updated with the latest tech trends?",
    answer:
      "I regularly follow tech blogs, attend webinars, contribute to open source, and experiment with new tools and frameworks.",
  },
  {
    question: "Can you work with backend technologies?",
    answer:
      'Yes, I have experience with Node.js, Express, and integrating RESTful APIs and databases like MongoDB and PostgreSQL, as well as working with PHP.',
  },
  {
    question: "Are you open to remote or freelance opportunities?",
    answer:
      "Absolutely! I am open to both remote and freelance projects, and I enjoy collaborating with teams worldwide.",
  },
  {
    question: "How do you approach problem-solving in development?",
    answer:
      "I break down problems, research solutions, prototype quickly, and iterate based on feedback for optimal results.",
  },
  {
    question: "What tools do you use for productivity?",
    answer:
      "I use VS Code, GitHub, Figma, Notion, and automation tools to streamline my workflow and boost productivity.",
  },
];

const ProductivitySVG = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-8">
    <circle cx="40" cy="40" r="38" fill="url(#paint0_linear)" stroke="#38bdf8" strokeWidth="4" />
    <rect x="22" y="32" width="36" height="24" rx="6" fill="#fff" />
    <rect x="28" y="38" width="24" height="12" rx="3" fill="#38bdf8" />
    <circle cx="40" cy="44" r="2" fill="#fff" />
    <defs>
      <linearGradient id="paint0_linear" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#34d399" />
        <stop offset="1" stopColor="#38bdf8" />
      </linearGradient>
    </defs>
  </svg>
);

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="py-20 lg:py-28" id="faq">
      <div className="container">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Quick answers to common questions about my skills, workflow, and availability."
        />
        <ProductivitySVG />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {faqs.map((faq, idx) => (
            <Card key={idx} className="p-6 transition-shadow hover:shadow-lg cursor-pointer">
              <button
                type="button"
                className="w-full text-left focus:outline-none"
                onClick={() => handleToggle(idx)}
                aria-expanded={openIndex === idx ? true : false}
                aria-controls={`faq-answer-${idx}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-lg text-white">{faq.question}</span>
                  <span className={`ml-4 transform transition-transform ${openIndex === idx ? 'rotate-180' : ''}`}>
                    <img src={ArrowDown.src} alt="Arrow Down" className="inline-block w-5 h-5" />
                  </span>
                </div>
              </button>
              <div
                id={`faq-answer-${idx}`}
                className={`mt-3 text-gray-300 text-base transition-all duration-300 ease-in-out overflow-hidden ${openIndex === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                style={{ minHeight: openIndex === idx ? '2rem' : 0 }}
              >
                {openIndex === idx && <p>{faq.answer}</p>}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
