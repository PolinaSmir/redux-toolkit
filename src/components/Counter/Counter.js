import React from "react";
import { connect } from "react-redux";
import { increment, decrement, setStep } from "../../store/slices/counterSlice";
import { setLang } from "../../store/slices/langSlice";
import CONSTANTS from "../../constants";

const {
  LANGUAGE: { EN_US, UA_UA, PL_PL, DE_DE },
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
  const {
    counter: { count, step },
    language,
    increment,
    decrement,
    setStep,
    setLang,
  } = props;
  console.log(props);

  const translation = translations.get(language);

  const { countText, stepText, incrementText, decrementText } = translation;

  return (
    <div>
      <select value={language} onChange={({ target: { value } }) => setLang(value)}>
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
        <input type="number" value={step} onChange={({ target: { value } }) => setStep(value)} />
      </label>
      {/* <p>
        {stepText}: {step}
      </p> */}
      <button onClick={() => increment()}>{incrementText}</button>
      <button onClick={() => decrement()}>{decrementText}</button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    counter: state.counter,
    language: state.lang,
  };
}

const mapDispatchToProps = {
  increment,
  decrement,
  setStep,
  setLang,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
