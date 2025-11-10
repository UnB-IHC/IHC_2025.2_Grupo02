import React from 'react';
import { useChecklist } from './ChecklistContext';
import { ALL_SITE_IDS } from '@site/src/checklist-ids'; 
import styles from './ChecklistCounter.module.css'; // Reutiliza o mesmo estilo

export default function GlobalChecklistCounter() {
  const { getCheckedCount } = useChecklist();

  const totalCount = ALL_SITE_IDS.length;
  if (totalCount === 0) {
    return null;
  }

  const checkedCount = getCheckedCount(ALL_SITE_IDS);
  const percentage = totalCount > 0 ? (checkedCount / totalCount) * 100 : 0;

  return (
    <div className={styles.counterBox} style={{width: '250px', margin: '0 1rem', padding: '8px'}}>
      <strong style={{fontSize: '0.9rem'}}>Progresso Total</strong>
      <div className={styles.progressBar} style={{marginTop: '0.5rem'}}>
        <div
          className={styles.progressFill}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className={styles.counterText} style={{marginTop: '4px', fontSize: '0.8rem'}}>
        {checkedCount} de {totalCount} itens completos
      </div>
    </div>
  );
}