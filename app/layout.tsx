import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Vibe Coding Bootcamp",
  description: "Deployment & Hosting: Vom Laptop zur Live-App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Setzt die Theme-Klasse vor dem ersten Paint, um Flackern zu vermeiden */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function () {
              try {
                var theme = localStorage.getItem("theme");
                if (!theme) {
                  theme = window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                    : "light";
                }
                if (theme === "dark") {
                  document.documentElement.classList.add("dark");
                }
              } catch (e) {}
            })();`,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
