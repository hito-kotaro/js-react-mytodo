import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const TestPage = () => {
  const { state } = useLocation();
  console.log(state);
  const msg = 'test';
  return <div>{msg}</div>;
};

export default TestPage;
