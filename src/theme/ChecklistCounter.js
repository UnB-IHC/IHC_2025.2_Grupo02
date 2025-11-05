import React from 'react';
import { useChecklist } from './ChecklistContext';
import styles from './ChecklistCounter.module.css';

export default function ChecklistCounter() {
  const { totalCount, checkedCount } = useChecklist();

  // Não mostra nada se não houver caixas na página
  if (totalCount === 0) {
    return null;
  }

  const percentage = totalCount > 0 ? (checkedCount / totalCount) * 100 : 0;

  return (
    <div className={styles.counterBox}>
      <strong>Progresso da Página</strong>
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className={styles.counterText}>
        {checkedCount} de {totalCount} itens completos
      </div>
    </div>
  );
}