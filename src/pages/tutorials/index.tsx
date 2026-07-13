import Translate, {translate} from '@docusaurus/Translate';

import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import TutorialSearchBar from '@site/src/pages/tutorials/_components/TutorialSearchBar';
import TutorialCards from './_components/TutorialCards';
import TutorialFilters from './_components/TutorialFilters';

const TITLE = translate({message: 'Courses & Tutorials'});
const DESCRIPTION = translate({
  message: 'Structured learning paths for programming, server administration, and game plugin development.',
});

function TutorialHeader() {
  return (
    <section style={{
      padding: '4rem 2rem 2rem',
      textAlign: 'center',
      background: 'var(--landing-hero-bg)',
      borderBottom: '1px solid var(--landing-border)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background glow effects */}
      <div style={{
        position: 'absolute',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(0,0,0,0) 70%)',
        top: '-250px',
        left: '-100px',
        zIndex: 0,
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(0,0,0,0) 70%)',
        bottom: '-200px',
        right: '-50px',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          background: 'rgba(168, 85, 247, 0.1)',
          border: '1px solid rgba(168, 85, 247, 0.2)',
          borderRadius: '50px',
          padding: '6px 16px',
          marginBottom: '1.5rem',
          color: '#a855f7',
          fontSize: '0.8rem',
          fontWeight: 600,
          gap: '8px',
        }}>
          <span style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#a855f7',
            boxShadow: '0 0 8px #a855f7',
            display: 'inline-block'
          }} />
          Browse All Courses
        </div>
        <Heading as="h1" style={{
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          fontWeight: 900,
          letterSpacing: '-1px',
          background: 'var(--landing-hero-title)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '1rem',
        }}>{TITLE}</Heading>
        <p style={{
          color: 'var(--landing-text)',
          fontSize: '1.1rem',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6',
        }}>{DESCRIPTION}</p>
      </div>
    </section>
  );
}

export default function Tutorial(): JSX.Element {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Ambient bottom glow */}
        <div style={{
          position: 'absolute',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(20,207,195,0.03) 0%, rgba(0,0,0,0) 70%)',
          top: '30%',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 0,
          pointerEvents: 'none'
        }} />
        
        <TutorialHeader />
        <div className="container" style={{ paddingTop: '2rem', position: 'relative', zIndex: 1 }}>
          <TutorialFilters />
          <div
            style={{display: 'flex', marginLeft: 'auto'}}
            className="container">
            <TutorialSearchBar />
          </div>
          <TutorialCards />
        </div>
      </main>
    </Layout>
  );
}