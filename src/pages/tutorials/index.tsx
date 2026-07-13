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
    }}>
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
        fontSize: '3rem',
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
    </section>
  );
}

export default function Tutorial(): JSX.Element {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main>
        <TutorialHeader />
        <div className="container" style={{ paddingTop: '2rem' }}>
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