import React from 'react';
import { TARGET_URL } from '@/app/constants';

/**
 * Hero component for Lucky Bear Casino
 */
const Hero = () => {
  return (
    <section 
      className="elementor-element elementor-element-5211c18 e-con-full e-flex e-con e-parent" 
      data-id="5211c18" 
      data-element_type="container"
      style={{
        backgroundColor: '#1a1f29',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 24px',
        textAlign: 'center',
        width: '100%',
        minHeight: '400px'
      }}
    >
      <div 
        className="elementor-element elementor-element-353ed18 elementor-widget elementor-widget-html" 
        data-id="353ed18" 
        data-element_type="widget" 
        data-widget_type="html.default"
        style={{
          maxWidth: '1200px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <div className="elementor-widget-container">
          <div className="lucky-hero">
            {/* Main Catchy Title */}
              <h1 
                id="hero-title"
                style={{
                  fontFamily: 'var(--font-display, "Roboto", sans-serif)',
                  fontSize: '48px',
                  fontWeight: 900,
                  lineHeight: '1.2',
                  color: '#ffffff',
                  marginBottom: '24px',
                  letterSpacing: '-0.02em',
                  maxWidth: '950px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                }}
              >
                💎 Lucky Bear (Лаки Бир) — Твой Шанс на Миллион! Забирай +500% Бонус Прямо Сейчас! 🐻
              </h1>

              {/* Descriptive Content */}
              <p 
                style={{
                  fontFamily: 'var(--font-sans, "Roboto", sans-serif)',
                  fontSize: '20px',
                  lineHeight: '1.6',
                  color: '#e2e8f0',
                  maxWidth: '800px',
                  marginBottom: '40px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  fontWeight: 400
                }}
              >
                Открой для себя мир эксклюзивных слотов и мгновенных выплат в <strong className="text-white">lucky bear казино</strong>. 
                Мы объединили лучшие <strong className="text-white">лакибир слоты</strong>, топовые бонусы и безопасность в одном месте. 
                Выполни <strong className="text-white">лаки бир вход</strong> сегодня и начни выигрывать по-крупному в <strong className="text-white">лаки бир казино</strong>!
              </p>

            {/* CTA Button */}
            <div className="elementor-button-wrapper" style={{ display: 'flex', justifyContent: 'center' }}>
              <a 
                href={TARGET_URL} 
                className="btn-primary"
                style={{
                  backgroundColor: '#2b87f9',
                  color: '#ffffff',
                  fontSize: '20px',
                  fontWeight: 700,
                  padding: '18px 56px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease-in-out',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(43, 135, 249, 0.4)',
                  textTransform: 'uppercase'
                }}
              >
                Играть Сейчас
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Internal component styles mimicking computed styles from the instruction context */}
      <style dangerouslySetInnerHTML={{ __html: `
        .lucky-hero h1 {
          @media (max-width: 768px) {
            font-size: 32px !important;
          }
        }
        .lucky-hero p {
          @media (max-width: 768px) {
            font-size: 16px !important;
          }
        }
        .btn-primary:hover {
          filter: brightness(1.1);
          transform: scale(1.05);
          box-shadow: 0 6px 20px rgba(43, 135, 249, 0.5);
        }
      `}} />
    </section>
  );
};

export default Hero;
