import "./styles.css";

import Button from "../Button/Button";

interface CounterProps {
  count: number;
  onPlus: () => void;
  onMinus: () => void;
}

function Counter({count, onPlus, onMinus}: CounterProps) {
  return (
    <div className="counter-wrapper">
      <div className="button-control">
        <Button name="-" onClick={onMinus} />
      </div>
      <p className="count">{count}</p>
      <div className="button-control">
        <Button name="+" onClick={onPlus} />
      </div>
      {/* Пример работы со стейтом */}
      {/* <button onClick={addAnimal}>Set Animal</button>
      <button onClick={changeUserName}>Change user name</button> */}
    </div>
  );
}

export default Counter;