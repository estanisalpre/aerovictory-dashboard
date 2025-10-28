'use client';

import { CompletedFlight } from '@/lib/types';
import { Trophy, Clock, Plane, TrendingDown } from 'lucide-react';
import { format } from 'date-fns';

interface ScoreCardProps {
  flight: CompletedFlight;
}

export default function ScoreCard({ flight }: ScoreCardProps) {
  const getScoreColor = (score: number) => {
    if (score >= 100) return 'text-yellow-400';
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-blue-400';
    return 'text-gray-400';
  };

  const getLandingQuality = (vs: number) => {
    const absVs = Math.abs(vs);
    if (absVs < 100) return { text: 'Perfecto', color: 'text-green-400' };
    if (absVs < 300) return { text: 'Suave', color: 'text-blue-400' };
    if (absVs < 500) return { text: 'Aceptable', color: 'text-yellow-400' };
    return { text: 'Duro', color: 'text-red-400' };
  };

  const landingQuality = getLandingQuality(flight.landing_vertical_speed);

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-white mb-1">
            {flight.aircraft}
          </h3>
          <p className="text-sm text-gray-400">
            {format(new Date(flight.created_at), 'dd MMM yyyy HH:mm')}
          </p>
        </div>
        <div className="text-right">
          <div className={`text-3xl font-bold ${getScoreColor(flight.score)}`}>
            {flight.score}
          </div>
          <p className="text-xs text-gray-500">puntos</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-gray-900 rounded p-3">
          <div className="flex items-center gap-1 text-gray-400 mb-1">
            <Clock className="w-3 h-3" />
            <span className="text-xs">Duración</span>
          </div>
          <p className="text-sm font-semibold text-white">
            {flight.duration_minutes} min
          </p>
        </div>

        <div className="bg-gray-900 rounded p-3">
          <div className="flex items-center gap-1 text-gray-400 mb-1">
            <TrendingDown className="w-3 h-3" />
            <span className="text-xs">Aterrizaje</span>
          </div>
          <p className={`text-sm font-semibold ${landingQuality.color}`}>
            {landingQuality.text}
          </p>
        </div>

        <div className="bg-gray-900 rounded p-3">
          <div className="flex items-center gap-1 text-gray-400 mb-1">
            <Plane className="w-3 h-3" />
            <span className="text-xs">Estado</span>
          </div>
          <p className={`text-sm font-semibold ${flight.crashed ? 'text-red-400' : 'text-green-400'}`}>
            {flight.crashed ? 'Crash' : 'Completo'}
          </p>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-gray-700">
        <p className="text-xs text-gray-500">
          {Math.abs(flight.landing_vertical_speed).toFixed(0)} fpm • 
          {' '}{Math.round(flight.final_altitude)} ft
        </p>
      </div>
    </div>
  );
}