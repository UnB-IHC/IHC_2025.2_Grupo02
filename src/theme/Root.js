import React from 'react';
import { ChecklistProvider } from './ChecklistContext'; // Importe seu NOVO provider

export default function Root({ children }) {
  return (
    <ChecklistProvider>
      {children}
    </ChecklistProvider>
  );
}