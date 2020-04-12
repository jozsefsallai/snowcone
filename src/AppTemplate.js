import React from 'react';

export default function AppTemplate({ children }) {
  const mainClass = localStorage.getItem('theme') || 'light';

  return (
    <main className={mainClass}>
      {children}
    </main>
  );
}
