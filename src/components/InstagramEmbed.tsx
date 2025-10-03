import React, { useEffect, useRef, createElement } from 'react';
interface InstagramEmbedProps {
  url: string;
  caption?: string;
  maxWidth?: number;
  hideCaption?: boolean;
  containerClassName?: string;
}
export function InstagramEmbed({
  url,
  caption,
  maxWidth = 540,
  hideCaption = false,
  containerClassName = ''
}: InstagramEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // If the Instagram embed script is already loaded
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      // Load Instagram embed script
      const script = document.createElement('script');
      script.async = true;
      script.src = '//www.instagram.com/embed.js';
      document.body.appendChild(script);
    }
  }, [url]);
  return <div ref={containerRef} className={`instagram-embed-container ${containerClassName}`} style={{
    maxWidth: `${maxWidth}px`,
    margin: '0 auto'
  }}>
      <blockquote className="instagram-media" data-instgrm-captioned={!hideCaption} data-instgrm-permalink={url} data-instgrm-version="14" style={{
      background: '#FFF',
      border: 0,
      borderRadius: '3px',
      boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
      margin: '1px',
      maxWidth: '540px',
      minWidth: '326px',
      padding: 0,
      width: '99.375%'
    }}>
        <div style={{
        padding: '16px'
      }}>
          <a href={url} style={{
          background: '#FFFFFF',
          lineHeight: 0,
          padding: '0 0',
          textAlign: 'center',
          textDecoration: 'none',
          width: '100%'
        }} target="_blank" rel="noopener noreferrer">
            <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}>
              <div style={{
              backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png')`,
              backgroundSize: 'cover',
              borderRadius: '50%',
              flexGrow: 0,
              height: '40px',
              marginRight: '14px',
              width: '40px'
            }}></div>
              <div style={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              justifyContent: 'center'
            }}>
                <div style={{
                fontWeight: 'bold'
              }}>
                  @damatabarbershop
                </div>
                <div style={{
                color: '#999'
              }}>
                  View on Instagram
                </div>
              </div>
            </div>
            {caption && !hideCaption && <p style={{
            margin: '8px 0',
            padding: '0 4px',
            color: '#333'
          }}>
                {caption}
              </p>}
          </a>
        </div>
      </blockquote>
    </div>;
}
// Add the window.instgrm type
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}