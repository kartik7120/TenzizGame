import Die from "./Die";
import React from "react";
const random = () => Math.floor(Math.random() * 6) + 1;

function genRandomdie() {
  const dieArray = [];
  for (let i = 0; i < 10; i++) {
    dieArray.push(random());
  }
  return dieArray;
}

function Main(props) {
  const [state, setState] = React.useState({
    value: genRandomdie(),
    isHeld: false,
  });
  function handleClick(e) {
    setState((oldState) => {
      return {
        ...oldState,
        value: genRandomdie(),
      };
    });
  }

  function handleIsHeld(e) {
    setState((oldState) => {
      return {
        ...oldState,
        isHeld: !oldState.isHeld,
      };
    });
  }

  return (
    <>
      <main>
        <div className="die--container" onClick={handleIsHeld}>
          {state.value.map((ele) => (
            <Die>{ele}</Die>
          ))}
        </div>
        <button className="rollup--button" type="button" onClick={handleClick}>
          Roll up
        </button>
      </main>
    </>
  );
}
export default Main;
