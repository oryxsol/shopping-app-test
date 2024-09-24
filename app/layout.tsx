// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "My Next.js App",
  description: "A Next.js 14 project for product management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
