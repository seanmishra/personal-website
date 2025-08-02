import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "@/components/providers";
import { PostHogProvider } from "@/components/posthog-provider";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ResponsiveLayout } from "@/components/layout/responsive-layout";

const nudicamono = localFont({
  src: [
    {
      path: '../assets/fonts/nudicamono/nudicamono-thin-webfont.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../assets/fonts/nudicamono/nudicamono-thinitalic-webfont.woff2',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../assets/fonts/nudicamono/nudicamono-ultralight-webfont.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../assets/fonts/nudicamono/nudicamono-ultralightitalic-webfont.woff2',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../assets/fonts/nudicamono/nudicamono-light-webfont.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/nudicamono/nudicamono-lightitalic-webfont.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../assets/fonts/nudicamono/nudicamono-regular-webfont.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/nudicamono/nudicamono-regularitalic-webfont.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../assets/fonts/nudicamono/nudicamono-medium-webfont.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/nudicamono/nudicamono-mediumitalic-webfont.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../assets/fonts/nudicamono/nudicamono-bold-webfont.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/nudicamono/nudicamono-bolditalic-webfont.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-nudicamono',
  display: 'swap',
});

const nudica = localFont({
  src: [
    {
      path: '../assets/fonts/nudica/nudica-thin-webfont.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../assets/fonts/nudica/nudica-thinitalic-webfont.woff2',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../assets/fonts/nudica/nudica-ultralight-webfont.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../assets/fonts/nudica/nudica-ultralightitalic-webfont.woff2',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../assets/fonts/nudica/nudica-light-webfont.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/nudica/nudica-lightitalic-webfont.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../assets/fonts/nudica/nudica-regular-webfont.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/nudica/nudica-regularitalic-webfont.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../assets/fonts/nudica/nudica-medium-webfont.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/nudica/nudica-mediumitalic-webfont.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../assets/fonts/nudica/nudica-bold-webfont.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/nudica/nudica-bolditalic-webfont.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-nudica',
  display: 'swap',
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
        className={`${nudicamono.variable} ${nudica.variable} font-mono antialiased`}
      >
        <Providers>
          <PostHogProvider>
            <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400">
              <Sidebar />
              
              <ResponsiveLayout>
                <Header />
                
                <main className="flex-1">
                  {children}
                </main>
                
                <Footer />
              </ResponsiveLayout>
            </div>
          </PostHogProvider>
        </Providers>
      </body>
    </html>
  );
}
