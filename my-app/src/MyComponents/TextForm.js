import React from "react";
import { useState } from "react";
import "./DarkMode.css";
import { Alertmsg } from "./Alertmsg";


const TextForm = () => {
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const [text, setText] = useState("");


  const [fontColor, setColor] = useState("black");
  const [Alert, setAlert] = useState(null)
  const setAlertfun = (msg) => {
    setAlert(msg);
    setTimeout(() => {
      setAlert(null)
    }, 2000);

  }



  const changeCase = () => {
    if (text == "") {
      alert("text area can not be empty");
      // setActive(active);
    }
    if (!active) {
      setText(text.toUpperCase());
      setAlertfun("Changed to UpperCase !")
    } else {
      setText(text.toLowerCase());
      setAlertfun("Changed to LowerCase !")
    }
    setActive(!active);
  };
  const changeFont = () => {
    if (text == "") {
      alert("text area can not be empty");
    }
    if (!active2) {
      setColor("red");
    } else {
      setColor("black");
    }
    setActive2(!active2);
  };
  const spacetextfun = () => {
    
   setText(text.split("  ").join(" "))
  
  }
  const cleartextfun = () => {
    setText("");
  }

  const Copytextfun = () => {
    if (text == "") {
      alert("text area can not be empty");
    }
    var textcopy = document.getElementById("exampleFormControlTextarea1")
    textcopy.select();
    navigator.clipboard.writeText(textcopy.value);
    setAlertfun("Copied the Text !")
  }


  const utterThis = new SpeechSynthesisUtterance()
  const synth = window.speechSynthesis
  let ourText = ""
  
  const checkBrowserCompatibility = () => {
    "speechSynthesis" in window
      ? console.log("Web Speech API supported!")
      : console.log("Web Speech API not supported :-(")
  }
  
  checkBrowserCompatibility()
  
  const listenNowfun = () => {
    if (text == "") {
      alert("text area can not be empty");
    }
    ourText = text;
    utterThis.text = ourText
    synth.speak(utterThis)

  }
  





  return (
    <>
      <div className="container">
        <h1>Enter to Analysis</h1>

      </div>
      <div>
        <Alertmsg Alert={Alert} />
        <div className="mb-3 p-3">
          {/* <label for="my-box" className="form-label">Text Here</label> */}
          <textarea
            className="form-control"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            style={{ color: fontColor, border: "1px solid black" }}
            placeholder={"Enter here.."}
            id="exampleFormControlTextarea1"
            rows="7"
          ></textarea>
        </div>
        <div className="container">
          <button
            type="button"
            id="btn-case"
            onClick={changeCase}
            className={active ? "btn btn-dark rounded-pill px-3" : "btn btn-primary rounded-pill px-3"}
          >
            Convert to {active ? "Lower" : "Upper"} case{" "}
          </button>

          <button
            type="button"
            id="btn-case"
            className="btn btn-danger rounded-pill px-3"
            onClick={changeFont}  >
            Change Font
          </button>
          <button type="button" onClick={spacetextfun} className="btn btn-info rounded-pill px-3">Remove-spaces</button>
          <button type="button" onClick={cleartextfun} className="btn btn-info rounded-pill px-3">Clear-Text</button>
          <button type="button" onClick={listenNowfun} className="btn btn-info rounded-pill px-3">Listen</button>

          <button type="button" onClick={Copytextfun} className="btn btn-info rounded-pill px-3">Copy-Text</button>



        </div>
      </div>
      <div className="container ">
        <h2>Summary</h2>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters{" "}
        </p>
        <p> Takes {(text.split(" ").length - 1) * 0.008} mintues to read </p>
      </div>

      <h2>Preview</h2>
      <div className="container-preview"  >
        <p> {text}</p>
      </div>

    </>
  );
};

export default TextForm;
