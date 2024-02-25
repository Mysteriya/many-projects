import React from "react";
import { Link, Outlet } from "react-router-dom";
import Mybutton from "./UI/Button/Mybutton";

import img  from '../static/f16a0d86a5711bcc36aa8c59b9ab6ffd.png'
import Settings from "./Settings/Settings";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface IHeaderProps {
    theme?: boolean
}

type TypeButtonHader = {
    name: string,
    path: string
}

const Header:React.FC<IHeaderProps> = () => {
    const [state, setState] = React.useState(false)

    const {backMainPage, calculator, converterCurrently, graphOfFunction, receivingPictures, speedClickTest, taskList} = useSelector((state: RootState) => state.languageSlice.items.components!.header)


    const button: TypeButtonHader[] = [
        {name: receivingPictures, path: '/img'},
        {name: taskList, path: '/todos'},
        {name: speedClickTest, path: '/click'},
        {name: calculator, path: '/calc'},
        {name: converterCurrently, path: '/convert'},
        {name: graphOfFunction, path: '/graphOfFunction'},
    ]

  return (
    <>
        <div className="Header">
            <div className="Button-Block">
                <div className="buttonButton__Main">
                    <Link to={'/home'}>
                        <Mybutton>{backMainPage}</Mybutton>
                    </Link>
                </div>
                
                <div>
                    {button.map((elem: TypeButtonHader) => 
                        <Link to={elem.path} key={elem.name}>
                            <Mybutton>{elem.name}</Mybutton>
                        </Link>      
                    )}
                </div>

                <div className="profile__button">
                    <img  
                        onClick={() => setState(true)}
                        src={img}
                    />

                    <Settings state={state} setState={setState}/>
                </div>
            </div>            
        </div>

        <Outlet/>
    </>
  );
}

export default Header;