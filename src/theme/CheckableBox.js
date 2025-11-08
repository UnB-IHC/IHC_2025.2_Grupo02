import React from 'react';
import { useChecklist } from './ChecklistContext';

export default function CheckableBox({ id }) {
  const { isChecked, toggleCheck } = useChecklist();

  if (!id) {
    // Erro para garantir que o ID foi passado
    throw new Error("CheckableBox precisa de uma 'id' prop! Ex: <CheckableBox id='meu-id-unica' />");
  }

  // Pergunta ao contexto se está marcada
  const checked = isChecked(id);

  // Avisa ao contexto para inverter o estado
  const handleChange = () => {
    toggleCheck(id);
  };

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={handleChange}
      style={{
        width: '1.25rem',
        height: '1.25rem',
        verticalAlign: 'middle',
        marginRight: '0.5rem',
      }}
    />
  );
}