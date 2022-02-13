import React from 'react'

function TableHeading({flag, name, population, region, lang}) {
  return (
    
    <tr>
    <th>{flag}</th>
    <th>{name}</th>
    <th>{population}</th>
    <th>{region}</th>
    <th>{lang}</th>
  </tr>

  )
}

export default TableHeading