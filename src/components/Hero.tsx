'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from './Logo'

const SimpleWrenchIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="h-5 w-5"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M8 6h8l2 2v4l-2 2H8l-2-2V8z" strokeLinejoin="round" />
  </svg>
)

const SimpleNutIcon = () => (
  <svg
    viewBox="8 7 8 10"
    className="h-5 w-5"
  >
    <path 
      d="M12 8.5L15 10.25L15 13.75L12 15.5L9 13.75L9 10.25L12 8.5Z" 
      fill="currentColor"
    />
  </svg>
)

const BoltIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="h-5 w-5"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path 
      d="M7 8L12 6L17 8L17 12L12 14L7 12L7 8Z" 
      strokeLinejoin="round"
    />
    <path
      d="M12 14L12 18"
      strokeLinecap="round"
    />
  </svg>
)

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <nav className={`fixed left-0 right-0 top-0 z-50 transition-all duration-200 ${
        isScrolled || mobileMenuOpen ? 'bg-indigo-600/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>
            <div className="hidden space-x-8 sm:flex">
              <Link href="#features" className="hover:text-white/80">
                Features
              </Link>
              <Link href="#pricing" className="hover:text-white/80">
                Pricing
              </Link>
              <Link href="#faq" className="hover:text-white/80">
                FAQ
              </Link>
              <Link
                href="https://app.utilhq.com/signup"
                className="hover:text-white/80"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </Link>
            </div>
            <button
              type="button"
              className="sm:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="mt-4 space-y-2 pb-4 sm:hidden">
              <Link
                href="#features"
                className="block rounded-lg px-3 py-2.5 hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="block rounded-lg px-3 py-2.5 hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#faq"
                className="block rounded-lg px-3 py-2.5 hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="https://app.utilhq.com/signup"
                className="block rounded-lg px-3 py-2.5 hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      </nav>
      <div className="container mx-auto px-6 pt-32 pb-24 text-center">
        <div className="flex flex-col items-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Code-First Internal Tools
          </h1>
          <h2 className="mb-6 text-2xl font-semibold leading-tight text-white/90 sm:text-3xl md:text-4xl">
            Managed Interval-Compatible Hosting
          </h2>
          <p className="mb-12 text-lg sm:text-xl md:text-2xl">
            Build powerful internal tools directly in your IDE. No new frameworks to learn, no context switching.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="https://app.utilhq.com/signup"
              className="w-full rounded-lg bg-white px-8 py-3 text-center font-semibold text-indigo-600 shadow-lg transition hover:bg-gray-100 sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
            </Link>
            <Link
              href="#pricing"
              className="w-full rounded-lg border-2 border-white px-8 py-3 text-center font-semibold text-white transition hover:bg-white hover:text-indigo-600 sm:w-auto"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
