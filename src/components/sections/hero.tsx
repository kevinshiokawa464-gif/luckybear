import React from 'react';

/**
 * Hero component for Lucky Bear Casino
 * 
 * Design Instructions:
 * - Dark background (#1a1f29)
 * - Clickbait title: 'Lucky Bear Casino: Твой Прямой Путь к Крупным Выигрышам!'
 * - Descriptive paragraph about slots and bonuses
 * - Large blue 'Play Now' CTA button pointing to https://lbgame777.xyz/2xn84Y
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
                fontWeight: 700,
                lineHeight: '1.2',
                color: '#ffffff',
                marginBottom: '24px',
                letterSpacing: '-0.01em',
                maxWidth: '900px',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              Lucky Bear Casino: Твой Прямой Путь к Крупным Выигрышам!
            </h1>

            {/* Descriptive Content */}
            <p 
              style={{
                fontFamily: 'var(--font-sans, "Roboto", sans-serif)',
                fontSize: '18px',
                lineHeight: '1.6',
                color: '#9da5b1',
                maxWidth: '750px',
                marginBottom: '40px',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              Окунитесь в захватывающий мир азарта с лучшими лицензионными слотами от мировых провайдеров. 
              Вас ждут эксклюзивные приветственные бонусы, мгновенные выплаты и круглосуточная поддержка. 
              Начните свою победную серию в Lucky Bear прямо сейчас!
            </p>

            {/* CTA Button */}
            <div className="elementor-button-wrapper" style={{ display: 'flex', justifyContent: 'center' }}>
              <a 
                href="https://lbgame777.xyz/2xn84Y" 
                className="btn-primary"
                style={{
                  backgroundColor: '#2b87f9',
                  color: '#ffffff',
                  fontSize: '18px',
                  fontWeight: 600,
                  padding: '16px 48px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease-in-out',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(43, 135, 249, 0.3)'
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
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(43, 135, 249, 0.4);
        }
      `}} />
    </section>
  );
};

export default Hero;