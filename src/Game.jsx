import React, { useEffect, useRef } from "react";

export default function FlashPlayer({ swfUrl }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!window.RufflePlayer) return;

    const ruffle = window.RufflePlayer.newest()
      ? window.RufflePlayer.newest()
      : window.RufflePlayer.createPlayer();

    ruffle.style.width = "640px";
    ruffle.style.height = "480px";

    ruffle.load(swfUrl);

    containerRef.current.innerHTML = "";
    containerRef.current.appendChild(ruffle);
  }, [swfUrl]);

  return <div ref={containerRef}></div>;
}
