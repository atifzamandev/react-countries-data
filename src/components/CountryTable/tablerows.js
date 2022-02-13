import React from "react";
import { Link } from "react-router-dom";

function TableRows({ flag, cname, population, languages, region }) {
  return (
    <tr>
      {/* <td><img src={flag} alt="" width="80" height="50"/></td> */}
      <td>{flag} </td>
      <td>
        <Link to={`/detail/${cname}`}>{cname}</Link>
      </td>
      <td>{population}</td>
      <td>{region}</td>
      <td><ul>{languages}</ul></td>

      {/* <td>{country.name.common}</td> */}
    </tr>
  );
}

export default TableRows;
