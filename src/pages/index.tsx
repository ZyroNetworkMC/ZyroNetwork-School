import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Academy"
      description="The ultimate open-source hub for systems administration, programming languages, and multiplayer game server development. Learn PHP, Python, Linux, and Bedrock plugin creation from scratch."
    >
      <main>
        {/* Hero Section */}
        <div style={{
          background: 'var(--landing-hero-bg)',
          padding: '8rem 2rem',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          borderBottom: '1px solid var(--landing-border)',
          transition: 'background 0.3s, border-color 0.3s'
        }}>
          {/* Subtle glow */}
          <div style={{
            position: 'absolute',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(168,85,247,0.08) 0%, rgba(0,0,0,0) 70%)',
            top: '-200px',
            left: 'calc(50% - 300px)',
            zIndex: 0,
            pointerEvents: 'none'
          }} />
          
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'rgba(168, 85, 247, 0.1)',
              border: '1px solid rgba(168, 85, 247, 0.2)',
              borderRadius: '50px',
              padding: '6px 16px',
              marginBottom: '2rem',
              color: '#a855f7',
              fontSize: '0.85rem',
              fontWeight: 600,
              gap: '8px'
            }}>
              <span style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#a855f7',
                boxShadow: '0 0 8px #a855f7',
                display: 'inline-block'
              }} />
              Global Developer Curriculum
            </div>

            <Heading as="h1" className="hero__title" style={{
              fontSize: '4.5rem',
              fontWeight: 900,
              letterSpacing: '-2px',
              marginBottom: '1.5rem',
              background: 'var(--landing-hero-title)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: '1.1'
            }}>
              ZyroNetwork School
            </Heading>
            
            <p className="hero__subtitle" style={{
              fontSize: '1.35rem',
              color: 'var(--landing-text)',
              maxWidth: '700px',
              margin: '0 auto 3rem auto',
              fontWeight: 400,
              lineHeight: '1.6',
              transition: 'color 0.3s'
            }}>
              Master modern programming languages, system administration, and game server development in one unified platform.
            </p>
            
            <div style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Link
                className="button button--primary button--lg"
                to="/tutorials"
                style={{
                  background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
                  border: 'none',
                  boxShadow: '0 4px 20px rgba(124, 58, 237, 0.3)',
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
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(124, 58, 237, 0.3)';
                }}
              >
                Start Learning
              </Link>
              
              <Link
                className="button button--secondary button--lg"
                to="https://github.com/ZyroNetworkMC"
                style={{
                  background: 'rgba(168, 85, 247, 0.05)',
                  border: '1px solid rgba(168, 85, 247, 0.15)',
                  padding: '12px 36px',
                  fontWeight: 600,
                  borderRadius: '8px',
                  color: 'var(--landing-text-highlight)',
                  transition: 'background 0.2s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'rgba(168, 85, 247, 0.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(168, 85, 247, 0.05)';
                }}
              >
                GitHub Org
              </Link>
            </div>
          </div>
        </div>

        {/* Feature Grid / Core Tracks Section */}
        <div style={{
          background: 'var(--landing-bg)',
          padding: '6rem 2rem',
          transition: 'background 0.3s'
        }}>
          <div className="container">
            <h2 style={{
              textAlign: 'center',
              fontSize: '2.5rem',
              fontWeight: 800,
              marginBottom: '1rem',
              color: 'var(--landing-text-highlight)'
            }}>Educational Tracks</h2>
            
            <p style={{
              textAlign: 'center',
              color: 'var(--landing-text)',
              fontSize: '1.1rem',
              maxWidth: '600px',
              margin: '0 auto 4rem auto'
            }}>
              We provide structured documentation and quizzes to help you learn coding and backend hosting from scratch.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {/* Programming track */}
              <div style={{
                background: 'var(--landing-card-bg)',
                border: '1px solid var(--landing-card-border)',
                borderRadius: '12px',
                padding: '2.5rem',
                transition: 'border 0.3s, transform 0.3s',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.border = '1px solid rgba(168, 85, 247, 0.3)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.border = '1px solid var(--landing-card-border)';
                e.currentTarget.style.transform = 'none';
              }}>
                <div>
                  <div style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: '#a855f7',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '0.5rem'
                  }}>General Track</div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--landing-text-highlight)', marginBottom: '1rem' }}>Programming</h3>
                  <p style={{ color: 'var(--landing-text)', lineHeight: '1.6', marginBottom: '2rem' }}>
                    Learn the foundations of modern coding. Build strong OOP knowledge using PHP 8.1+ and automate processes using clean Python scripts.
                  </p>
                </div>
                <Link to="/tutorials" style={{ color: '#a855f7', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  Explore PHP & Python &rarr;
                </Link>
              </div>

              {/* Server Admin track */}
              <div style={{
                background: 'var(--landing-card-bg)',
                border: '1px solid var(--landing-card-border)',
                borderRadius: '12px',
                padding: '2.5rem',
                transition: 'border 0.3s, transform 0.3s',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.border = '1px solid rgba(168, 85, 247, 0.3)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.border = '1px solid var(--landing-card-border)';
                e.currentTarget.style.transform = 'none';
              }}>
                <div>
                  <div style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: '#a855f7',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '0.5rem'
                  }}>Systems Track</div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--landing-text-highlight)', marginBottom: '1rem' }}>Server Administration</h3>
                  <p style={{ color: 'var(--landing-text)', lineHeight: '1.6', marginBottom: '2rem' }}>
                    Learn Linux server setup and Bash scripting. Master terminal multiplexing, secure SSH connections, and resource monitoring tools.
                  </p>
                </div>
                <Link to="/docs/linux" style={{ color: '#a855f7', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  Explore Linux &rarr;
                </Link>
              </div>

              {/* Game Plugin track */}
              <div style={{
                background: 'var(--landing-card-bg)',
                border: '1px solid var(--landing-card-border)',
                borderRadius: '12px',
                padding: '2.5rem',
                transition: 'border 0.3s, transform 0.3s',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.border = '1px solid rgba(168, 85, 247, 0.3)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.border = '1px solid var(--landing-card-border)';
                e.currentTarget.style.transform = 'none';
              }}>
                <div>
                  <div style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: '#a855f7',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '0.5rem'
                  }}>Game Tech Track</div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--landing-text-highlight)', marginBottom: '1rem' }}>Plugin Development</h3>
                  <p style={{ color: 'var(--landing-text)', lineHeight: '1.6', marginBottom: '2rem' }}>
                    Build custom Minecraft: Bedrock server mods. Create plugins using industry standards like PocketMine-MP, Java-based Nukkit, or Go-based Dragonfly.
                  </p>
                </div>
                <Link to="/tutorials" style={{ color: '#a855f7', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  Explore Game Engines &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
