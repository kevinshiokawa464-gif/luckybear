"use client";

import React from 'react';

/**
 * BonusProgram Component
 * 
 * Clones the "Bonus Program" section from Lucky Bear Casino.
 * Features:
 * - Large card layout with glassmorphism effect
 * - Detailed descriptions for Welcome Bonus, Cashback, and Tournaments
 * - Primary action button for viewing all offers
 */
const BonusProgram: React.FC = () => {
  return (
    <section 
      className="section" 
      style={{
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
    >
      <div 
        className="container"
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          paddingLeft: '16px',
          paddingRight: '16px',
        }}
      >
        <h2 
          style={{
            fontSize: '28px',
            fontWeight: 700,
            lineHeight: 1.3,
            color: '#ffffff',
            marginBottom: '24px',
          }}
        >
          Привилегии и Бонусы в Лаки Бир
        </h2>

        <div 
          className="card"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0 18px 60px rgba(0, 0, 0, 0.45)',
          }}
        >
          {/* Welcome Package */}
          <p 
            style={{
              fontSize: '16px',
              lineHeight: 1.6,
              color: 'rgba(234, 242, 255, 0.72)',
              marginBottom: '20px',
            }}
          >
            <strong style={{ color: '#ffffff', fontWeight: 600 }}>Приветственный Пакет</strong> — Удвойте свой первый взнос и получите 100 фриспинов на топовых слотах! Бонус зачисляется автоматически, позволяя вам начать игру с двойным преимуществом.
          </p>

          {/* Weekly Cashback */}
          <p 
            style={{
              fontSize: '16px',
              lineHeight: 1.6,
              color: 'rgba(234, 242, 255, 0.72)',
              marginBottom: '20px',
            }}
          >
            <strong style={{ color: '#ffffff', fontWeight: 600 }}>Понедельничный Кэшбэк</strong> — Возвращаем часть проигранных средств каждую неделю без лишних вопросов. Ваш статус в программе лояльности напрямую влияет на процент возврата.
          </p>

          {/* Tournaments */}
          <p 
            style={{
              fontSize: '16px',
              lineHeight: 1.6,
              color: 'rgba(234, 242, 255, 0.72)',
              marginBottom: '24px',
            }}
          >
            <strong style={{ color: '#ffffff', fontWeight: 600 }}>Турниры для Профи</strong> — Соревнуйтесь за миллионные призовые фонды в наших регулярных событиях. Никаких взносов, только ваша удача и активность в любимых автоматах.
          </p>

          {/* Action Button */}
          <div style={{ display: 'flex' }}>
            <a 
              href="/reg.html" 
              className="btn-primary js-cta"
              data-goal="content_bonus"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#1d4ed8',
                color: '#ffffff',
                padding: '11px 24px',
                borderRadius: '999px',
                fontSize: '16px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
            >
              Смотреть все предложения
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .btn-primary:hover {
          background-color: #3b82f6;
          transform: translateY(-1px);
        }
        
        @media (max-width: 768px) {
          h2 {
            font-size: 24px !important;
          }
          .card {
            padding: 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default BonusProgram;