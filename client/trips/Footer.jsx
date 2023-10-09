import React from 'react';

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
