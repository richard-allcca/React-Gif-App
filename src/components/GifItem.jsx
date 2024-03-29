import React from 'react';
import PropTypes from 'prop-types';

export const GifItem = ({ title, url }) => {
  return (
    <div className='card'>
      <img src={ url } alt={ title } />
      <p>{ title || 'sin titulo' }</p>
    </div>
  );
};

//  Añadir PropTypes
GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};



// export default GifItem