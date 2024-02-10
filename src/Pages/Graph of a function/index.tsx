import React from 'react'

const pointPositive = {
  x: 0,
  y: 0,
  state: "positive",
};
const pointNegative = {
  x: 0,
  y: 0,
  state: "negative",
};

export default function GraphOfFunction() {
  const appRef = React.useRef<HTMLDivElement>(null)

  function createPointOnArea(x: number, y: number, state: string) {
    const elem = document.createElement("div");
    elem.classList.add("point");

    elem.style.left = x + "px";
    elem.style.bottom = y + "px";

    appRef.current?.append(elem)

    countExpression(x, state);
  }

  function countExpression(X: number, state: string) {
    let Y = Math.acos(X);

    if (state === "positive") {
      X = X += 1;

      pointPositive.x = X;
      pointPositive.y = Y;
    } else {
      X = X -= 1;

      pointNegative.x = X;
      pointNegative.y = Y;
    }

    return Y;
  }

  const start = () => {
    positivePath()
    negativePath()
  }

  const positivePath = () => {
    setInterval(() => {
      createPointOnArea(pointPositive.x, pointPositive.y, pointPositive.state);
    }, 50);
  };
  const negativePath = () => {
    setInterval(() => {
      createPointOnArea(pointNegative.x, pointNegative.y, pointNegative.state);
    }, 50);
  };
  

  return (
    <div>
      <button 
        className='button-graph'
        onClick={() => start()}
      >Построить график
      </button>

        <div className="area">
          <div className="section"></div>
          <div className="section" ref={appRef}></div>
          <div className="section"></div>
          <div className="section"></div>
        </div>
    </div>
  )
}