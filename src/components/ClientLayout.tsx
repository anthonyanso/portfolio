'use client';
import React from 'react';
import { Footer } from '@/sections/Footer';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    } else {
      console.warn('EmailJS public key is not defined');
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        {children}
      </main>
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 5000,
          style: {
            background: '#1f2937',
            color: '#fff',
          },
        }}
      />
    </div>
  );
}