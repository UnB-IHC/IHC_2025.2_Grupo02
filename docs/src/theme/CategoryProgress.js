import React from 'react';
import { useChecklist } from '@site/src/theme/ChecklistContext';
import RadialProgressBar from '@site/src/theme/RadialProgressBar';
import styles from '@site/src/theme/OverviewComponent.module.css'; 

function getProgress(getCheckedCount, ids) {
  if (!ids || ids.length === 0) return { checked: 0, total: 0, percentage: 0 };
  const total = ids.length;
  const checked = getCheckedCount(ids);
  const percentage = (checked / total) * 100;
  return { checked, total, percentage };
}

/**
 * Este componente renderiza um único RadialProgressBar para uma lista de IDs específica.
 * Ele é feito para ser reutilizável em qualquer página .mdx.
 */
export default function CategoryProgress({ idList, title }) {
  const { getCheckedCount } = useChecklist();

  const progress = getProgress(getCheckedCount, idList);

  if (progress.total === 0) {
    return null;
  }

  // Define o rótulo
  const label = `${title} (${progress.checked} / ${progress.total})`;

  return (
    <div className={styles.gridItem}>
      <RadialProgressBar
        percentage={progress.percentage}
        label={label}
      />
    </div>
  );
}