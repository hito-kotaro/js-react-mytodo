import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
