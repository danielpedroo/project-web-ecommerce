import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ecommerce Lab",
  description: "| Ecommerce Lab Engenharia de Software |",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
