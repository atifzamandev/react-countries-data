import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import CountriesApiReducer from "./reducer/CountriesApiReducer";

import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(combineReducers({
    countriesReducer: CountriesApiReducer
}), {},

composeWithDevTools(applyMiddleware(...[thunk]))

);

export default store;