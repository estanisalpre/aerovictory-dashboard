'use client';

import { ActiveFlight } from '@/lib/types';
import { Plane, Clock, Gauge, MapPin } from 'lucide-react';

interface FlightStatusProps {
  flight: ActiveFlight | null;
}

export default function FlightStatus({ flight }: FlightStatusProps) {
  if (!flight) {
    return (
      <div className="bg-gray-800 rounded-lg p-8 text-center">
        <Plane className="w-16 h-16 mx-auto text-gray-600 mb-4" />
        <h3 className="text-xl font-semibold text-gray-400 mb-2">
          No hay vuelo activo
        </h3>
        <p className="text-gray-500">
          Inicia MSFS y el agente FlightQuest para comenzar
        </p>
      </div>
    );
  }

  const { aircraft, durationMinutes, currentData } = flight;
  const isFlying = !currentData.onGround;

  return (
    <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-6 shadow-xl border border-blue-700">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Vuelo en Progreso</h2>
          <p className="text-blue-300">{aircraft}</p>
        </div>
        <div className={`px-4 py-2 rounded-full ${isFlying ? 'bg-green-500' : 'bg-yellow-500'}`}>
          <span className="text-white font-semibold">
            {isFlying ? '✈️ En vuelo' : '🛬 En tierra'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-blue-950 bg-opacity-50 rounded-lg p-4">
          <div className="flex items-center gap-2 text-blue-300 mb-2">
            <Clock className="w-4 h-4" />
            <span className="text-sm">Duración</span>
          </div>
          <p className="text-2xl font-bold text-white">
            {durationMinutes} min
          </p>
        </div>

        <div className="bg-blue-950 bg-opacity-50 rounded-lg p-4">
          <div className="flex items-center gap-2 text-blue-300 mb-2">
            <Gauge className="w-4 h-4" />
            <span className="text-sm">Velocidad</span>
          </div>
          <p className="text-2xl font-bold text-white">
            {Math.round(currentData.groundSpeed)} kt
          </p>
        </div>

        <div className="bg-blue-950 bg-opacity-50 rounded-lg p-4">
          <div className="flex items-center gap-2 text-blue-300 mb-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Altitud</span>
          </div>
          <p className="text-2xl font-bold text-white">
            {Math.round(currentData.altitude)} ft
          </p>
        </div>

        <div className="bg-blue-950 bg-opacity-50 rounded-lg p-4">
          <div className="flex items-center gap-2 text-blue-300 mb-2">
            <Plane className="w-4 h-4" />
            <span className="text-sm">Vertical</span>
          </div>
          <p className="text-2xl font-bold text-white">
            {Math.round(currentData.verticalSpeed)} fpm
          </p>
        </div>
      </div>

      <div className="mt-4 bg-blue-950 bg-opacity-30 rounded-lg p-3">
        <p className="text-sm text-blue-300">
          <span className="font-semibold">Posición:</span>{' '}
          {currentData.latitude.toFixed(4)}°, {currentData.longitude.toFixed(4)}°
        </p>
      </div>
    </div>
  );
}