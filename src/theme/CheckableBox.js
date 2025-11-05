import React, { useState, useEffect } from 'react';
import { useChecklist } from './ChecklistContext';

export default function CheckableBox() {
  const [isChecked, setIsChecked] = useState(false);
  const { registerCheckbox, toggleCheckbox } = useChecklist();

  // 1. Quando o componente é inciazilado ele se registra no Contexto
  useEffect(() => {
    registerCheckbox();
  }, [registerCheckbox]);

  // 2. Quando o usuário clica
  const handleChange = (e) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    toggleCheckbox(checked);
  };

  return (
    <input
      type="checkbox"
      checked={isChecked}
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