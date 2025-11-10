import React from 'react';
import styles from './RadialProgressBar.module.css';

/**
 * @param {object} props
 * @param {number} props.percentage - A porcentagem (0-100)
 * @param {string} props.label - O texto a ser exibido abaixo da porcentagem
 */

export default function RadialProgressBar({ percentage, label }) {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;

  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className={styles.container}>
      <svg className={styles.svg} viewBox="0 0 150 150">
        {/* Círculo de fundo (cinza) */}
        <circle
          className={styles.track}
          cx="75"
          cy="75"
          r={radius}
        />
        {/* Círculo de progresso (colorido) */}
        <circle
          className={styles.progress}
          cx="75"
          cy="75"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
            <text className={styles.text} x="50%" y="50%">
          {`${Math.round(percentage)}%`}
        </text>
      </svg>
      {/* Rótulo abaixo do círculo */}
      {label && <div className={styles.label}>{label}</div>}
    </div>
  );
}