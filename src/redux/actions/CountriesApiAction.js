import axios from 'axios';

const CountriesApiAction = (dispatch) => {

    axios.get("https://restcountries.com/v3.1/all")
    .then((response)=> {
        //console.log(response.data)
        dispatch({
            type: "CountriesApi_FETCH",
            payload: response.data
        })
    })
          

};

export default CountriesApiAction