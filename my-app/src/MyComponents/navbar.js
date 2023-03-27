import React from 'react'
import { useState } from 'react'
import "./DarkMode.css";
import { Alertmsg } from './Alertmsg';
import { a } from 'react-router-dom';

const Navbar = (props) => {

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
    document.title = "T-U Dark-Mode"
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
    document.title = "T-U Light-Mode"
  };
  
  const storedTheme = localStorage.getItem("theme");
  const [theme2, setTheme2] = useState("light");
  const [fontchange,setFont]=useState("black")
const [Alert,setAlert] = useState(null)
const setAlertfun = (msg) =>{
  setAlert(msg);
  setTimeout(() => {
    setAlert(null)
  }, 2000);
  
}
  
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const defaultDark =
    storedTheme === "dark" || (storedTheme === null && prefersDark);
  if (defaultDark) {
    setDark();
  }
  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDark();
      setTheme2("dark")
      setAlertfun("Dark Mode has been Enable !!")
    } else {
      setLight();
      setTheme2("light")
      setAlertfun("Light Mode has been Enable !!")
    }
  };
const navset = {
  position:"relative" , top: "-9px"
}

  return (
    <div>
     <nav className= {`navbar navbar-expand-lg navbar-${storedTheme} bg-${storedTheme}`} >
  <div className="container-fluid"  >
    <a className="navbar-brand" href='/'>{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <a href="#" class="nav-link px-2 ">Home</a>
        </li>
        <li className="nav-item">
        <a href="#" class="nav-link px-2 ">About</a>
        </li>       
      </ul>
      <div className="toggle-theme-wrapper">
      <span  style={navset}>☀️</span>
      <label className="toggle-theme" htmlFor="checkbox">
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" id="checkbox" onChange={toggleTheme} defaultChecked={defaultDark} ></input> </div>
        <div className="slider round"></div>
      </label>
      <span style={navset}>🌒</span>
    </div>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
   
    <Alertmsg Alert = { Alert} />

    </div>
  )
}

export default Navbar
