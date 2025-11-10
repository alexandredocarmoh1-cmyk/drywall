'use client';

import { useRef } from 'react';
import screenfull from 'screenfull';
import { Button } from './ui/button';
import { Expand } from 'lucide-react';

interface VideoPlayerProps {
  videoId: string;
  title: string;
}

export default function VideoPlayer({ videoId, title }: VideoPlayerProps) {
  const playerContainerRef = useRef<HTMLDivElement>(null);

  const handleFullscreen = () => {
    if (playerContainerRef.current && screenfull.isEnabled) {
      screenfull.request(playerContainerRef.current);
    }
  };

  return (
    <div ref={playerContainerRef} className="relative aspect-video w-full overflow-hidden bg-black">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&controls=0&rel=0&modestbranding=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className="absolute -top-[60px] left-0 w-full h-[calc(100%+120px)] border-0"
        title={title}
      ></iframe>
       <Button
        onClick={handleFullscreen}
        variant="ghost"
        size="icon"
        className="absolute bottom-2 right-2 text-white bg-black/50 hover:bg-black/75 hover:text-white"
        aria-label="Tela cheia"
      >
        <Expand className="h-5 w-5" />
      </Button>
    </div>
  );
}
