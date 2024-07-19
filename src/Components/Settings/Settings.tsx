import React from 'react';
import classes from './Settings.module.scss'

import img from '../../static/user.png'
import MySelect from '../UI/Select/MySelect';

import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { setLanguage } from '../../redux/slices/languageSlice/languageSlice';
import { colorChange } from '../../utils/colorChange';

import { Context, storage } from '../../App';
import { TypeUserInfo } from '../../App';
import { saveUserInfo } from '../../utils/saveUserInfo';

type TypeSettingsProps = {
    state: boolean
    setState: (arg: boolean) => void
}

const Settings: React.FC<TypeSettingsProps> = ({ state, setState }) => {
    const dispatch = useAppDispatch()

    const [inputUserName, setInputUserName] = React.useState('')

    const [stateInput, setStateInput] = React.useState(false)
    let {stateUserName, setStateUserName, stateUserColor, setStateUserColor, stateTheme, setStateTheme,statelanguageID,setStatelanguageID} = React.useContext(Context)

    const { about,changeTheme } = useSelector((state: RootState) => state.languageSlice.items.components!.settings)
    const { errortext1, errortext2, errortext3, errortext4, errortext5, errortext6, errortext7 } = useSelector((state: RootState) => state.languageSlice.items!.massageError)
    const name = useSelector((state: RootState) => state.languageSlice.items.name)

    const massageError: string[] = [
        errortext1,
        errortext2,
        errortext3,
        errortext4,
        errortext5,
        errortext6,
        errortext7
    ];

    const randomShowMassage = () => {
        const randowIndex = Math.floor(Math.random() * massageError.length);
        return massageError[randowIndex]
    }

    const changeNameEnter = (event: any) => {
        if(event.code === 'Enter'){
            setStateUserName(event.target.value)
            
            storage.userName = event.target.value
            storage.userColor = stateUserColor
            storage.theme = stateTheme
            storage.languageID = statelanguageID
            storage.state = true

            saveUserInfo(storage)
            setStateInput(false)
        }
    }

    const changeUserColor = (event: any) => {
        setStateUserColor(event.target.value)
        
        storage.userName = stateUserName
        storage.userColor = event.target.value
        storage.theme = stateTheme
        storage.languageID = statelanguageID
        storage.state = true

        saveUserInfo(storage)
    }

    const functionChangeLanguage = (LaungId: string) => {
        dispatch(setLanguage(LaungId))
        setStatelanguageID(LaungId)

        storage.userName = stateUserName
        storage.userColor = stateUserColor
        storage.theme = stateTheme
        storage.languageID = LaungId
        storage.state = true

        saveUserInfo(storage)
    }

    const functionchangeTheme = () => {
        setStateTheme(!stateTheme)
        
        storage.userName = stateUserName
        storage.userColor = stateUserColor
        storage.theme = stateTheme
        storage.languageID = statelanguageID
        storage.state = true

        saveUserInfo(storage)

        colorChange() 
    }

    const setFuncState = () => {
        setState(false)
        setStateInput(false)
    }

    React.useEffect(() => {
        const {userName, userColor, languageID, theme}: TypeUserInfo = JSON.parse(window.localStorage.getItem('tools') || "{}")

        setStateUserName(userName)
        setStatelanguageID(languageID)
        dispatch(setLanguage(languageID))
        setStateUserColor(userColor)
        setStateTheme(!theme)

        if(theme){
            colorChange()
        }
    }, [])

    return (
        <>
        {state === true &&
            <div className={classes.background} onClick={() => setFuncState()}>
                <div className={classes.window} onClick={event => event.stopPropagation()}>
                    <div className={classes.content}>
                        <div className={classes.profile}>
                            <div className={classes.profile__button} style={{backgroundColor: stateUserColor}}>
                                <img src={img}/>
                            </div>

                            <div className={classes.name}>
                                <p>{stateUserName}</p>
                            </div>
                        </div>

                        <div className={classes.settings}>
                        <hr/>
                            <div className={classes.account}>
                                {stateInput ?
                                    <div className={classes.input}>
                                        <input 
                                            value={inputUserName}
                                            onChange={(event) => setInputUserName(event.target.value)}
                                            onKeyDown={(event) => changeNameEnter(event)}
                                            type='text' 
                                            placeholder='Сменить имя'
                                        />
                                    </div>
                                    :
                                    <>
                                        <button onClick={() => setStateInput(true)}>Cменить имя</button>
                                    </>
                                }

                                <div className={classes.input}>
                                    <input id='color' type='color' value={stateUserColor} onChange={(event) => changeUserColor(event)}/>
                                </div>
                            </div>
                            <hr/>
                            <div className={classes.date}>
                                <button onClick={functionchangeTheme}>{changeTheme}</button>
                                <MySelect 
                                    defaultValue={name}
                                    value={name}

                                    options={[
                                        {name: "Русский", value: "0"},
                                        {name: "English", value: "1"},
                                    ]}

                                    setSelect={functionChangeLanguage}
                                ></MySelect>
                            </div>
                            <hr/>
                            <div>
                                <button onClick={() => alert(randomShowMassage())}>{about}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    );
};

export default Settings;