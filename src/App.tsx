import React from "react";
import { Route, Routes } from "../node_modules/react-router/dist/index";

import Images from "./Pages/getImg/Images";
import FullImage from "./Pages/getImg/FullImage";
import TodoList from "./Pages/todoList/TodoList";
import TodoFull from "./Pages/todoList/TodoFull";
import Calculate from "./Pages/calculate/Calculate";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import SpeedTest from "./Pages/SpeedTest/SpeedTest";

const App:React.FC = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/" element={<Header/>}>

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
      </Route>
    </Routes>
  );
}

export default App;
