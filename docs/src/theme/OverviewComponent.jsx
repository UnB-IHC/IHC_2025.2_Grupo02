import React from 'react';
import { useChecklist } from '@site/src/theme/ChecklistContext';
import RadialProgressBar from '@site/src/theme/RadialProgressBar';
import styles from '@site/src/theme/OverviewComponent.module.css';

import {
  CHECKLIST_DESENVOLVIMENTO_WEB_IDS,
  CHECKLIST_DESIGN_CONTEUDO_IDS,
  CHECKLIST_GERACAO_CONTEUDO_IDS,
  CHECKLIST_GESTAO_PROJETOS_IDS,
  CHECKLIST_HEURISTICA_NEILSEN_IDS, // <- 1. Importar a nova lista
  ALL_SITE_IDS
} from '@site/src/theme/ChecklistIds';

function getProgress(getCheckedCount, ids) {
  if (!ids || ids.length === 0) return { checked: 0, total: 0, percentage: 0 };
  const total = ids.length;
  const checked = getCheckedCount(ids);
  const percentage = (checked / total) * 100;
  return { checked, total, percentage };
}

export default function OverviewComponent() {
  const { getCheckedCount } = useChecklist();

  // Calcula todo o progresso
  const devProgress = getProgress(getCheckedCount, CHECKLIST_DESENVOLVIMENTO_WEB_IDS);
  const designProgress = getProgress(getCheckedCount, CHECKLIST_DESIGN_CONTEUDO_IDS);
  const conteudoProgress = getProgress(getCheckedCount, CHECKLIST_GERACAO_CONTEUDO_IDS);
  const gestaoProgress = getProgress(getCheckedCount, CHECKLIST_GESTAO_PROJETOS_IDS);
  const neilsenProgress = getProgress(getCheckedCount, CHECKLIST_HEURISTICA_NEILSEN_IDS); // <- 2. Calcular o novo progresso
  const totalProgress = getProgress(getCheckedCount, ALL_SITE_IDS);

  return (
    <div className={styles.overviewMain}>
      <div className={styles.overviewContainer}>
        
        <h2>Progresso Geral</h2>

        <div className={styles.totalProgress}>
          <RadialProgressBar
            percentage={totalProgress.percentage}
            label={`Total (${totalProgress.checked} / ${totalProgress.total})`}
          />
        </div>

        <hr className={styles.divider} />

        <h2>Progresso por Categoria</h2>
        <div className={styles.grid}>
          
          <RadialProgressBar
            percentage={devProgress.percentage}
            label={`Desenvolvimento Web (${devProgress.checked} / ${devProgress.total})`}
          />
          
          <RadialProgressBar
            percentage={designProgress.percentage}
            label={`Design e Conteúdo (${designProgress.checked} / ${designProgress.total})`}
          />

          <RadialProgressBar
            percentage={conteudoProgress.percentage}
            label={`Geração de Conteúdo (${conteudoProgress.checked} / ${conteudoProgress.total})`}
          />

          <RadialProgressBar
            percentage={gestaoProgress.percentage}
            label={`Gestão de Projetos (${gestaoProgress.checked} / ${gestaoProgress.total})`}
          />

          <RadialProgressBar
            percentage={neilsenProgress.percentage}
            label={`Heurísticas de Nielsen (${neilsenProgress.checked} / ${neilsenProgress.total})`}
          />

        </div>
      </div>
    </div>
  );
}