import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Clothing = () => {
  const dispatch = useDispatch();
  const savePost = (e) => {
    e.preventDefault();
    
  }


  return (
    <div id='Clothing'>
      <h1>Clothing here</h1>
      <button formMethod='POST' className='saveBtn' onClick={savePost}>Save</button>
    </div>
  );
};
export default Clothing;
