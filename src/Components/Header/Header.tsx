import React from "react";
import { Link, Outlet } from "react-router-dom";
import Mybutton from "./../UI/Button/Mybutton";

import img  from '../../static/user.png'
import Settings from "./../Settings/Settings";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import clss from './Header.module.scss'
import { Context } from "../../App";

interface IHeaderProps {
    theme?: boolean
}

type TypeButtonHader = {
    name: string,
    path: string
}

const Header:React.FC<IHeaderProps> = () => {
    const [stateProfile, setStateProfile] = React.useState(false)
    const [state, setState] = React.useState(true)

    const {hide,show} = useSelector((state: RootState) => state.languageSlice.items.components!.text)
    const {backMainPage, calculator, converterCurrently, graphOfFunction, receivingPictures, speedClickTest, taskList} = useSelector((state: RootState) => state.languageSlice.items.components!.header)

    const {stateUserColor} = React.useContext(Context)

    const button: TypeButtonHader[] = [
        {name: receivingPictures, path: '/going/img'},
        {name: taskList, path: '/going/todos'},
        {name: speedClickTest, path: '/going/click'},
        {name: calculator, path: '/going/calc'},
        {name: converterCurrently, path: '/going/convert'},
        {name: graphOfFunction, path: '/going/graphOfFunction'},
    ]

  return (
    <>
        {   state ?

        <div className={clss.Header}>
            <div className={clss.Header__content}>
                <div className={clss.Button_Block}>
                    <div className={clss.showen}>
                        <p onClick={() => setState(false)}>{hide}</p>
                    </div>

                    <div className={clss.buttonButton__Main}>
                        <Link to={'/going/home'}>
                            <Mybutton>{backMainPage}</Mybutton>
                        </Link>
                    </div>
                    
                    <div className={clss.page__buttons}>
                        {button.map((elem: TypeButtonHader) => 
                            <div className={clss.button} key={elem.name}>
                                <Link to={elem.path}>
                                    <Mybutton>{elem.name}</Mybutton>
                                </Link> 
                            </div>     
                        )}
                    </div>

                    <div 
                        className={clss.profile__button}
                        style={{backgroundColor: stateUserColor}}
                    >
                        <img  
                            onClick={() => setStateProfile(true)}
                            src={img}
                        />

                        <Settings state={stateProfile} setState={setStateProfile}/>
                    </div>
                </div>   
            </div>         
        </div>

        :

        <div className={clss.hidden}>
            <p onClick={() => setState(true)}>{show}</p>
        </div>
        
        }

        <Outlet/>
    </>
  );
}

export default Header;