import React from 'react';
import { useNavigate } from 'react-router-dom';
import Burger from './Burger.jsx';
import Search from './Search.jsx';

const Nav = () => {
  return (
    <>
      <nav>
        <Burger />
        <h1>-Name-of-Place-</h1>
        <Search />
      </nav>
    </>
  );
};

export default Nav;
