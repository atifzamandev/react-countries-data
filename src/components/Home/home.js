import React from "react";
import { useState, useEffect,useCallback } from "react";
import Counter from "../Counter/counter";

import CountryTable from "../CountryTable/countrytable";
import useCountries from "../../hooks/useCountries";
import Search from "../Search/search";
import Welcome from "../Welcome";

function Home() {
  // const [countries, setCountries] = useState([]);
  // const [filteredData, setFiltererData] = useState([]);
  const [keyword, setKeyWord] = useState("");
  const [count, setCount] = useState(0);
  const [filteredData] = useCountries(keyword) //console.log(countries);

  // useEffect(() => {
  //   fetch("https://restcountries.com/v3.1/all")
  //     .then((countryresponse) => countryresponse.json())
  //     .then((countrydata) => {
  //       setCountries(countrydata);
  //       setFiltererData(countrydata);
  //     });
  // }, []);

  const handleChange = useCallback((event) => {
    setKeyWord(event.target.value);
  }, []);

  const handleCounter = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  //console.log(countries.map((countshow)=> (JSON.stringify(countshow.languages))))

  return (
    <div>
      <Welcome />
      <Counter count={count} handleCounter={handleCounter} />
      <Search handleChange={handleChange} value={keyword} />

      <CountryTable countries={filteredData} />
      {/* <ul>
            {countries.map((contshow)=>(<li>{contshow.name.common}</li>))}
        
        </ul> */}
    </div>
  );
}

export default Home;
