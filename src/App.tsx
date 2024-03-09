import React from "react";
import { Route, Routes } from "../node_modules/react-router/dist/index";

import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import RootPage from "./Pages/RootPage";
import Images from "./Pages/receiving pictures";
import Converter from "./Pages/Currency Converter";
import GraphOfFunction from "./Pages/Graph of a function";
import SpeedTest from "./Pages/SpeedTest";
import FullImage from "./Pages/receiving pictures/FullImage";
import TodoList from "./Pages/todoList";
import TodoFull from "./Pages/todoList/TodoFull";
import Calculate from "./Pages/Сalculator";
import InitialWindow from "./Pages/InitialWindow";

const value = {
  inputUserName: '',
  setInpitUserName: (_arg: string) => {},

  userColor: "#ffc4e1",
  setUserColor: (_arg: string) => {},
}

export const Context = React.createContext(value)

const App: React.FC = () => {
  const [inputUserName, setInpitUserName] = React.useState<string>('')
  const [userColor, setUserColor] = React.useState<string>('#ffc4e1')

  const value = {
    inputUserName, 
    setInpitUserName, 

    userColor, 
    setUserColor
  }

  return (
    <Context.Provider value={value}>
      <Routes>
        <>
          <Route path="/" element={<InitialWindow/>}/>
        </>

        <Route path="/going/" element={<Header/>}>
          <Route path="/going/home/" element={<Home/>}/>

          <Route path="/going/" element={<RootPage/>}>
            <>
              <Route path="/going/img" element={<Images />} />
              <Route path="/going/img/:id" element={<FullImage />} />
            </>

            <>
              <Route path="/going/todos" element={<TodoList />} />
              <Route path="/going/todos/:id" element={<TodoFull />} />
            </>

            <>
              <Route path="/going/calc" element={<Calculate />} />
            </>
            
            <>
              <Route path="/going/click" element={<SpeedTest/>}/>
            </>

            <>
              <Route path="/going/convert" element={<Converter/>}/>
            </>

            <>
              <Route path="/going/graphOfFunction" element={<GraphOfFunction/>}/>
            </>
          </Route>
        </Route>
      </Routes>
    </Context.Provider>
  );
}

export default App;