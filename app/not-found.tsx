// app/not-found.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          router.push('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Logo */}
        <div className="mb-12">
          <Link href="/" className="text-xl text-gray-800 tracking-wide">
          Circum Centric
          </Link>
        </div>

        {/* Illustration */}
        <div className="mb-8">
          <div className="mx-auto h-32 w-32 text-gray-300">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="w-full h-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8c0 1.703-.528 3.281-1.43 4.577"
              />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="mb-8">
          <div className="text-5xl text-gray-400 mb-6 font-light">404</div>
          <h1 className="text-xl text-gray-700 mb-4 font-normal">
            Page not found
          </h1>
          <p className="text-gray-500 leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Redirecting in <span className="text-gray-600">{countdown}</span> seconds...
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-8">
          <div className="text-sm text-gray-500 mb-4">You might be looking for:</div>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm px-3 py-1 border border-gray-200 rounded-full hover:border-gray-300 transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-gray-900 text-sm px-3 py-1 border border-gray-200 rounded-full hover:border-gray-300 transition-colors">
              Services
            </Link>
            <Link href="/contact-us" className="text-gray-600 hover:text-gray-900 text-sm px-3 py-1 border border-gray-200 rounded-full hover:border-gray-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => router.back()}
            className="px-5 py-2.5 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm"
          >
            Go back
          </button>
          <Link
            href="/"
            className="px-5 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm text-center"
          >
            Home page
          </Link>
        </div>

        {/* Support */}
        <div className="mt-12 pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-400">
            Need help?{' '}
            <Link href="/contact" className="text-gray-500 hover:text-gray-700">
              Contact support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}