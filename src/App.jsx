import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

const App = () => {
  const msg = 'test';
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
