
import React from 'react';
import AppNavigation from './navigation/appNavigation';
import AuthContextProvider from './context/globalContext';
export default function App() {
  return (
    <AuthContextProvider >
      <AppNavigation />
    </AuthContextProvider>
  );
}


