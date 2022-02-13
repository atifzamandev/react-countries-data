import React from 'react'
import { useParams } from 'react-router-dom'
export default function CountryDetails() {
    const {name} = useParams();
    //console.log(name);
  return (
    <div>
        Country Details : {name}
    </div>
  )
}
