"use client"
import { useState, useEffect } from 'react';

export function TitleTimerClient({ initialTitle }: { initialTitle: string }) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // INICIAR EL CONTADOR
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // LIMPIEZA
    // Detiene el contador cuando el usuario navega fuera de la página.
    return () => clearInterval(intervalId);
  }, []); // Se ejecuta solo al montar/desmontar.

  useEffect(() => {
    // ACTUALIZAR EL TÍTULO DE LA PESTAÑA
    document.title = `Tiempo: ${seconds}s | ${initialTitle}`;
  }, [seconds, initialTitle]);

  return null; // No renderiza UI visible
}