import React from 'react';
import { useNavigate } from 'react-router-dom';
import Trip from './Trip.jsx';

const App = () => {
  const navigate = useNavigate();

  return <Trip />;
};
export default App;
