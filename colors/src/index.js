import React from "react";
import {render} from "react-dom";
import AddColorForm from "./AddColorForm";

window.React = React;
render(
    <AddColorForm/>,
    document.getElementById("react-container")
);