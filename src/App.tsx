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

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Header/>}>
        <Route path="/home" element={<Home/>}/>

        <Route path="/" element={<RootPage/>}>
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
      </Route>
    </Routes>
  );
}

export default App;

