"use client";
import React from 'react';

const Topbar = () => {
  return (
    <div style={{ 
      width: '100%', 
      background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 50%, #ffa500 100%)',
      boxShadow: '0 2px 10px rgba(255, 107, 53, 0.3)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
        animation: 'shimmer 3s infinite',
      }}></div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '14px 20px',
          fontWeight: 700,
          color: '#ffffff',
          fontSize: '17px',
          letterSpacing: '0.8px',
          textTransform: 'uppercase',
          position: 'relative',
          zIndex: 1,
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        }}
      >
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '12px',
        }}>
          <span style={{
            display: 'inline-block',
            width: '8px',
            height: '8px',
            backgroundColor: '#fff',
            borderRadius: '50%',
            animation: 'pulse 2s ease-in-out infinite',
          }}></span>
          Specialize Maintenance Company
          <span style={{
            display: 'inline-block',
            width: '8px',
            height: '8px',
            backgroundColor: '#fff',
            borderRadius: '50%',
            animation: 'pulse 2s ease-in-out infinite',
            animationDelay: '1s',
          }}></span>
        </span>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(0.8);
          }
        }

        @media (max-width: 768px) {
          div[style*="fontSize: '17px'"] {
            font-size: 14px !important;
            letter-spacing: 0.5px !important;
            padding: 12px 16px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Topbar;