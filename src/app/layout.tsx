import { ReactNode } from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />

      <body className="bg-gray-900 px-5 py-5">{children}</body>
    </html>
  );
}
