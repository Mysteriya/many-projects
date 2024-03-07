import React from 'react';
import MySelect from '../Components/UI/Select/MySelect';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setLanguage } from '../redux/slices/languageSlice/languageSlice';
import Mybutton from '../Components/UI/Button/Mybutton';
import { Link } from 'react-router-dom';

const InitialWindow = () => {
    const name = useSelector((state: RootState) => state.languageSlice.items.name)
    const { done } = useSelector((state: RootState) => state.languageSlice.items.page!.initialWindow)
    const dispatch = useDispatch()

    const functionChangeLanguage = (id: string) => {
        dispatch(setLanguage(id))
    }

    return (
        <div className='initial__window'>
            <MySelect 
                defaultValue={name} 
                value={name}

                options={[
                    {name: "Русский", value: "0"},
                    {name: "English", value: "1"},
                ]}

                setSelect={functionChangeLanguage}
            ></MySelect>

            <input type='text'/>

           <Link to={'/going'}>
                <Mybutton>{done}</Mybutton>
           </Link>
        </div>
    );
};

export default InitialWindow