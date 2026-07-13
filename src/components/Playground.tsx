import React, { useState } from 'react';

export default function Playground(): JSX.Element {
  const [activeTab, setActiveTab] = useState<'php' | 'yml'>('php');
  const [pluginName, setPluginName] = useState('ZyroNetworkPlugin');
  const [authorName, setAuthorName] = useState('ZyroNetwork');
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const phpTemplate = `<?php

declare(strict_types=1);

namespace ZyroNetwork\\${pluginName};

use pocketmine\\plugin\\PluginBase;
use pocketmine\\event\\Listener;
use pocketmine\\event\\player\\PlayerJoinEvent;
use pocketmine\\utils\\TextFormat;

class Main extends PluginBase implements Listener {

    protected function onEnable() : void {
        $this->getServer()->getPluginManager()->registerEvents($this, $this);
        $this->getLogger()->info(TextFormat::GREEN . "Plugin Loaded Successfully!");
    }

    public function onJoin(PlayerJoinEvent $event) : void {
        $player = $event->getPlayer();
        $player->sendMessage("Welcome to ZyroNetwork!");
    }
}`;

  const ymlTemplate = `name: ${pluginName}
version: 1.0.0
api: 5.0.0
main: ZyroNetwork\\${pluginName}\\Main
author: ${authorName}
description: In-browser sandbox plugin for ZyroNetwork School!`;

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setConsoleLogs([]);
    
    const logs = [
      `[${new Date().toLocaleTimeString()}] [Server thread/INFO]: Starting Minecraft: Bedrock Edition server version v1.26.40`,
      `[${new Date().toLocaleTimeString()}] [Server thread/INFO]: Loading pocketmine.yml...`,
      `[${new Date().toLocaleTimeString()}] [Server thread/INFO]: Opening server on 0.0.0.0:19132`,
      `[${new Date().toLocaleTimeString()}] [Server thread/INFO]: Loading resources...`,
      `[${new Date().toLocaleTimeString()}] [Server thread/INFO]: [${pluginName}] Loading ${pluginName} v1.0.0 by ${authorName}...`,
      `[${new Date().toLocaleTimeString()}] [Server thread/INFO]: [${pluginName}] Enabling ${pluginName} v1.0.0...`,
      `[${new Date().toLocaleTimeString()}] [Server thread/INFO]: [${pluginName}] Plugin Loaded Successfully!`,
      `[${new Date().toLocaleTimeString()}] [Server thread/INFO]: Done (1.42s)! For help, type "help" or "?"`
    ];

    let currentLogIndex = 0;
    const interval = setInterval(() => {
      if (currentLogIndex < logs.length) {
        setConsoleLogs((prev) => [...prev, logs[currentLogIndex]]);
        currentLogIndex++;
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 400);
  };

  return (
    <div style={{
      background: '#0d0e12',
      border: '1px solid #1c1a24',
      borderRadius: '12px',
      overflow: 'hidden',
      fontFamily: 'system-ui, sans-serif',
      boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
      margin: '2rem 0'
    }}>
      {/* Settings / Controls */}
      <div style={{
        padding: '1.25rem',
        borderBottom: '1px solid #1c1a24',
        background: '#13141c',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <div>
            <label style={{ display: 'block', color: '#9ca3af', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '4px' }}>Plugin Name</label>
            <input 
              type="text" 
              value={pluginName} 
              onChange={(e) => setPluginName(e.target.value.replace(/\s+/g, ''))}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '6px',
                padding: '6px 12px',
                color: '#fff',
                fontSize: '0.9rem'
              }}
            />
          </div>
          <div>
            <label style={{ display: 'block', color: '#9ca3af', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '4px' }}>Author Name</label>
            <input 
              type="text" 
              value={authorName} 
              onChange={(e) => setAuthorName(e.target.value)}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '6px',
                padding: '6px 12px',
                color: '#fff',
                fontSize: '0.9rem'
              }}
            />
          </div>
        </div>

        <button 
          onClick={runSimulation}
          disabled={isRunning}
          style={{
            background: isRunning ? 'rgba(255,255,255,0.1)' : 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
            border: 'none',
            borderRadius: '6px',
            padding: '8px 24px',
            color: '#fff',
            fontWeight: 600,
            fontSize: '0.9rem',
            cursor: isRunning ? 'not-allowed' : 'pointer',
            boxShadow: isRunning ? 'none' : '0 0 12px rgba(168, 85, 247, 0.4)',
            transition: 'opacity 0.2s'
          }}
        >
          {isRunning ? 'Booting Server...' : 'Run Simulated Server'}
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {/* Code Editor Column */}
        <div style={{ borderRight: '1px solid #1c1a24', display: 'flex', flexDirection: 'column' }}>
          {/* Editor Tabs */}
          <div style={{ display: 'flex', background: '#13141c', borderBottom: '1px solid #1c1a24' }}>
            <button 
              onClick={() => setActiveTab('php')}
              style={{
                background: activeTab === 'php' ? 'transparent' : '#13141c',
                border: 'none',
                borderBottom: activeTab === 'php' ? '2px solid #a855f7' : '2px solid transparent',
                color: activeTab === 'php' ? '#fff' : '#9ca3af',
                padding: '10px 20px',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.85rem'
              }}
            >
              Main.php (Code)
            </button>
            <button 
              onClick={() => setActiveTab('yml')}
              style={{
                background: activeTab === 'yml' ? 'transparent' : '#13141c',
                border: 'none',
                borderBottom: activeTab === 'yml' ? '2px solid #a855f7' : '2px solid transparent',
                color: activeTab === 'yml' ? '#fff' : '#9ca3af',
                padding: '10px 20px',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.85rem'
              }}
            >
              plugin.yml (Metadata)
            </button>
          </div>
          {/* Editor Content */}
          <textarea 
            readOnly
            value={activeTab === 'php' ? phpTemplate : ymlTemplate}
            style={{
              flex: 1,
              minHeight: '300px',
              background: '#0d0e12',
              border: 'none',
              padding: '1rem',
              color: '#a78bfa',
              fontFamily: 'monospace',
              fontSize: '0.85rem',
              resize: 'none',
              outline: 'none',
              lineHeight: '1.5'
            }}
          />
        </div>

        {/* Console Column */}
        <div style={{ display: 'flex', flexDirection: 'column', background: '#090a0f' }}>
          <div style={{
            background: '#13141c',
            borderBottom: '1px solid #1c1a24',
            padding: '10px 20px',
            fontSize: '0.85rem',
            fontWeight: 600,
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: isRunning ? '#10b981' : '#f59e0b' }} />
            PMMP Console
          </div>
          <div style={{
            padding: '1rem',
            fontFamily: 'monospace',
            fontSize: '0.8rem',
            color: '#10b981',
            minHeight: '300px',
            maxHeight: '400px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px'
          }}>
            {consoleLogs.length === 0 ? (
              <span style={{ color: '#4b5563' }}>Console inactive. Click "Run Simulated Server" above to load your plugin!</span>
            ) : (
              consoleLogs.map((log, idx) => (
                <div key={idx} style={{ 
                  color: log.includes('GREEN') || log.includes('Loaded Successfully') ? '#34d399' : log.includes('error') ? '#f87171' : '#10b981',
                  whiteSpace: 'pre-wrap'
                }}>
                  {log.replace(/.\[32m|\\u001b\[32m/g, '').replace(/TextFormat::GREEN ./g, '')}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
