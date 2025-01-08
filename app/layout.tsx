import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NETWITX | Website Builder",
  description: "Next generation website builder for modern websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
