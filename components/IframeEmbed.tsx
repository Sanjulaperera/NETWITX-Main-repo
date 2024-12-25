"use client";
import React, { useEffect, useRef } from 'react'
import { Toaster, toast } from "sonner";

interface IframeEmbedProps {
  src: string
  title: string
  height?: string;
  width?: string;
  className?: string
}

declare global {
  interface Window {
    jotformEmbedHandler?: (selector: string, formUrl: string) => void;
  }
}

const IframeEmbed: React.FC<IframeEmbedProps> = ({
  src,
  title,
  className = '',
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const loadScript = () => {
      return new Promise<void>((resolve, reject) => {
        const existingScript = document.querySelector('script[src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"]');
        if (existingScript) {
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load JotForm script'));
        document.body.appendChild(script);
      });
    };

    const initJotForm = () => {
      if (window.jotformEmbedHandler && iframeRef.current) {
        try {
          window.jotformEmbedHandler(`iframe[id='${iframeRef.current.id}']`, "https://form.jotform.com/");
        } catch (error) {
          toast.error(`Error initializing JotForm: ${(error as Error).message}`);
        }
      }
    };

    const handleScriptLoad = async () => {
      try {
        await loadScript();
        initJotForm();
      } catch (error: unknown) {
        toast.error(`Error loading JotForm script: ${error}`);
      }
    };

    handleScriptLoad();

    // No cleanup function needed
  }, []);

  const handleIframeLoad = () => {
    // We're no longer attempting to scroll the parent window
    toast.success('Form loaded successfully');
  };

  return (
    <div className={`iframe-container ${className}`}>
       <Toaster richColors position="bottom-right" />
      <iframe
        ref={iframeRef}
        id="JotFormIFrame-243405038023041"
        title={title}
        onLoad={handleIframeLoad}
        allow="geolocation; microphone; camera; fullscreen; transparency"
        src={src}
        frameBorder="0"
        style={{
          minWidth: '100%',
          maxWidth: '100%',
          height: '539px',
          border: 'none'
        }}
        scrolling="no"
      />
    </div>
  )
}

export default IframeEmbed

