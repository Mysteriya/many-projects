import React from 'react';
import classes from './Settings.module.scss'

import img from '../../static/user.png'
import MySelect from '../UI/Select/MySelect';

import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { setLanguage } from '../../redux/slices/languageSlice/languageSlice';
import { colorChange } from '../../utils/colorChange';

import { Context } from '../../App';

type TypeSettingsProps = {
    state: boolean
    setState: (arg: boolean) => void
}

const Settings: React.FC<TypeSettingsProps> = ({ state, setState }) => {
    const [stateInput, setStateInput] = React.useState(false)
    const {inputUserName, setInpitUserName, userColor, setUserColor} = React.useContext(Context)

    const { about,changeTheme } = useSelector((state: RootState) => state.languageSlice.items.components!.settings)
    const { errortext1, errortext2, errortext3, errortext4, errortext5, errortext6, errortext7 } = useSelector((state: RootState) => state.languageSlice.items.massageError)
    const name = useSelector((state: RootState) => state.languageSlice.items.name)

    const dispatch = useAppDispatch()

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
            setInpitUserName(event.target.value)
            setStateInput(false)
        }
    }

    const functionChangeLanguage = (id: string) => {
        dispatch(setLanguage(id))
    }

    const setFuncState = () => {
        setState(false)
        setStateInput(false)
    } 

    return (
        <>
        {state === true &&
            <div className={classes.background} onClick={() => setFuncState()}>
                <div className={classes.window} onClick={event => event.stopPropagation()}>
                    <div className={classes.content}>
                        <div className={classes.profile}>
                            <div className={classes.profile__button} style={{backgroundColor: userColor}}>
                                <img src={img}/>
                            </div>

                            <div className={classes.name}>
                                <p>{inputUserName}</p>
                            </div>
                        </div>

                        <div className={classes.settings}>
                        <hr/>
                            <div className={classes.account}>
                                {stateInput ?
                                    <div className={classes.input}>
                                        <input 
                                            value={inputUserName}
                                            onChange={(event) => setInpitUserName(event.target.value)}
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
                                    <input id='color' type='color' value={userColor} onChange={(event) => setUserColor(event.target.value)}/>
                                </div>
                            </div>
                            <hr/>
                            <div className={classes.date}>
                                <button onClick={colorChange}>{changeTheme}</button>
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