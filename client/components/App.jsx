import React from 'react';
import { useNavigate } from 'react-router-dom';
import Home from './Home.jsx'

const App = () => {
  const navigate = useNavigate();

  return (
    <Home />
  );
};
export default App;
