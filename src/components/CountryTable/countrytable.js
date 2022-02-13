import React from "react";
import Table from "react-bootstrap/Table";

import TableHeading from "./tableheading";
import TableRows from "./tablerows";
//import { Link } from "react-router-dom";

function CountryTable({ countries }) {
  return (
    <Table striped bordered hover>
      <thead>
      <TableHeading flag= "Flag" name="Name" population="Population" region="Region" lang="Languages"/>
      </thead>
      <tbody>
        {countries.map((country) => (
          <TableRows
            key={country.name.common}
            flag={country.flag}
            cname={country.name.common}
            population={country.population}
            region={country.region}
            languages={
              country.languages ? (
                Object.entries(country.languages).map(([key]) => (
                  <li key={key}>{country.languages[key]}</li>
                ))
              ) : (
                <li>NO Languages</li>
              )
            }
            
          />

          // <tr key={country.name.common}>
          //   {/* <td><img src={flag} alt="" width="80" height="50"/></td> */}
          //   <td>{country.flag} </td>
          //   <td>
          //     <Link to={`/detail/${country.name.common}`}>
          //       {country.name.common}
          //     </Link>
          //   </td>
          //   <td>{country.population}</td>
          //   <td>
          //     <ul>
          //         {country.languages ? Object.entries(country.languages).map(([key])=>(
          //           <li key={key}>{country.languages[key]}</li>
          //         )) : <li>NO Languages</li>}
          //     </ul>
          //   </td>
          //   <td>{country.region}</td>
          // </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default CountryTable;
