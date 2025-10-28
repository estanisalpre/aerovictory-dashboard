'use client';

import { CompletedFlight } from '@/lib/types';
import { Trophy, Medal } from 'lucide-react';
import { format } from 'date-fns';

interface RankingTableProps {
  flights: CompletedFlight[];
}

export default function RankingTable({ flights }: RankingTableProps) {
  const getMedalIcon = (position: number) => {
    if (position === 0) return <Trophy className="w-5 h-5 text-yellow-400" />;
    if (position === 1) return <Medal className="w-5 h-5 text-gray-400" />;
    if (position === 2) return <Medal className="w-5 h-5 text-orange-600" />;
    return <span className="text-gray-500 font-semibold">#{position + 1}</span>;
  };

  if (flights.length === 0) {
    return (
      <div className="bg-gray-800 rounded-lg p-8 text-center">
        <p className="text-gray-400">No hay vuelos registrados aún</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-900 border-b border-gray-700">
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Pos
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Usuario
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Avión
              </th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Puntos
              </th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Duración
              </th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Fecha
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {flights.map((flight, index) => (
              <tr
                key={flight.flight_id}
                className="hover:bg-gray-750 transition-colors"
              >
                <td className="px-4 py-4">
                  <div className="flex items-center justify-center w-8">
                    {getMedalIcon(index)}
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span className="text-sm text-white font-medium">
                    {flight.user_id}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className="text-sm text-gray-300">
                    {flight.aircraft}
                  </span>
                </td>
                <td className="px-4 py-4 text-right">
                  <span className={`text-lg font-bold ${
                    flight.score >= 100 ? 'text-yellow-400' :
                    flight.score >= 80 ? 'text-green-400' :
                    flight.score >= 60 ? 'text-blue-400' :
                    'text-gray-400'
                  }`}>
                    {flight.score}
                  </span>
                </td>
                <td className="px-4 py-4 text-right">
                  <span className="text-sm text-gray-300">
                    {flight.duration_minutes} min
                  </span>
                </td>
                <td className="px-4 py-4 text-right">
                  <span className="text-xs text-gray-500">
                    {format(new Date(flight.created_at), 'dd/MM/yyyy')}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}