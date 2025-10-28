import { getRanking } from '@/lib/api';
import RankingTable from '@/components/RankingTable';
import { Trophy } from 'lucide-react';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function RankingPage() {
  const flights = await getRanking(20);

  return (
    <div className="space-y-8">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-2">
            <Trophy className="text-yellow-400 w-8 h-8" />
            Ranking Global
          </h1>
          <p className="text-gray-400">
            Los mejores aterrizajes y puntajes de la comunidad FlightQuest
          </p>
        </div>
      </header>

      <section>
        {flights.length > 0 ? (
          <RankingTable flights={flights} />
        ) : (
          <div className="bg-gray-800 rounded-lg p-8 text-center">
            <p className="text-gray-400">
              No hay vuelos registrados aún. ¡Sé el primero en aparecer en el ranking!
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
