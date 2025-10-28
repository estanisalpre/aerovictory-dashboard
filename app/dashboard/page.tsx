import { getActiveFlight, getUserFlights, getUserStats } from '@/lib/api';
import FlightStatus from '@/components/FlightStatus';
import ScoreCard from '@/components/ScoreCard';
import StatsCard from '@/components/StatsCard';
import { Plane, Trophy, Clock, TrendingUp } from 'lucide-react';
import DailyChallenges from "@/components/DailyChallenges";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Home() {
  const [activeFlight, recentFlights, stats] = await Promise.all([
    getActiveFlight(),
    getUserFlights('user-test-001', 5),
    getUserStats('user-test-001'),
  ]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-400">
          Monitorea tu vuelo actual y revisa tu historial
        </p>
      </div>

      {/* Vuelo Activo */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Vuelo Actual</h2>
        <FlightStatus flight={activeFlight} />
      </section>

      <section>
        <h1 className="text-2xl font-bold mb-4">Vuelos del día ✈️</h1>
        <DailyChallenges />
      </section>

      {/* Estadísticas */}
      {stats && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">Tus Estadísticas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatsCard
              title="Total Vuelos"
              value={stats.totalFlights}
              icon="plane"
              color="blue"
            />
            <StatsCard
              title="Puntuación Total"
              value={stats.totalScore}
              icon="trophy"
              subtitle={`Promedio: ${stats.avgScore} pts`}
              color="yellow"
            />
            <StatsCard
              title="Tiempo Total"
              value={`${Math.round(stats.totalDuration / 60)}h`}
              icon="clock"
              subtitle={`${stats.totalDuration} minutos`}
              color="green"
            />
            <StatsCard
              title="Tasa de Éxito"
              value={`${stats.successRate}%`}
              icon="trending"
              subtitle={`${stats.crashes} crashes`}
              color="purple"
            />
          </div>
        </section>
      )}

      {/* Vuelos Recientes */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Vuelos Recientes</h2>
        {recentFlights.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentFlights.map((flight) => (
              <ScoreCard key={flight.flight_id} flight={flight} />
            ))}
          </div>
        ) : (
          <div className="bg-gray-800 rounded-lg p-8 text-center text-gray-400">
            Aún no tienes vuelos registrados. ¡Despega y registra tu primer vuelo! 🛫
          </div>
        )}
      </section>
    </div>
  );
}
