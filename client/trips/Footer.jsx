import React from 'react';

const Footer = () => {
  return (
    <div id='footer'>
      <button formMethod='DELETE' type='submit'>
        {' '}
        DELETE
      </button>
      <button formMethod='PATCH' type='submit'>
        {' '}
        UPDATE
      </button>
    </div>
  );
};

export default Footer;