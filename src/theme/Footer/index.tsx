import React from 'react';
import Link from '@docusaurus/Link';
import {useThemeConfig} from '@docusaurus/theme-common';

function Footer(): JSX.Element | null {
  const {footer} = useThemeConfig();
  if (!footer) {
    return null;
  }
  
  return (
    <footer style={{
      position: 'relative',
      background: 'linear-gradient(180deg, var(--landing-bg) 0%, #0a0b0f 100%)',
      borderTop: '1px solid rgba(168, 85, 247, 0.2)',
      padding: '4rem 2rem',
      overflow: 'hidden',
      color: '#9ca3af'
    }}>
      {/* Glow Effect */}
      <div style={{
        position: 'absolute',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, rgba(0,0,0,0) 70%)',
        bottom: '-200px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          
          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <img src="/img/zyro_logo.png" alt="ZyroNetwork" style={{ width: '48px', height: '48px', filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.4))' }} />
              <h2 style={{ color: 'white', margin: 0, fontSize: '1.5rem', fontWeight: 800 }}>ZyroNetwork</h2>
            </div>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem', maxWidth: '300px' }}>
              A premium development school to learn coding, systems administration, and high-performance game plugin creation.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://discord.gg/YznYkMuRUG" target="_blank" rel="noopener noreferrer" 
                 style={{ color: '#fff', background: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '50%', display: 'flex', transition: 'all 0.2s' }}
                 onMouseOver={(e) => { e.currentTarget.style.background = '#5865F2'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                 onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div className="discord-icon" style={{ width: '20px', height: '20px' }}></div>
              </a>
              <a href="https://github.com/ZyroNetworkMC" target="_blank" rel="noopener noreferrer" 
                 style={{ color: '#fff', background: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '50%', display: 'flex', transition: 'all 0.2s' }}
                 onMouseOver={(e) => { e.currentTarget.style.background = '#333'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                 onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div className="github-icon" style={{ width: '20px', height: '20px' }}></div>
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h3 style={{ color: 'white', fontWeight: 700, marginBottom: '1.5rem' }}>Learn</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/tutorials" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#a855f7'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>All Courses</Link></li>
              <li><Link to="/docs/php/introduction" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#a855f7'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>PHP Fundamentals</Link></li>
              <li><Link to="/docs/python/introduction" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#a855f7'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>Python Scripting</Link></li>
              <li><Link to="/docs/linux/introduction" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#a855f7'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>Linux Administration</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 style={{ color: 'white', fontWeight: 700, marginBottom: '1.5rem' }}>Game Servers</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/docs/pocketmine-mp/introduction" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#a855f7'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>PocketMine-MP</Link></li>
              <li><Link to="/docs/nukkit/introduction" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#a855f7'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>Nukkit</Link></li>
              <li><Link to="/docs/dragonfly/introduction" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#a855f7'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>DragonFly</Link></li>
            </ul>
          </div>

        </div>

        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.85rem'
        }}>
          <div dangerouslySetInnerHTML={{ __html: footer.copyright }} />
          <div style={{ display: 'flex', gap: '1rem' }}>
            <span>Built with Docusaurus</span>
            <span>Made by ZyroNetwork</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
