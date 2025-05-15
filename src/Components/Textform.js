import React, { useState } from "react";
export default function Textform(props) {
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleDownClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const handleClearClick = () => {
    let newtext = "";
    setText(newtext);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container mb-3"
        id="myBox"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <textarea
          style={{
            backgroundColor: props.mode === "light" ? "grey" : "white",
            color: props.mode === "dark" ? "#042743" : "white",
          }}
          className="form-control"
          id="exampleFormControlTextarea1 "
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <button className=" btn btn-primary my-3" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className=" btn btn-primary my-3 mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button
          className=" btn btn-primary my-3 mx-2"
          onClick={handleDownClick}
        >
          Convert to LowerCase
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters in your
          text
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read this Text</p>
        <h2>Preview Text</h2>
        <p>{text.length > 0 ? text : "Enter your text above for preview"}</p>
      </div>
    </>
  );
}
