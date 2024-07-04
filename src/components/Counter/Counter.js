import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, setStep } from "../../store/slices/counterSlice";
import { setLang } from "../../store/slices/langSlice";
import CONSTANTS from "../../constants";
import styles from "./Counter.module.scss";
import cx from "classnames";
import { bindActionCreators } from "@reduxjs/toolkit";

const {
  LANGUAGE: { EN_US, UA_UA, PL_PL, DE_DE },
  THEMES,
} = CONSTANTS;

const translations = new Map([
  [
    EN_US,
    {
      countText: "Count",
      stepText: "Step",
      incrementText: "Increment",
      decrementText: "Decrement",
    },
  ],
  [
    UA_UA,
    {
      countText: "Значення лiчильнику",
      stepText: "Крок",
      incrementText: "Збiльшити",
      decrementText: "Зменшити",
    },
  ],
  [
    PL_PL,
    {
      countText: "Znaczenie licznika",
      stepText: "ustawic krok",
      incrementText: "zwiekzac",
      decrementText: "zmniejszac",
    },
  ],
  [
    DE_DE,
    {
      countText: "Zählen",
      stepText: "Schritt",
      incrementText: "Zuwachs",
      decrementText: "Dekrement",
    },
  ],
]);

const Counter = (props) => {
  const count = useSelector((state) => state.counter.count);
  const step = useSelector((state) => state.counter.step);
  const language = useSelector((state) => state.lang);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const actionCreators = bindActionCreators({ increment, decrement, setLang, setStep }, dispatch);

  const translation = translations.get(language);

  const { countText, stepText, incrementText, decrementText } = translation;

  const className = cx({
    [styles.darkTheme]: theme === THEMES.DARK,
    [styles.lightTheme]: theme === THEMES.LIGHT,
  });

  return (
    <div className={className}>
      <select value={language} onChange={({ target: { value } }) => actionCreators.setLang(value)}>
        <option value={EN_US}>English</option>
        <option value={UA_UA}>Ukrainian</option>
        <option value={DE_DE}>Deutsch</option>
        <option value={PL_PL}>Polish</option>
      </select>

      <p>
        {countText}: {count}
      </p>
      <label>
        {stepText}:
        <input type="number" value={step} onChange={({ target: { value } }) => actionCreators.setStep(value)} />
      </label>
      {/* <p>
        {stepText}: {step}
      </p> */}
      <button onClick={() => actionCreators.increment()}>{incrementText}</button>
      <button onClick={() => actionCreators.decrement()}>{decrementText}</button>
    </div>
  );
};

export default Counter;
