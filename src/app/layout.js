import "./globals.css";

export const metadata = {
  title: "Siddharth | Portfolio",
  description: "A cinematic developer portfolio with a dark-to-light scene transition.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
