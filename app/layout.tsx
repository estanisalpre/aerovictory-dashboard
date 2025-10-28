// app/layout.tsx
import './globals.css';
import Link from 'next/link';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'FlightQuest — Vuela. Compite. Gana.',
  description: 'Sistema diario de desafíos para Microsoft Flight Simulator — Landing, registro y dashboard.',
};

const LANDING_ROUTES = [
  { href: '/', label: 'Inicio' },
  { href: '/guide', label: 'Cómo jugar' },
  { href: '/features', label: 'Características' },
  { href: '/pricing', label: 'Precios' },
  { href: '/winners', label: 'Ganadores' },
  { href: '/faq', label: 'FAQ' },
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black text-slate-100">
        <header className="border-b border-slate-800">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-500 to-sky-400 flex items-center justify-center font-bold text-lg text-black">FQ</div>
              <div>
                <div className="font-semibold text-lg">FlightQuest</div>
                <div className="text-xs text-slate-400 -mt-1">Vuela. Compite. Gana.</div>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              {LANDING_ROUTES.map((r) => (
                <Link key={r.href} href={r.href} className="text-slate-300 hover:text-white">
                  {r.label}
                </Link>
              ))}
              <Link href="/register" className="ml-4 px-4 py-2 bg-indigo-500 rounded-md text-black font-medium hover:opacity-95">Regístrate</Link>
              <Link href="/login" className="ml-2 px-4 py-2 border border-slate-700 rounded-md text-slate-300 hover:text-white">Iniciar sesión</Link>
            </nav>

            {/* Mobile menu trigger (simple) */}
            <div className="md:hidden">
              <Link href="/register" className="px-3 py-2 bg-indigo-500 rounded-md text-black font-medium">Regístrate</Link>
            </div>
          </div>

          {/* Mobile routes list (simple, visible on small screens) */}
          <div className="md:hidden border-t border-slate-800">
            <div className="max-w-6xl mx-auto px-4 py-2 flex gap-3 overflow-x-auto">
              {LANDING_ROUTES.map((r) => (
                <Link key={r.href} href={r.href} className="text-slate-300 text-sm whitespace-nowrap">
                  {r.label}
                </Link>
              ))}
            </div>
          </div>
        </header>

        <main>{children}</main>

        <footer className="border-t border-slate-800 mt-16">
          <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-slate-400 text-sm">© {new Date().getFullYear()} FlightQuest · Hecho con ❤️</div>
            <div className="flex gap-4">
              <Link href="/terms" className="text-slate-400 text-sm hover:text-white">Términos</Link>
              <Link href="/privacy" className="text-slate-400 text-sm hover:text-white">Privacidad</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}