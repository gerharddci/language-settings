import React, { useState } from 'react';
import Header from './components/Header.js';
import Content from './components/Content.js';
import LanguageContext from './contexts/LanguageContext.js';
import './App.css';

function App() {
  const [language, setLanguage] = useState('US');
  return (
    <LanguageContext.Provider value={[language, setLanguage]}>
      <div className="App">
      <h1>App</h1>
        <Header />
        <Content />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
