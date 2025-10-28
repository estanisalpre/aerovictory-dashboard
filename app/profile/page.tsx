import { getUserFlights, getUserStats } from '@/lib/api';
import StatsCard from '@/components/StatsCard';
import ScoreCard from '@/components/ScoreCard';
import { User } from 'lucide-react';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ProfilePage() {
  const userId = 'user-test-001';
  const [flights, stats] = await Promise.all([
    getUserFlights(userId, 10),
    getUserStats(userId),
  ]);

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <div className="bg-blue-900 rounded-full p-4">
          <User className="w-8 h-8 text-blue-300" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Tu Perfil</h1>
          <p className="text-gray-400">Resumen de tus vuelos y rendimiento</p>
        </div>
      </div>

      {stats && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">Resumen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatsCard
              title="Total Vuelos"
              value={stats.totalFlights}
              icon="plane"
              color="blue"
            />
            <StatsCard
              title="Promedio Puntos"
              value={stats.avgScore}
              icon="trophy"
              subtitle="por vuelo"
              color="yellow"
            />
            <StatsCard
              title="Tiempo Total"
              value={`${Math.round(stats.totalDuration / 60)}h`}
              icon="clock"
              subtitle={`${stats.totalDuration} min`}
              color="green"
            />
            <StatsCard
              title="Crashes"
              value={stats.crashes}
              icon="trending" // 👈 o "trending", si no agregaste user en StatsCard
              subtitle="en total"
              color="red"
            />
          </div>
        </section>
      )}

      <section>
        <h2 className="text-2xl font-semibold mb-4">Tus Últimos Vuelos</h2>
        {flights.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {flights.map((flight) => (
              <ScoreCard key={flight.flight_id} flight={flight} />
            ))}
          </div>
        ) : (
          <div className="bg-gray-800 rounded-lg p-8 text-center text-gray-400">
            Aún no tienes vuelos registrados. ¡Vuela y deja huella en el cielo! ☁️
          </div>
        )}
      </section>
    </div>
  );
}
