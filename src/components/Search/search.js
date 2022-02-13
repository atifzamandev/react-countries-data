import React from 'react';
import propTypes from 'prop-types';
import { memo } from 'react';



function Search({value, handleChange}) {
  console.log('Search is randering');
    
  return (
     <input type="text" value={value} onChange={handleChange} />

  )
}

Search.propTypes = {
  value: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired
}

export default memo(Search)