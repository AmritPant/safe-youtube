import React, { useState } from "react";
import Btn from "./Btn";
import "./Form.css";

const Form = function () {
  const [curSearchValue, setSearchValue] = useState();

  const onChangeEventHandler = function (event) {
    setSearchValue(event.target.value);
  };

  return (
    <div className="form">
      <input
        type="text"
        className="form__input"
        placeholder="Type Youtube Search"
        autoFocus
        onChange={onChangeEventHandler}
      />
      <Btn searchValue={curSearchValue} />
    </div>
  );
};

export default Form;
