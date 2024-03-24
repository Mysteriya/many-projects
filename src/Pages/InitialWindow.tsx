import React from 'react';
import MySelect from '../Components/UI/Select/MySelect';
import img from '../static/user.png'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setLanguage } from '../redux/slices/languageSlice/languageSlice';
import Mybutton from '../Components/UI/Button/Mybutton';
import { Link, useNavigate } from 'react-router-dom';
import { Context, TypeUserInfo, storage } from '../App';
import { saveUserInfo } from '../utils/saveUserInfo';


const InitialWindow = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [inputUserName, setInputUserName] = React.useState('')

    let {stateUserColor} = React.useContext(Context);

    const { done, name } = useSelector((state: RootState) => state.languageSlice.items.page!.initialWindow)
    const laung = useSelector((state: RootState) => state.languageSlice.items.components!.settings.changeLanguage)

    const [mount, setMount] = React.useState(false)
    

    const functionChangeLanguage = (id: string) => {
        dispatch(setLanguage(id))
        storage.languageID = id

        saveUserInfo(storage)
    }

    const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputUserName(event.target.value)
        document.querySelector('.initial__input')?.classList.remove('error')
    }

    const nextPage = (event: any) => {
        if(inputUserName){
            storage.userName = inputUserName
            storage.state = true
            saveUserInfo(storage)
        }else{
            event.preventDefault();
            document.querySelector('.initial__input')?.classList.add('error')
        }
    }

    React.useEffect(() => {
        const local: TypeUserInfo = JSON.parse(window.localStorage.getItem('tools') || "{}")

        if(JSON.stringify(local) === '{}'){
            setMount(true)
            return
        } 
        if(JSON.stringify(local) !== '{}' && local.state === false ){
            setMount(true)
            return
        } 

        if(JSON.stringify(local) !== '{}' && local.state === true) {
            navigate("/going")
            return
        }
    }, [])

    if(mount){
        return (
            <div className='initial__window'>
                <div className='Initial__img' style={{backgroundColor: stateUserColor}}>
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
    }
};

export default InitialWindow