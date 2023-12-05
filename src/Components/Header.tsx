import React from "react";
import { Link, Outlet } from "react-router-dom";

const Header:React.FC = () => {

    type TypeButtonArray = {
        name: string,
        path: string
    }


    const button: TypeButtonArray[] = [
        {name: 'Получить картинки', path: '/img'},
        {name: 'Список дел', path: '/todos'},
        {name: 'Калькулятор', path: '/calc'},
        {name: 'Скорость киков', path: '/click'},
        {name: 'Конвертер валют', path: '/convert'},
    ]

  return (
    <>
        <div className="Header">
            <div className="Button-Block">
                <div className="button_home">
                    <Link to={'/home'}>
                        <button>Вернуться на главную страницу</button>
                    </Link>
                </div>
                
                <div className="button_components">
                    {button.map((elem: TypeButtonArray) => 
                        <Link to={elem.path} key={elem.name}>
                            <button>{elem.name}</button>
                        </Link>      
                    )}
                </div>
            </div>
            
        </div>

        <Outlet/>
    </>
  );
}

export default Header;
