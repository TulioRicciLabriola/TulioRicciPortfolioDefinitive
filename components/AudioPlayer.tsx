
import React, { useState, useRef, useEffect, useCallback, useId } from 'react';

interface AudioPlayerProps {
  url: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ url }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const playerId = useId();

  const togglePlay = useCallback(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Stop all other media sources, identifying this player as the source
        window.dispatchEvent(new CustomEvent('app:stop-media', {
          detail: { source: playerId }
        }));
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying, playerId]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentProgress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  useEffect(() => {
    const stopMediaHandler = (e: any) => {
      // If the stop event came from another source, pause this player
      if (e.detail?.source !== playerId && audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    };

    window.addEventListener('app:stop-media', stopMediaHandler as EventListener);
    return () => window.removeEventListener('app:stop-media', stopMediaHandler as EventListener);
  }, [playerId]);

  return (
    <div className="flex items-center gap-4 w-full bg-white/5 p-3 rounded-sm border border-white/10 group hover:border-white/30 transition-all">
      <audio 
        ref={audioRef} 
        src={url} 
        preload="metadata"
        onTimeUpdate={handleTimeUpdate} 
        onEnded={handleEnded}
        onPause={() => setIsPlaying(false)}
        onPlay={() => {
           window.dispatchEvent(new CustomEvent('app:stop-media', {
            detail: { source: playerId }
          }));
          setIsPlaying(true);
        }}
      />
      <button 
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause audio" : "Play audio"}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:scale-105 transition-transform"
      >
        {isPlaying ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        )}
      </button>
      
      <div className="flex-1 h-1 bg-white/20 relative rounded-full overflow-hidden">
        <div 
          className="absolute top-0 left-0 h-full bg-white transition-all duration-100" 
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
