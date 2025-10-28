"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

interface Challenge {
  id: string;
  origin: string;
  destination: string;
  difficulty: "easy" | "medium" | "hard";
  aircraft: string;
  distance_nm: number;
  estimated_duration_min: number;
  reward_points: number;
}

export default function DailyChallenges() {
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

    useEffect(() => {
        fetch("http://localhost:4000/api/challenges/today")
            .then((res) => res.json())
            .then((data) => setChallenges(data.data || [])) // ✅ usa data.data
            .catch(() => setChallenges([]));
    }, []);

  /* const fetchChallenges = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/challenges/today");
      const data = await res.json();
      setChallenges(data);
    } catch (error) {
      console.error("Error fetching challenges:", error);
    }
  }; */

  const handleSelect = async (challengeId: string) => {
    if (selectedId) {
      toast.error("Ya seleccionaste un vuelo hoy. Solo puedes elegir uno por día.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:4000/api/challenges/select", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ challengeId, userId: "TU_USER_ID_AQUI" }), // Reemplaza por el id del usuario logueado
      });

      if (res.ok) {
        setSelectedId(challengeId);
        toast.success("Vuelo seleccionado correctamente ✈️");
      } else {
        toast.error("Error seleccionando el vuelo");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error al conectar con el servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {challenges.length === 0 && <p>No hay vuelos disponibles hoy</p>}

      {challenges.map((ch) => (
        <Card
          key={ch.id}
          className={`transition-all ${
            selectedId === ch.id
              ? "border-green-500 shadow-lg"
              : "hover:border-blue-400"
          }`}
        >
          <CardHeader>
            <CardTitle>
              {ch.origin} → {ch.destination}
            </CardTitle>
            <p className="text-sm text-muted-foreground capitalize">
              Dificultad: {ch.difficulty}
            </p>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-1 mb-4">
              <li>Avión: {ch.aircraft}</li>
              <li>Distancia: {ch.distance_nm} NM</li>
              <li>Duración estimada: {ch.estimated_duration_min} min</li>
              <li>Puntos: {ch.reward_points}</li>
            </ul>
            <Button
              disabled={!!selectedId || loading}
              onClick={() => handleSelect(ch.id)}
              className="w-full"
            >
              {selectedId === ch.id ? "Seleccionado ✅" : "Elegir este vuelo"}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
