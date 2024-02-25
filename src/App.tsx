import React from "react";
import { Route, Routes } from "../node_modules/react-router/dist/index";

import Images from "./Pages/receiving pictures/index";
import FullImage from "./Pages/receiving pictures/FullImage";
import TodoList from "./Pages/todoList/index";
import TodoFull from "./Pages/todoList/TodoFull";
import Calculate from "./Pages/Сalculator/index";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Converter from "./Pages/Currency Converter/index";
import GraphOfFunction from "./Pages/Graph of a function/index";
import SpeedTest from "./Pages/SpeedTest";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Header/>}>
      <Route path="/home" element={<Home/>}/>

        <>
          <Route path="/img" element={<Images />} />
          <Route path="/img/:id" element={<FullImage />} />
        </>

        <>
          <Route path="/todos" element={<TodoList />} />
          <Route path="/todos/:id" element={<TodoFull />} />
        </>

        <>
          <Route path="/calc" element={<Calculate />} />
        </>
        
        <>
          <Route path="/click" element={<SpeedTest/>}/>
        </>

        <>
          <Route path="/convert" element={<Converter/>}/>
        </>

        <>
          <Route path="/graphOfFunction" element={<GraphOfFunction/>}/>
        </>
      </Route>
    </Routes>
  );
}

export default App;
