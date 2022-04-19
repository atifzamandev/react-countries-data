import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CountriesApi_FETCH from '../redux/actions/CountriesApiAction'

function useCountries(keyword) {
    const [countries, setCountries] = useState([]);
    const [filteredData, setFiltererData] = useState([]);
    const dispatch = useDispatch();

    const {countriesAPI} = useSelector((state)=>state.countriesReducer)


    // useEffect(() => {
    //     fetch("https://restcountries.com/v3.1/all")
    //       .then((countryresponse) => countryresponse.json())
    //       .then((countrydata) => {
    //         setCountries(countrydata);
    //         setFiltererData(countrydata);
    //       });
    //   }, []);

    useEffect (()=>{
        dispatch(CountriesApi_FETCH)
      
    }, []); 

    useEffect(()=> {
        let countFilteredData = countriesAPI.filter((country) => {
            return (
              country.name.common
                .toLowerCase()
                .search(keyword.toLowerCase()) !== -1
            );
          });
      
          setFiltererData(countFilteredData);
    },[countriesAPI,keyword])

  return [filteredData];
}

export default useCountries