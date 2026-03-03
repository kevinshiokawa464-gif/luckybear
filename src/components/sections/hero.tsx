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
              🔥 Lucky Bear Казино: Взрывные Выигрыши Ждут! Забери Свой Секретный Бонус Прямо Сейчас! 🚀
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
              Присоединяйтесь к элите игроков Лаки Бир и окунитесь в мир лицензионного азарта. 
              Вас ждут сотни топовых слотов, мгновенные выплаты и поддержка 24/7. 
              Не упусти шанс стать миллионером уже сегодня!
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
