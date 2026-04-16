import type { Metadata } from "next";
import { Epilogue, Architects_Daughter, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-headline",
  display: "swap",
});

const architectsDaughter = Architects_Daughter({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-handwritten",
  display: "swap",
});

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FAILURE BOX | THE LIVING DOCUMENT",
  description:
    "Engineering kits designed to fail — on purpose. Chaos modules with intentional flaws so you learn why things break, not just how they work.",
  openGraph: {
    title: "FAILURE BOX",
    description: "Nothing is Perfect. That's the Point.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${epilogue.variable} ${architectsDaughter.variable} ${beVietnamPro.variable} graph-paper text-on-surface font-body selection:bg-primary-container`}
      >
        {children}
      </body>
    </html>
  );
}
