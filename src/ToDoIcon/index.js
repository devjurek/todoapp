import { BiListCheck } from "react-icons/bi";
import { BiListMinus } from "react-icons/bi";
import "./ToDoIcon.css"

import React from "react";

const iconTypes = {
    "check": (color) => <BiListCheck className="Icon-svg" fill={color} />,
  "delete": (color) => <BiListMinus className="Icon-svg" fill={color} />,
};

function ToDoIcon({type, color, onClick}) {
    return (
        <span
          className={`Icon-container Icon-container-${type}`}
          onClick={onClick}
        >
          {iconTypes[type](color)}
        </span>
      )
    }

export {ToDoIcon};