// import logo from './logo.svg';
import './App.css';
import Navbar from './MyComponents/navbar';
import TextForm from './MyComponents/TextForm';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import { Routes } from 'react-router-dom';
import { About } from './MyComponents/About';


function App() {
  return (
    <>
  
        <Navbar title="Text-Easy" />
        <div className="container">
        <TextForm />
        </div>
      
        {/* <div className="container">
          
          <Routes>
            <Route exact path='/about' element={<About />} />
            <Route exact path='/' element={<TextForm />} />
          </Routes>
        </div>
      </Router> */}

    </>

  );
}

export default App;
