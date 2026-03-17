"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const VIDEO_ID = "J2AkWCbxmAw";

declare global {
  interface Window {
    YT?: {
      Player: new (
        element: HTMLElement,
        config: {
          videoId: string;
          playerVars?: Record<string, number>;
          events?: {
            onReady?: () => void;
            onStateChange?: (event: { data: number }) => void;
          };
        },
      ) => {
        destroy: () => void;
      };
      PlayerState: {
        ENDED: number;
      };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

const LisoPerfeitoVideo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const playerHostRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<{ destroy: () => void } | null>(null);

  useEffect(() => {
    if (!isOpen) {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
      return;
    }

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const createPlayer = () => {
      if (!window.YT?.Player || !playerHostRef.current || playerRef.current) {
        return;
      }

      playerRef.current = new window.YT.Player(playerHostRef.current, {
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: 1,
          rel: 0,
          playsinline: 1,
        },
        events: {
          onStateChange: (event) => {
            if (event.data === window.YT?.PlayerState.ENDED) {
              setIsOpen(false);
            }
          },
        },
      });
    };

    if (window.YT?.Player) {
      createPlayer();
    } else {
      const scriptSelector = 'script[src="https://www.youtube.com/iframe_api"]';
      const scriptExists = document.querySelector(scriptSelector);

      if (!scriptExists) {
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(script);
      }

      const previousReady = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        previousReady?.();
        createPlayer();
      };
    }

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);

  return (
    <>
      <div className="relative w-full max-w-full">
        <div className="relative aspect-3/2 w-full overflow-hidden rounded-xl">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="group absolute inset-0 z-10 cursor-pointer"
            aria-label="Reproduzir vídeo"
          >
            <Image
              src={`https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`}
              alt="Vídeo apresentação"
              fill
              className="h-full w-full object-cover"
              sizes="(min-width: 1024px) 35vw, 100vw"
            />
            <div className="absolute inset-0 bg-black/30 transition group-hover:bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="rounded-full bg-white/90 h-10 w-10 flex items-center justify-center shadow-lg transition group-hover:scale-110 group-hover:bg-white">
                ▶
              </span>
            </div>
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"
            aria-label="Fechar vídeo"
          />

          <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-black shadow-2xl">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-3 top-3 z-20 rounded-full bg-black/70 px-3 py-1 text-sm text-white hover:bg-black/85"
              aria-label="Fechar"
            >
              Fechar
            </button>
            <div className="aspect-9/9 w-full">
              <div ref={playerHostRef} className="h-full w-full" />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default LisoPerfeitoVideo;
