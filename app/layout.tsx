import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lydia Braun - Psychotherapie in Köln",
  description: "Professionelle Psychotherapie in Köln - Individuelle Beratung und Therapie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          <main className="pt-20">
            {children}
          </main>
          <footer className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200/20 dark:border-gray-700/20">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Kontakt</h3>
                  <p className="text-gray-600 dark:text-gray-300">Praxis für Psychotherapie</p>
                  <p className="text-gray-600 dark:text-gray-300">Köln, Deutschland</p>
                  <p className="text-gray-600 dark:text-gray-300">Tel: [Telefonnummer]</p>
                  <p className="text-gray-600 dark:text-gray-300">E-Mail: [E-Mail]</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Sprechzeiten</h3>
                  <p className="text-gray-600 dark:text-gray-300">Montag - Freitag: 9:00 - 18:00</p>
                  <p className="text-gray-600 dark:text-gray-300">Termine nach Vereinbarung</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Rechtliches</h3>
                  <a href="#" className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">Datenschutz</a>
                  <a href="#" className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">Impressum</a>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-gray-200/20 dark:border-gray-700/20 text-center text-gray-600 dark:text-gray-300">
                <p>&copy; {new Date().getFullYear()} Lydia Braun - Alle Rechte vorbehalten</p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
