import React, { createContext, useContext, useState, useCallback } from 'react';

// 1. Criar o Contexto
const ChecklistContext = createContext(undefined);

// 2. Criar o Provedor (que armazena os dados)
export function ChecklistProvider({ children }) {
  const [totalCount, setTotalCount] = useState(0);
  const [checkedCount, setCheckedCount] = useState(0);

  // Função para uma nova caixa se "registrar"
  const registerCheckbox = useCallback(() => {
    setTotalCount((count) => count + 1);
  }, []); // O useCallback garante que a função não mude

  // Função para "avisar" que uma caixa foi marcada/desmarcada
  const toggleCheckbox = useCallback((isChecked) => {
    setCheckedCount((count) => count + (isChecked ? 1 : -1));
  }, []);

  const value = {
    totalCount,
    checkedCount,
    registerCheckbox,
    toggleCheckbox,
  };

  return (
    <ChecklistContext.Provider value={value}>
      {children}
    </ChecklistContext.Provider>
  );
}

// 3. Criar o "Hook" (para os componentes acessarem os dados)
export function useChecklist() {
  const context = useContext(ChecklistContext);
  if (context === undefined) {
    throw new Error('useChecklist deve ser usado dentro de um ChecklistProvider');
  }
  return context;
}