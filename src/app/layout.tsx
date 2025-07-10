import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ResponsiveLayout } from "@/components/layout/responsive-layout";

const gottak = localFont({
  src: [
    {
      path: '../assets/fonts/Gottak/Gottak-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Gottak/Gottak-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Gottak/Gottak-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Gottak/Gottak-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Gottak/Gottak-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Gottak/Gottak-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-gottak',
  display: 'swap',
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
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
        className={`${gottak.variable} ${sourceCodePro.variable} font-sans antialiased`}
      >
        <Providers>
          <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
            <Sidebar />
            
            <ResponsiveLayout>
              <Header />
              
              <main className="flex-1">
                {children}
              </main>
              
              <Footer />
            </ResponsiveLayout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
