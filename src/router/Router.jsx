import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TodoApp from '../components/TodoApp';
import TestPage from '../components/TestPage';

function Router() {
  return (
    <Routes>
      <Route exact path="/">
        <Route path="" element={<TodoApp />} />
      </Route>
      <Route exact path="test">
        <Route path="" element={<TestPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
