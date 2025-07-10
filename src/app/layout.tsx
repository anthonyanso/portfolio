import "./globals.css";
import ClientRootLayout from '@/components/ClientRootLayout';
import { SpeedInsights } from "@vercel/speed-insights/next";

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
      <ClientRootLayout>
        {children}
        <SpeedInsights />
      </ClientRootLayout>
    </html>
  );
}