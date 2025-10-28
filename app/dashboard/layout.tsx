import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import Link from 'next/link';
import { Plane, Trophy, User } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FlightQuest - MSFS Flight Tracker',
  description: 'Track your flights, earn points, and compete in the global ranking',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav className="bg-gray-900 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center gap-2">
                <Plane className="w-6 h-6 text-blue-500" />
                <span className="text-xl font-bold">FlightQuest</span>
              </Link>
              
              <div className="flex gap-4">
                <Link 
                  href="/" 
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Plane className="w-4 h-4" />
                  <span>Dashboard</span>
                </Link>
                <Link 
                  href="/ranking" 
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Trophy className="w-4 h-4" />
                  <span>Ranking</span>
                </Link>
                <Link 
                  href="/profile" 
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <User className="w-4 h-4" />
                  <span>Perfil</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
    </section>
  );
}