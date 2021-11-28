import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TodoApp from './TodoApp';

const Router = () => {
  const msg = 'test';
  return (
    <Routes>
      <Route exact path="/">
        <Route path="" element={<TodoApp />} />
      </Route>
    </Routes>
  );
};

export default Router;
