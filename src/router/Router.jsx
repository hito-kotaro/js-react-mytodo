import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TodoApp from '../components/TodoApp';
import TodoDetail from '../components/TodoDetail';

function Router() {
  return (
    <Routes>
      <Route exact path="/">
        <Route path="" element={<TodoApp />} />
      </Route>
      <Route exact path="detail">
        <Route path="" element={<TodoDetail />} />
      </Route>
    </Routes>
  );
}

export default Router;
