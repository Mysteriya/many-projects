import React from 'react';
import MySelect from '../Components/UI/Select/MySelect';
import img from '../static/user.png'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setLanguage } from '../redux/slices/languageSlice/languageSlice';
import Mybutton from '../Components/UI/Button/Mybutton';
import { Link } from 'react-router-dom';
import { Context } from '../App';

const InitialWindow = () => {
    const { done, name } = useSelector((state: RootState) => state.languageSlice.items.page!.initialWindow)
    const laung = useSelector((state: RootState) => state.languageSlice.items.components!.settings.changeLanguage)
    const {inputUserName, setInpitUserName} = React.useContext(Context)
    
    const dispatch = useDispatch()

    const functionChangeLanguage = (id: string) => {
        dispatch(setLanguage(id))
    }

    const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInpitUserName(event.target.value)
        document.querySelector('.initial__input')?.classList.remove('error')
    }

    const nextPage = (event: any) => {
        if(inputUserName){
            return
        }else{
            event.preventDefault();
            document.querySelector('.initial__input')?.classList.add('error')
        }
    }

    return (
        <div className='initial__window'>
            <div className='Initial__img'>
                <img src={img}/>
            </div>
            <div className='initial__settings'>
                <MySelect
                    defaultValue={laung}
                    value={laung}

                    options={[
                        {name: "Русский", value: "0"},
                        {name: "English", value: "1"},
                    ]}

                    setSelect={functionChangeLanguage}
                ></MySelect>

                <input value={inputUserName} onChange={(event) => changeInput(event)} type='text' placeholder={name} className='initial__input'/>

                <Link to={"/going"}>
                    <Mybutton onClick={(event) => nextPage(event)}>{done}</Mybutton>
                </Link>
            </div>
        </div>
    );
};

export default InitialWindow