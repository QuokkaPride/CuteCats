import React from "react";
import ReactDOM from "react-dom";

const firstName = "Devon";
const lastName = "Saliga";

const typeName = "Type ur name";
const num = Math.floor(Math.random() * 100);

ReactDOM.render(
  <div>
    <div>
      <h1>Really Cute Hillsborough Cats</h1>
      <div>
        <img
          className="dog-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk2haK9amOerQ5qlrwkjH-ShjhlFcOMdDSTg&s"
        />
        <img className="dog-img" src="https://i.redd.it/yr6kz0imbvh01.jpg" />
        <img
          className="dog-img"
          src="https://assets.bonappetit.com/photos/5b3562ddcf44ad5053dc1c28/16:9/w_1920,c_limit/GettyImages-982509040.jpg"
        />
      </div>
    </div>
    <div>
      <h1 className="heading" contentEditable="false" spellCheck="false">
        Beepboop List
      </h1>
      <ul>
        <li>Back into Docker Image</li>
        <li>Express gratitude to team</li>
        <li>Respond to investors</li>
      </ul>
    </div>
    <div>
      <h2>
        <a className="urName" contentEditable="True">
          {typeName}
        </a>
        , your Lucky Number is {num}.
      </h2>
      <p>Cready by {firstName + " " + lastName}.</p>
      <p>Copyright {new Date().getFullYear()}</p>
    </div>
  </div>,
  document.getElementById("root")
);

//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
