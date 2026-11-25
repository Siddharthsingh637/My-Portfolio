import "./globals.css";
import { Anton, Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anton",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata = {
  title: "Siddharth Singh — Full-Stack Developer",
  description:
    "Full-Stack Developer and Freelancer building clear web products with React, Next.js, and modern backends. Open to internships, freelance, and remote work.",
  keywords: [
    "Siddharth Singh",
    "Full Stack Developer",
    "Freelancer",
    "React",
    "Next.js",
    "Patna",
    "India",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${jakarta.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#0A0A0A]">{children}</body>
    </html>
  );
}
