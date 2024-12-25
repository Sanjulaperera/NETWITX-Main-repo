"use client";
import React, { useEffect } from 'react'
import { toast } from 'sonner';

interface IframeEmbedProps {
  src: string
  title: string
  className?: string
}

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

const IframeEmbed: React.FC<IframeEmbedProps> = ({
  src,
  title,
  className = '',
}) => {
  useEffect(() => {
    const loadTallyScript = () => {
      return new Promise<void>((resolve, reject) => {
        const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
        if (existingScript) {
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.src = 'https://tally.so/widgets/embed.js';
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load Tally script'));
        document.head.appendChild(script);
      });
    };

    const initTally = () => {
      if (window.Tally && window.Tally.loadEmbeds) {
        window.Tally.loadEmbeds();
      } else {
        toast.error('Tally.loadEmbeds is not available');
      }
    };

    const handleScriptLoad = async () => {
      try {
        await loadTallyScript();
        initTally();
      } catch (error) {
        toast.error(`Error loading Tally script: ${(error as Error).message}`);
      }
    };

    handleScriptLoad();
  }, []);

  return (
    <div className={`iframe-container ${className}`}>
      <iframe
        data-tally-src={src}
        loading="lazy"
        width="100%"
        height="499"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title={title}
      ></iframe>
    </div>
  )
}

export default IframeEmbed

