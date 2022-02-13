import React, {useEffect, useState} from 'react'

function useCountries(keyword) {
    const [countries, setCountries] = useState([]);
    const [filteredData, setFiltererData] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
          .then((countryresponse) => countryresponse.json())
          .then((countrydata) => {
            setCountries(countrydata);
            setFiltererData(countrydata);
          });
      }, []);

    useEffect(()=> {
        let countFilteredData = countries.filter((country) => {
            return (
              country.name.common
                .toLowerCase()
                .search(keyword.toLowerCase()) !== -1
            );
          });
      
          setFiltererData(countFilteredData);
    },[countries,keyword])

  return [filteredData];
}

export default useCountries