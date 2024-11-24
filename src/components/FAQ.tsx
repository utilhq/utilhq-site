'use client'

import { useState } from 'react'
import { usePostHog } from '@/hooks/usePostHog'

const faqs = [
  {
    question: "What is utilhq?",
    answer:
      "utilhq is a code-first platform for building internal tools. Unlike traditional no-code solutions, utilhq lets you build tools directly in your IDE, using your existing code and development workflow. It's compatible with interval-server, providing a familiar developer experience with added enterprise features.",
  },
  {
    question: "How is utilhq different from other internal tools platforms?",
    answer:
      "utilhq takes a code-first approach, eliminating the overhead of traditional platforms. You write code in your IDE, use version control, and leverage your existing functions and infrastructure. No need to learn new frameworks, build UIs, or duplicate business logic.",
  },
  {
    question: "Can I use my existing codebase?",
    answer:
      "Yes! utilhq is designed to work with your existing code. Import your functions directly, use your existing database connections, and leverage your current authentication system. No need to rebuild or duplicate functionality.",
  },
  {
    question: "Do I need to build a frontend?",
    answer:
      "No! utilhq automatically generates a clean, professional interface based on your code. Focus on writing your business logic, and we'll handle the UI. Of course, if you want to customize the interface, you have full control to do so.",
  },
  {
    question: "How does deployment work?",
    answer:
      "utilhq integrates with your existing development workflow. Use your preferred CI/CD pipeline, version control system, and deployment process. Your tools run on your infrastructure, maintaining security and control.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { capture } = usePostHog()

  const handleQuestionClick = (index: number, question: string) => {
    setOpenIndex(openIndex === index ? null : index)
    capture('faq_question_clicked', {
      question,
      action: openIndex === index ? 'close' : 'open',
    })
  }

  return (
    <section id="faq" className="w-full bg-white py-24 scroll-mt-16">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Everything you need to know about utilhq
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => handleQuestionClick(index, faq.question)}
                className="flex w-full items-center justify-between rounded-lg bg-gray-50 px-4 py-4 text-left hover:bg-gray-100 sm:px-6"
              >
                <span className="text-base font-semibold text-gray-900 sm:text-lg">
                  {faq.question}
                </span>
                <svg
                  className={`h-6 w-6 transform text-gray-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="mt-2 rounded-lg bg-white px-6 py-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
