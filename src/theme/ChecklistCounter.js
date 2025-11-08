import React from 'react';
import { useChecklist } from './ChecklistContext';
import styles from './ChecklistCounter.module.css'; // O estilo não muda

export default function ChecklistCounter({ ids }) {
  const { getCheckedCount } = useChecklist();

  if (!ids || ids.length === 0) {
    // Se não passar IDs, não renderiza
    return null;
  }
  
  // Pergunta ao contexto quantos dos IDs desta lista estão marcados
  const checkedCount = getCheckedCount(ids);
  const totalCount = ids.length;

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