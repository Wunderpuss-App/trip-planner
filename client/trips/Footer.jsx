import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Footer = () => {
  return (
    <div id='footer'>
      <button className='footerBtn' formMethod='DELETE' type='submit'>
        {' '}
        DELETE
      </button>
      <button className='footerBtn' formMethod='PATCH' type='submit'>
        {' '}
        UPDATE
      </button>
    </div>
  );
};

export default Footer;
