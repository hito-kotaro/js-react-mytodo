import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TodoApp from '../components/TodoApp';

function Router() {
  return (
    <Routes>
      <Route exact path="/">
        <Route path="" element={<TodoApp />} />
      </Route>
    </Routes>
  );
}

export default Router;
