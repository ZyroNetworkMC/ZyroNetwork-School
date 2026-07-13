import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import type {Props} from '@theme/NotFound/Content';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

export default function NotFoundContent({className}: Props): JSX.Element {
  return (
    <main className={clsx('container margin-vert--xl', className)} style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{
        position: 'absolute',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(0,0,0,0) 70%)',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        padding: '4rem 2rem',
        borderRadius: '24px',
        maxWidth: '600px',
        width: '100%',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
      }}>
        <Heading as="h1" style={{
          fontSize: 'clamp(4rem, 10vw, 8rem)',
          fontWeight: 900,
          background: 'linear-gradient(135deg, #ef4444 0%, #f97316 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: 1,
          margin: 0
        }}>
          404
        </Heading>
        
        <h2 style={{
          fontSize: '2rem',
          color: 'var(--landing-text-highlight)',
          marginTop: '1rem',
          marginBottom: '1rem'
        }}>
          Lost in the Matrix
        </h2>
        
        <p style={{
          fontSize: '1.2rem',
          color: 'var(--landing-text)',
          marginBottom: '2.5rem'
        }}>
          The page you're looking for doesn't exist, was moved, or you just took a wrong turn at Albuquerque.
        </p>

        <Link
          className="button button--primary button--lg"
          to="/"
          style={{
            background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
            border: 'none',
            padding: '12px 36px',
            fontWeight: 600,
            borderRadius: '8px',
            color: '#fff',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 24px rgba(124, 58, 237, 0.4)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Return to Safety
        </Link>
      </div>
    </main>
  );
}
