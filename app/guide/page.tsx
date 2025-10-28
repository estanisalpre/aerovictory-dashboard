export default function GuidePage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 space-y-8">
      <h1 className="text-4xl font-bold text-center mb-8">🧭 Guía de vuelo FlightQuest</h1>

      <div className="space-y-6 text-gray-700">
        <p>
          FlightQuest es un desafío diario para pilotos virtuales de <strong>Microsoft Flight Simulator</strong>.
          Completa los vuelos asignados y gana puntos según tu precisión y desempeño.
        </p>

        <ol className="list-decimal list-inside space-y-3">
          <li>Descarga y ejecuta el agente de FlightQuest en tu PC.</li>
          <li>Inicia sesión con tu cuenta en el panel.</li>
          <li>Abre Microsoft Flight Simulator.</li>
          <li>Selecciona uno de los <strong>tres vuelos diarios</strong>.</li>
          <li>Vuela correctamente y deja que el agente envíe tus datos automáticamente.</li>
        </ol>

        <p>
          💡 Cada vuelo te da puntos según la suavidad del aterrizaje, desviación de ruta y velocidad final.  
          Los mejores pilotos aparecen en el <strong>ranking global</strong> del día.
        </p>

        <p className="font-semibold">¡Demuestra tus habilidades y conviértete en el mejor piloto virtual del día! 🛫</p>
      </div>
    </section>
  );
}
