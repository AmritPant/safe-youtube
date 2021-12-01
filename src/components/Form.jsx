import React, { useState } from "react";
import Btn from "./Btn";
import "./Form.css";

const Form = function () {
  const [curSearchValue, setSearchValue] = useState();

  const splitedArr = curSearchValue?.split(" ");
  const joinedStr = splitedArr?.join("+");

  const onChangeEventHandler = function (event) {
    setSearchValue(event.target.value);
  };

  const inputKeyPressHandler = (event) => {
    if (event.key === "Enter")
      window.open(`https://youtube.com/results?search_query=${joinedStr}`);
  };

  return (
    <div className="form">
      <input
        type="text"
        className="form__input"
        placeholder="Type Youtube Search"
        autoFocus
        onChange={onChangeEventHandler}
        onKeyDown={inputKeyPressHandler}
      />
      <Btn searchValue={curSearchValue} />
    </div>
  );
};

export default Form;
