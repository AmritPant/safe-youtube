import React, { useState } from "react";
import "./Form.css";

const Form = function () {
  const [curSearchValue, setSearchValue] = useState();

  const onChangeEventHandler = function (event) {
    setSearchValue(event.target.value);
  };

  const splitedArr = curSearchValue?.split(" ");
  const joinedStr = splitedArr?.join("+");

  window.addEventListener("keypress", function (event) {
    // Gaurd Clause
    if (event.key === "/") document.querySelector("input").focus();
  });

  return (
    <div className="form">
      <input
        type="text"
        className="form__input"
        placeholder="Type Youtube Search"
        onChange={onChangeEventHandler}
        autoFocus
      />
      <div className="btn-box">
        <a
          href={`https://youtube.com/results?search_query=${joinedStr}`}
          className="btn"
        >
          Search
        </a>
      </div>
    </div>
  );
};

export default Form;
