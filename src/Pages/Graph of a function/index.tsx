import React from 'react'

type TypePoint = {
  x: number;
  y: number;
  state: string;
}

const pointPositive = {
  x: 0.0,
  y: 0.0,
  state: "positive",
};
const pointNegative = {
  x: 0.0,
  y: 0.0,
  state: "negative",
};

export default function GraphOfFunction() {
  const [input, setInput] = React.useState<string>('')
  const appRef = React.useRef<HTMLDivElement>(null)

  const[errorText, setErrorText] = React.useState<string>('Ошибок нету');

  const [state, setState]= React.useState<boolean>(true);
  const arrayPints: TypePoint[] = []

  function createPointOnArea(x: number, y: number) {
    const elem = document.createElement("div");
    elem.classList.add("point");

    elem.style.left = x + "px";
    elem.style.bottom = y + "px";

    appRef.current?.append(elem)
  }

  function countExpression(X: number, state: string) {
    const string = input.toLocaleUpperCase()
    const Y = eval(string);

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

  function main(){
    setState(true)
    let state = false

    for(let i = 0; i <= (150 + 1); i++){
      state = !state

      if(state){
        pushArray(pointPositive.x, pointPositive.y, pointPositive.state)
      }else{
        pushArray(pointNegative.x, pointNegative.y, pointNegative.state)
      }
    }

    arrayPints.forEach(( elem: TypePoint ) =>
      createPointOnArea(elem.x, elem.y)
    )    
  }

  function pushArray (x: number, y: number, state: string){
    arrayPints.push({
      x: x,
      y: y,
      state: state,
    })

    countExpression(x, state)
  }

  const start = () => {
    if(input){
      try {
        main()
      } catch (_) {
        setErrorText('Вы неправильно заполнили поле...')
        setState(false)
      }
    }else{
      setErrorText('Вы не заполнили поле...')
      setState(false)
    }
  }

  return (
    <div className='graph_content'>
      <div className='window'>
        <div className='content__window'>
          <div className='control_block'>
          <div className='input'>
            <div>=</div>
            <input type='text' value={input} onChange={(event) => setInput(event.target.value)} placeholder='Введите выражение'/>
          </div>
          <p style={{color: state === true ? 'green' : 'red'}}>{errorText}</p>

            <button 
              className='button-graph'
              onClick={() => start()}
            >Построить график
            </button>
          </div>
        </div>
      </div>

      <div className="area">
        <div className="section"></div>
        <div className="section" ref={appRef}></div>
        <div className="section"></div>
        <div className="section"></div>
      </div>
    </div>
  )
}