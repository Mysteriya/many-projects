import React from "react";
import { Route, Routes, useNavigate } from "../node_modules/react-router/dist/index";

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
import { saveUserInfo } from "./utils/saveUserInfo";

export type TypeUserInfo = {
  userName: string;
  userColor: string;
  theme: boolean;
  languageID: string
  state: boolean
}

const value = {
  stateUserName: '',
  setStateUserName: (_arg: string) => {},

  stateUserColor: "#ffc4e1",
  setStateUserColor: (_arg: string) => {},

  stateTheme: false,
  setStateTheme: (_arg: boolean) => {},

  statelanguageID: "1",
  setStatelanguageID: (_arg: string) => {},
}

export const storage: TypeUserInfo = {
  userName: value.stateUserName,
  userColor: value.stateUserColor,
  theme: value.stateTheme,
  languageID: value.statelanguageID,
  state: false
}

export const Context = React.createContext(value)

const App: React.FC = () => {
  const navigate = useNavigate()

  const [stateUserName, setStateUserName] = React.useState<string>('')
  const [stateUserColor, setStateUserColor] = React.useState<string>('#ffc4e1')
  const [stateTheme, setStateTheme] = React.useState<boolean>(false) // true - dark false - white
  const [statelanguageID, setStatelanguageID] = React.useState<string>("1")

  const value = {
    stateUserName, 
    setStateUserName, 

    stateUserColor, 
    setStateUserColor,

    stateTheme,
    setStateTheme,

    statelanguageID,
    setStatelanguageID,
  }

  React.useEffect(() => {
    const local: TypeUserInfo = JSON.parse(window.localStorage.getItem('tools') || "{}")
    if(JSON.stringify(local) === '{}'){
      saveUserInfo(storage)
    }
    if(JSON.stringify(local) !== '{}' && local.state === true){
      navigate('/going')
    }
  }, [])
  return (
    <Context.Provider value={value}>
      <Routes>
        <Route path="/" element={<InitialWindow/>}/>

        <Route path="/going/" element={<Header/>}>
          <Route path="/going/home/" element={<Home/>}/>

          <Route path="/going/" element={<RootPage/>}>
              <Route path="/going/img" element={<Images />} />
              <Route path="/going/img/:id" element={<FullImage />} />

              <Route path="/going/todos" element={<TodoList />} />
              <Route path="/going/todos/:id" element={<TodoFull />} />

              <Route path="/going/calc" element={<Calculate />} />
            
              <Route path="/going/click" element={<SpeedTest/>}/>


              <Route path="/going/convert" element={<Converter/>}/>

            <Route path="/going/graphOfFunction" element={<GraphOfFunction/>}/>
          </Route>
        </Route>
      </Routes>
    </Context.Provider>
  );
}

export default App;