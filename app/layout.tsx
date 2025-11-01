import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AOSInit } from "@/components/aos-init";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alzheimer's Universe - Free Brain Health Education",
  description: "Evidence-based Alzheimer's education, resources, and support for patients, caregivers, and healthcare providers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <AOSInit />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}