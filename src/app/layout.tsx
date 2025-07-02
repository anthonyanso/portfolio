import { Inter, Calistoga } from 'next/font/google';
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { ClientLayout } from '@/components/ClientLayout';

const inter = Inter({ subsets: ['latin'], variable: "--font-sans" });
const calistoga = Calistoga({ subsets: ['latin'], variable: "--font-serif", weight: ["400"] });

export const metadata = {
  title: 'Anthony Anso | Portfolio',
  description: 'Welcome to my portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={twMerge(inter.variable, calistoga.variable, "bg-gray-900 text-white antialiased font-sans")}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}