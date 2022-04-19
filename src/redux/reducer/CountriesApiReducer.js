import React from 'react'

const initialState = {
    countriesAPI: [],
}


const CountriesApiReducer = (state = initialState, action) => {

    switch (action.type) {
        case "CountriesApi_FETCH":
            return {
                ...state,
                countriesAPI: action.payload, 
            };
            default: 
                return {...state};
    }
    


};

export default CountriesApiReducer