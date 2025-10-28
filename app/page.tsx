import Link from 'next/link';

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      {/* Hero */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            FlightQuest — Vuela. Compite. Gana.
          </h1>
          <p className="mt-6 text-slate-300 max-w-xl">
            Participa en 3 desafíos diarios, compite por el mejor aterrizaje y gana puntos para canjear recompensas.
          </p>

          <div className="mt-8 flex gap-4">
            <Link href="/register" className="px-6 py-3 bg-indigo-500 rounded-md font-semibold text-black">Comenzar Gratis</Link>
            <Link href="/guide" className="px-6 py-3 border border-slate-700 rounded-md text-slate-300">Cómo jugar</Link>
          </div>
        </div>

        <div className="rounded-2xl bg-slate-800/50 p-6">
          {/* Placeholder para imagen/carousel */}
          <div className="h-64 rounded-lg bg-gradient-to-br from-sky-700 to-indigo-600 flex items-center justify-center text-white">
            Demo visual / carousel
          </div>
        </div>
      </div>

      {/* Sección de features (breve) */}
      <div className="mt-16 grid md:grid-cols-3 gap-6">
        <div className="bg-slate-900/60 p-6 rounded-lg">
          <h3 className="font-semibold">Vuelos diarios</h3>
          <p className="text-slate-400 mt-2">3 rutas generadas automáticamente cada día.</p>
        </div>
        <div className="bg-slate-900/60 p-6 rounded-lg">
          <h3 className="font-semibold">Puntuación</h3>
          <p className="text-slate-400 mt-2">Aterrizajes, tiempo y precisión definen tu score.</p>
        </div>
        <div className="bg-slate-900/60 p-6 rounded-lg">
          <h3 className="font-semibold">Recompensas</h3>
          <p className="text-slate-400 mt-2">Canjea puntos por merch, liveries y cursos.</p>
        </div>
      </div>
    </section>
  );
}
