export interface FlightData {
  aircraft: string;
  latitude: number;
  longitude: number;
  altitude: number;
  groundSpeed: number;
  verticalSpeed: number;
  onGround: boolean;
  crashed: boolean;
}

export interface ActiveFlight {
  flightId: string;
  aircraft: string;
  startTime: string;
  durationMinutes: number;
  currentData: FlightData;
}

export interface CompletedFlight {
  id: number;
  flight_id: string;
  user_id: string;
  aircraft: string;
  start_time: string;
  end_time: string;
  duration_minutes: number;
  start_latitude: number;
  start_longitude: number;
  final_latitude: number;
  final_longitude: number;
  final_altitude: number;
  landing_vertical_speed: number;
  crashed: boolean;
  score: number;
  created_at: string;
}

export interface UserStats {
  totalFlights: number;
  totalScore: number;
  avgScore: number;
  totalDuration: number;
  crashes: number;
  successRate: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}