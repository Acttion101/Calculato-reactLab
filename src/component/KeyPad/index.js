import React, { useState } from "react";
import Result from "../Result";

function KeyPad(onClick, children) {
  const [fristNumumber, setfristNumumber] = useState("");
  const [SecondNumber, setSecindNumumber] = useState("");
  const [operators, setOperators] = useState("");

  const readNumber = (number) => {
    setfristNumumber(fristNumumber + number);
  };
  const handleClickOperators = (operatorsButton) => {
    setOperators(operatorsButton);
    setSecindNumumber(fristNumumber);
    setfristNumumber(" ");
  };
  const handleClearClick = () => setfristNumumber("");
  return (
    <>
      <div>
        <div>&nbsp;{fristNumumber}&nbsp;</div>
      </div>

      <div>
        <button onClick={() => readNumber("1")}>1</button>
        <button onClick={() => readNumber("2")}>2</button>
        <button onClick={() => readNumber("3")}>3</button>
        <button onClick={() => handleClickOperators("+")}>+</button>
      </div>
      <div>
        <button onClick={() => readNumber("4")}>4</button>
        <button onClick={() => readNumber("5")}>5</button>
        <button onClick={() => readNumber("6")}>6</button>
        <button onClick={() => handleClickOperators("-")}>-</button>
      </div>
      <div>
        <button onClick={() => readNumber("7")}>7</button>
        <button onClick={() => readNumber("8")}>8</button>
        <button onClick={() => readNumber("9")}>9</button>
        <button onClick={() => handleClickOperators("*")}>*</button>
      </div>
      <div>
        <button
          onClick={() =>
            Result(setfristNumumber, fristNumumber, operators, SecondNumber)
          }
        >
          =
        </button>
        <button onClick={() => readNumber("0")}>0</button>
        <button onClick={handleClearClick}>C</button>
        <button onClick={() => handleClickOperators("/")}>/</button>
      </div>
    </>
  );
}
export default KeyPad;
