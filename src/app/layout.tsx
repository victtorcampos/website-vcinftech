import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VCINF TECH",
  description: "Soluções Completas em Hardware e Inteligência Fiscal",
};

const AntiFlickerScript = () => {
  const script = `
    (function() {
      try {
        var theme = localStorage.getItem('theme');
        if (theme) {
          document.documentElement.setAttribute('data-theme', theme);
        } else {
          var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
          if (darkQuery.matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
          } else {
            document.documentElement.setAttribute('data-theme', 'light');
          }
        }
      } catch (e) {}
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <AntiFlickerScript />
        <ThemeProvider>
          <header className="fixed top-4 right-4 z-50">
             <ThemeToggle />
          </header>
          <main className={inter.className}>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
