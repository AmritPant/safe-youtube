import React, { useState } from "react";
import Btn from "./Btn";
import "./Form.css";

const Form = function () {
  const [curSearchValue, setSearchValue] = useState();
  const [curStatementValue, setStatementValue] = useState();

  const onChangeEventHandler = function (event) {
    setSearchValue(event.target.value);
  };

  const onChangeSentenceEventHandler = function (event) {
    setStatementValue(event.target.value);
  };

  return (
    <div className="form">
      <input
        type="text"
        className="form__input"
        placeholder="Type Youtube Search"
        onChange={onChangeEventHandler}
      />
      <p className="form__para">
        <em>
          Please retype the sentence 'This is for self-growth and knowledge'
        </em>
      </p>
      <input
        type="text"
        className="form__input form__input--extra"
        placeholder="Type Sentence Here"
        onChange={onChangeSentenceEventHandler}
      />
      {curStatementValue === "This is for self-growth and knowledge" && (
        <Btn searchValue={curSearchValue} />
      )}
    </div>
  );
};

export default Form;
