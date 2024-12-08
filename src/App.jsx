
import Home from "./Pages/Home/Home";
import Login from"./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Upcoming from "./Pages/Upcoming/Upcoming";
import TodayPage from "./Pages/TodayPage/TodayPage";
import Calendary from "./Pages/Calendary/Calendary";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Layout from "./Pages/Layout";
import { Route, Routes } from "react-router";



function App() {
  return (
    <div className="App">
      <Routes> 
          <Route path="/login" element={<Login />} />  
          <Route path="/signup" element={<Register />} />  
        <Route element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path="/upcoming" element={<Upcoming />} /> 
          <Route path="/today" element={<TodayPage />} />  
        </Route>  
      </Routes> 
    </div>
  
  );
}

export default App;
