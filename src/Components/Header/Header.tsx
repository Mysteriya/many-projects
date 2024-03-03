import React from "react";
import { Link, Outlet } from "react-router-dom";
import Mybutton from "./../UI/Button/Mybutton";

import img  from '../../static/f16a0d86a5711bcc36aa8c59b9ab6ffd.png'
import Settings from "./../Settings/Settings";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import clss from './Header.module.scss'

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
        {   state ?

        <div className={clss.Header}>
            <div className={clss.Header__content}>
                <div className={clss.Button_Block}>
                    <div className={clss.showen}>
                        <p onClick={() => setState(false)}>скрыть</p>
                    </div>

                    <div className={clss.buttonButton__Main}>
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

                    <div className={clss.profile__button}>
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
            <p onClick={() => setState(true)}>Показать</p>
        </div>
        
        }

        <Outlet/>
    </>
  );
}

export default Header;