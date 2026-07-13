import React, { createContext, useContext, useState, ReactNode, useEffect, useRef } from 'react';
import { useHistory, useLocation } from '@docusaurus/router';

type TransitionType = 'none' | 'dropdown' | 'blast' | 'slide-left' | 'slide-right' | 'shatter';

interface TransitionContextType {
  playTransition: (type: TransitionType, to: string, event?: React.MouseEvent | MouseEvent) => void;
}

const TransitionContext = createContext<TransitionContextType>({
  playTransition: () => {},
});

export const useTransition = () => useContext(TransitionContext);

export default function Root({ children }: { children: ReactNode }) {
  const history = useHistory();
  const location = useLocation();
  const [activeTransition, setActiveTransition] = useState<TransitionType>('none');
  const [isCovering, setIsCovering] = useState(false);
  
  // Blast coordinates
  const [clickCoords, setClickCoords] = useState({ x: 0, y: 0 });

  const playTransition = (type: TransitionType, to: string, event?: React.MouseEvent | MouseEvent) => {
    if (isCovering) return;
    
    if (event) {
      setClickCoords({ x: event.clientX, y: event.clientY });
    } else {
      setClickCoords({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    }

    setActiveTransition(type);
    
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsCovering(true);
        
        setTimeout(() => {
          history.push(to);
          window.scrollTo(0, 0);

          setTimeout(() => {
            setIsCovering(false);
            setTimeout(() => setActiveTransition('none'), 800); 
          }, 300);
        }, 600);
      });
    });
  };

  // Global Interceptor for '/blog' links
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Find closest anchor tag
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;
      
      const href = target.getAttribute('href');
      // If clicking blog link from outside the blog page
      if (href === '/blog' && location.pathname !== '/blog') {
        e.preventDefault();
        e.stopPropagation();
        playTransition('shatter', '/blog', e);
      }
    };
    
    document.addEventListener('click', handleClick, { capture: true });
    return () => document.removeEventListener('click', handleClick, { capture: true });
  }, [isCovering, location.pathname]);

  return (
    <TransitionContext.Provider value={{ playTransition }}>
      {children}
      <TransitionOverlay type={activeTransition} isCovering={isCovering} clickCoords={clickCoords} />
    </TransitionContext.Provider>
  );
}

function TransitionOverlay({ type, isCovering, clickCoords }: { type: TransitionType, isCovering: boolean, clickCoords: {x: number, y: number} }) {
  if (type === 'none') return null;

  let initialTransform = '';
  let exitTransform = '';
  
  if (type === 'dropdown') {
    initialTransform = 'translateY(-100%)';
    exitTransform = 'translateY(100%)'; 
  } else if (type === 'slide-left') {
    initialTransform = 'translateX(100%)'; 
    exitTransform = 'translateX(-100%)'; 
  } else if (type === 'slide-right') {
    initialTransform = 'translateX(-100%)'; 
    exitTransform = 'translateX(100%)'; 
  }

  const hasCovered = React.useRef(false);
  if (isCovering) hasCovered.current = true;

  const getTransform = () => {
    if (type === 'blast') {
       return isCovering ? 'translate(-50%, -50%) scale(250)' : 'translate(-50%, -50%) scale(0)';
    }
    if (isCovering) {
      if (type === 'dropdown') return 'translateY(0%)';
      if (type === 'slide-left' || type === 'slide-right') return 'translateX(0%)';
    }
    if (!hasCovered.current) {
      return initialTransform;
    }
    return exitTransform;
  };

  // Generate deterministic glass shards for shatter animation
  const shards = React.useMemo(() => {
    if (type !== 'shatter') return [];
    return Array.from({ length: 24 }).map((_, i) => {
      // Create random polygons spreading outward
      const angle = (i / 24) * Math.PI * 2;
      const distance = 200 + Math.random() * 300;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;
      const rot = (Math.random() - 0.5) * 360;
      return { tx, ty, rot, id: i };
    });
  }, [type]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 999999,
      pointerEvents: 'none',
      overflow: 'hidden'
    }}>
      {/* 1. Dropdown Slide Animation */}
      {type === 'dropdown' && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(180deg, #0d0e12 0%, #1a1025 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
          transform: getTransform(),
          borderBottom: '2px solid rgba(168, 85, 247, 0.5)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
        }}>
          <div style={{
            opacity: isCovering ? 1 : 0,
            transition: 'opacity 0.3s ease 0.3s',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem'
          }}>
            <img src="/img/zyro_logo.png" alt="ZyroNetwork" style={{ width: '140px', height: '140px', filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.4))' }} />
            <h1 style={{ color: 'white', margin: 0, fontSize: '3.5rem', fontWeight: '900', letterSpacing: '-1px' }}>ZyroNetwork School</h1>
          </div>
        </div>
      )}

      {/* 2. Blast Animation */}
      {type === 'blast' && (
        <div style={{
          position: 'absolute',
          top: clickCoords.y,
          left: clickCoords.x,
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #c084fc 0%, #7c3aed 100%)',
          boxShadow: '0 0 30px 10px rgba(124, 58, 237, 0.8)',
          transform: getTransform(),
          transition: 'transform 0.6s cubic-bezier(0.5, 0, 0.1, 1)',
        }} />
      )}

      {/* 3. Slide Left/Right Animation */}
      {(type === 'slide-left' || type === 'slide-right') && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(13, 14, 18, 0.95)',
          backdropFilter: 'blur(20px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.6s cubic-bezier(0.76, 0, 0.24, 1)',
          transform: getTransform(),
        }}>
          <div style={{
            opacity: isCovering ? 1 : 0,
            transition: 'opacity 0.2s ease 0.2s',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem'
          }}>
            <img src="/img/zyro_logo.png" alt="ZyroNetwork" style={{ width: '120px', height: '120px', filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.4))' }} />
            <h2 style={{ color: 'white', margin: 0, fontSize: '2.5rem', fontWeight: '800' }}>Loading Next Course...</h2>
          </div>
        </div>
      )}

      {/* 4. Shatter Animation */}
      {type === 'shatter' && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          perspective: '1000px'
        }}>
          {/* Base Glass Layer (entry phase) */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0, width: '100%', height: '100%',
            backdropFilter: 'blur(20px)',
            background: 'rgba(255, 255, 255, 0.1)',
            opacity: isCovering ? 1 : 0,
            transition: 'opacity 0.4s ease',
            display: hasCovered.current && !isCovering ? 'none' : 'block' // Hide when shattering
          }} />

          {/* Shattered Shards (exit phase) */}
          {hasCovered.current && !isCovering && shards.map(shard => (
            <div key={shard.id} style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '150px',
              height: '150px',
              marginLeft: '-75px',
              marginTop: '-75px',
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', // Triangle shard
              boxShadow: 'inset 0 0 20px rgba(255,255,255,0.5)',
              transform: `translate(${shard.tx}px, ${shard.ty}px) rotate(${shard.rot}deg) scale(0)`,
              opacity: 0,
              // Start at center, blast out!
              animation: `shatterAnim 0.6s cubic-bezier(0.2, 1, 0.3, 1) forwards`
            }} />
          ))}
          
          <style>{`
            @keyframes shatterAnim {
              0% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 1; }
              100% { transform: inherit; opacity: 0; }
            }
          `}</style>
        </div>
      )}
    </div>
  );
}
