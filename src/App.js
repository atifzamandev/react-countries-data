import Home from "./components/Home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryDetails from "./components/Details/CountryDetails";


function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/detail/:name" element={<CountryDetails />} /> 
      </Routes>
    </BrowserRouter>
    

  );
}

export default App;
