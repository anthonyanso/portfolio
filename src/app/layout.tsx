import "./globals.css";
import ClientRootLayout from '@/components/ClientRootLayout';

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
      </ClientRootLayout>
    </html>
  );
}