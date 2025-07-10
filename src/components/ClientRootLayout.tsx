"use client";
import React, { useEffect, useState } from 'react';
import { twMerge } from "tailwind-merge";
import { ClientLayout } from '@/components/ClientLayout';
import Preloader from '@/components/Preloader';
import { Inter, Calistoga } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: "--font-sans" });
const calistoga = Calistoga({ subsets: ['latin'], variable: "--font-serif", weight: ["400"] });

export default function ClientRootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timerDone = false;
    let pageLoaded = false;
    let timer: NodeJS.Timeout;

    const finish = () => {
      if (timerDone && pageLoaded) setLoading(false);
    };

    timer = setTimeout(() => {
      timerDone = true;
      finish();
    }, 4000);

    const handleLoad = () => {
      pageLoaded = true;
      finish();
    };

    if (document.readyState === 'complete') {
      pageLoaded = true;
      finish();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <body className={twMerge(inter.variable, calistoga.variable, "bg-gray-900 text-white antialiased font-sans")}> 
      {loading && <Preloader />}
      <div style={loading ? { opacity: 0, pointerEvents: 'none' } : { opacity: 1, transition: 'opacity 0.5s' }}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </div>
    </body>
  );
}
