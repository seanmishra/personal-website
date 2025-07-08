import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ResponsiveLayout } from "@/components/layout/responsive-layout";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Sean Mishra",
  description: "Designer & Developer crafting digital experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetBrainsMono.variable} font-body antialiased`}
      >
        <Providers>
          <div className="min-h-screen bg-neutral-100 dark:bg-neutral-900">
            <Sidebar />
            
            <ResponsiveLayout>
              <Header />
              
              <main className="flex-1 p-6">
                <div className="max-w-7xl mx-auto">
                  {children}
                </div>
              </main>
              
              <Footer />
            </ResponsiveLayout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
