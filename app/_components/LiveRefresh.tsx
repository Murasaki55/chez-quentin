"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function LiveRefresh({ lastId }: { lastId: number }) {
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const previousId = useRef(lastId);
  const [soundOn, setSoundOn] = useState(false);

  // Rafraîchit la page toutes les 3 secondes
  useEffect(() => {
    const interval = setInterval(() => router.refresh(), 3000);
    return () => clearInterval(interval);
  }, [router]);

  // Joue le son si une commande plus récente est arrivée
  useEffect(() => {
    if (lastId > previousId.current) {
      audioRef.current?.play().catch(() => {});
    }
    previousId.current = lastId;
  }, [lastId]);

  // Le clic débloque l'audio sur mobile et garde l'écran allumé
  function activerSon() {
    const audio = new Audio("/notif.mp3");
    audioRef.current = audio;
    audio.play().then(() => setSoundOn(true)).catch(() => {});
    navigator.wakeLock?.request("screen").catch(() => {});
  }

  if (soundOn) return null;
  return <button onClick={activerSon}>🔔 Activer le son</button>;
}