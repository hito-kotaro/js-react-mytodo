import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const TestPage = () => {
  console.log(useLocation());
  const { pathname } = useLocation();
  console.log(pathname);
  const msg = 'test';
  return <div>{msg}</div>;
};

export default TestPage;
