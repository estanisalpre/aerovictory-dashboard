'use client';

import { Plane, Trophy, Clock, TrendingUp } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon?: 'plane' | 'trophy' | 'clock' | 'trending';
  subtitle?: string;
  color?: 'blue' | 'green' | 'yellow' | 'red' | 'purple';
}

export default function StatsCard({
  title,
  value,
  icon = 'plane',
  subtitle,
  color = 'blue'
}: StatsCardProps) {
  const colorClasses = {
    blue: 'from-blue-900 to-blue-800 border-blue-700',
    green: 'from-green-900 to-green-800 border-green-700',
    yellow: 'from-yellow-900 to-yellow-800 border-yellow-700',
    red: 'from-red-900 to-red-800 border-red-700',
    purple: 'from-purple-900 to-purple-800 border-purple-700',
  };

  const iconColorClasses = {
    blue: 'text-blue-400',
    green: 'text-green-400',
    yellow: 'text-yellow-400',
    red: 'text-red-400',
    purple: 'text-purple-400',
  };

  const icons = {
    plane: Plane,
    trophy: Trophy,
    clock: Clock,
    trending: TrendingUp,
  };

  const Icon = icons[icon];

  return (
    <div className={`bg-gradient-to-br ${colorClasses[color]} rounded-lg p-6 border`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-300 mb-1">{title}</p>
          <p className="text-3xl font-bold text-white mb-1">{value}</p>
          {subtitle && <p className="text-xs text-gray-400">{subtitle}</p>}
        </div>
        <div className={`p-3 rounded-lg bg-black bg-opacity-20 ${iconColorClasses[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
