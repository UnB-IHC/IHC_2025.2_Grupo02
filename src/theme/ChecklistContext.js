import React, { createContext, useContext, useState, useEffect } from 'react';

const ChecklistContext = createContext(undefined);

// Função para carregar o estado do localStorage
const loadState = () => {
  if (typeof window === 'undefined') {
    return {};
  }
  try {
    const serializedState = localStorage.getItem('checklistState');
    if (serializedState === null) {
      return {}; // Nenhum estado salvo
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Erro ao carregar o estado do checklist:", err);
    return {};
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('checklistState', serializedState);
  } catch (err) {
    console.error("Erro ao salvar o estado do checklist:", err);
  }
};

export function ChecklistProvider({ children }) {
  const [checkedState, setCheckedState] = useState(loadState());

  // Salva no localStorage sempre que o estado mudar
  useEffect(() => {
    saveState(checkedState);
  }, [checkedState]);

  // Função para marcar/desmarcar
  const toggleCheck = (id) => {
    setCheckedState((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Inverte o valor (true vira false, etc.)
    }));
  };

  // Função para saber se um ID está marcado
  const isChecked = (id) => {
    return !!checkedState[id]; // Retorna true ou false
  };

  // Função para um contador obter a contagem de uma lista de IDs
  const getCheckedCount = (ids) => {
    // Filtra os IDs da lista que estão marcados no estado
    return ids.reduce((count, id) => {
      return checkedState[id] ? count + 1 : count;
    }, 0);
  };

  // Os valores que o Contexto fornece
  const value = {
    toggleCheck,
    isChecked,
    getCheckedCount,
  };

  return (
    <ChecklistContext.Provider value={value}>
      {children}
    </ChecklistContext.Provider>
  );
}

// O Hook não muda
export function useChecklist() {
  const context = useContext(ChecklistContext);
  if (context === undefined) {
    throw new Error('useChecklist deve ser usado dentro de um ChecklistProvider');
  }
  return context;
}