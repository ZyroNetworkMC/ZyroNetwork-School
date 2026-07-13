import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="A Premium Development School to Learn Everything About Minecraft: Bedrock Plugin Creation by ZyroNetwork"
    >
      <main className="dark">
        {/* Hero Section */}
        <div className="hero hero--dark" style={{
          background: 'radial-gradient(circle at top, #1c102a 0%, #0d0e12 100%)',
          padding: '8rem 2rem',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          borderBottom: '1px solid #1c1a24'
        }}>
          {/* Neon background glows */}
          <div style={{
            position: 'absolute',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(152,0,255,0.15) 0%, rgba(0,0,0,0) 70%)',
            top: '-200px',
            left: 'calc(50% - 300px)',
            zIndex: 0,
            pointerEvents: 'none'
          }} />
          
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'rgba(152, 0, 255, 0.1)',
              border: '1px solid rgba(152, 0, 255, 0.2)',
              borderRadius: '50px',
              padding: '6px 16px',
              marginBottom: '2rem',
              color: '#c084fc',
              fontSize: '0.85rem',
              fontWeight: 500,
              gap: '8px'
            }}>
              <span style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#c084fc',
                boxShadow: '0 0 8px #c084fc',
                display: 'inline-block'
              }} />
              Version 1.26.40 Pre-Release Active
            </div>

            <Heading as="h1" className="hero__title" style={{
              fontSize: '4.5rem',
              fontWeight: 900,
              letterSpacing: '-2px',
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #fff 30%, #c084fc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: '1.1'
            }}>
              ZyroNetwork School
            </Heading>
            
            <p className="hero__subtitle" style={{
              fontSize: '1.35rem',
              color: '#9ca3af',
              maxWidth: '700px',
              margin: '0 auto 3rem auto',
              fontWeight: 400,
              lineHeight: '1.6'
            }}>
              Master Minecraft: Bedrock plugin development. Comprehensive, ultra-detailed courses covering <strong style={{ color: '#fff' }}>PocketMine-MP</strong>, <strong style={{ color: '#fff' }}>Nukkit</strong>, and <strong style={{ color: '#fff' }}>Dragonfly</strong>.
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
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '12px 36px',
                  fontWeight: 600,
                  borderRadius: '8px',
                  color: '#fff',
                  transition: 'background 0.2s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                }}
              >
                GitHub Org
              </Link>
            </div>
          </div>
        </div>

        {/* Feature Grid / Platform Section */}
        <div style={{
          background: '#0d0e12',
          padding: '6rem 2rem',
        }}>
          <div className="container">
            <h2 style={{
              textAlign: 'center',
              fontSize: '2.5rem',
              fontWeight: 800,
              marginBottom: '1rem',
              color: '#fff'
            }}>Supported Platforms</h2>
            
            <p style={{
              textAlign: 'center',
              color: '#9ca3af',
              fontSize: '1.1rem',
              maxWidth: '600px',
              margin: '0 auto 4rem auto'
            }}>
              Whether you prefer PHP, Java, or Go, ZyroNetwork School provides complete APIs and step-by-step instructions.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {/* PocketMine Card */}
              <div style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
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
                e.currentTarget.style.border = '1px solid rgba(255,255,255,0.05)';
                e.currentTarget.style.transform = 'none';
              }}>
                <div>
                  <div style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: '#c084fc',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '0.5rem'
                  }}>PHP Platform</div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>PocketMine-MP</h3>
                  <p style={{ color: '#9ca3af', lineHeight: '1.6', marginBottom: '2rem' }}>
                    The industry standard for Bedrock servers. Write fast plugins using PHP 8.1+ and the highly hardened PocketMine API 5.
                  </p>
                </div>
                <Link to="/tutorials" style={{ color: '#c084fc', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  Explore Course &rarr;
                </Link>
              </div>

              {/* Nukkit Card */}
              <div style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
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
                e.currentTarget.style.border = '1px solid rgba(255,255,255,0.05)';
                e.currentTarget.style.transform = 'none';
              }}>
                <div>
                  <div style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: '#c084fc',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '0.5rem'
                  }}>Java Platform</div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>Nukkit</h3>
                  <p style={{ color: '#9ca3af', lineHeight: '1.6', marginBottom: '2rem' }}>
                    Leverage JVM performance. Nukkit's multi-threaded core allows handling hundreds of concurrent players easily in Java.
                  </p>
                </div>
                <Link to="/docs/nukkit" style={{ color: '#c084fc', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  Explore Course &rarr;
                </Link>
              </div>

              {/* Dragonfly Card */}
              <div style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
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
                e.currentTarget.style.border = '1px solid rgba(255,255,255,0.05)';
                e.currentTarget.style.transform = 'none';
              }}>
                <div>
                  <div style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: '#c084fc',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '0.5rem'
                  }}>Go (Golang) Platform</div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>Dragonfly</h3>
                  <p style={{ color: '#9ca3af', lineHeight: '1.6', marginBottom: '2rem' }}>
                    Build ultra-concurrent servers with Go goroutines. Modern architecture designed for high scalability and throughput.
                  </p>
                </div>
                <Link to="/docs/dragonfly" style={{ color: '#c084fc', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  Explore Course &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
