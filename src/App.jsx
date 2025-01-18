import React from "react";
import  {Home} from "./components/Home";
import Navbar from './components/Navbar';
import {ThemeContext, ThemeProvider} from "./context/ThemeContext"
import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About"

function App() {
  // const theme = useContext(ThemeContext);
  return (
    <>
    <ThemeProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/experience' element={<Experience/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>


      {/* <ThemeProvider>
      
      <Navbar theme ={theme}/>
      <Home/>
      
      </ThemeProvider> */}
    </>
  );
}

export default App;
