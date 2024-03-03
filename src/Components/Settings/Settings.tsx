import React from 'react';
import classes from './Settings.module.scss'
import img  from '../../static/f16a0d86a5711bcc36aa8c59b9ab6ffd.png'
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { setLanguage } from '../../redux/slices/languageSlice/languageSlice';
import MySelect from '../UI/Select/MySelect';
import { colorChange } from '../../utils/colorChange';

type TypeSettingsProps = {
    state: boolean
    setState: (arg: boolean) => void
}

const Settings: React.FC<TypeSettingsProps> = ({ state, setState}) => {
    const [stateInput, setStateInput] = React.useState(false)
    const [input, setInput] = React.useState('')

    const [userName, setUserName] = React.useState('name')

    const {
        about, 
        accauntSettings, 
        changeAccount, 
        changeTheme, 
        confidentiality, 
        controlDate, 
        exit, 
        referenceMaterial, 
        settings
    } = useSelector((state: RootState) => state.languageSlice.items.components!.settings)
    const name = useSelector((state: RootState) => state.languageSlice.items.name)
    const { errortext1, errortext2, errortext3, errortext4, errortext5, errortext6, errortext7 } = useSelector((state: RootState) => state.languageSlice.items.massageError)

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

    const changeName = (event: any) => {
        if(event.code === 'Enter'){
            setUserName(input)
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
                            <img src={img}/>
                            <div>
                                <p>{userName}</p>
                            </div>
                        </div>

                        <div className={classes.settings}>
                        <hr/>
                            <div className={classes.account}>
                                <button onClick={() => alert(randomShowMassage())}>{changeAccount}</button>
                                <button onClick={() => alert(randomShowMassage())}>{accauntSettings}</button>
                                {stateInput ?
                                    <div className={classes.input}>
                                        <input 
                                            value={input}
                                            onChange={(event) => setInput(event.target.value)}
                                            onKeyDown={(event) => changeName(event)}
                                            type='text' 
                                            placeholder='Сменить имя'
                                        />
                                    </div>
                                    :
                                    <>
                                        <button onClick={() => setStateInput(true)}>Cменить имя</button>
                                    </>
                                }
                                <button 
                                    className={classes.exit} 
                                    onClick={() => alert(randomShowMassage())}
                                >{exit}</button>
                            </div>
                            <hr/>
                            <div className={classes.date}>
                                <button onClick={() => alert(randomShowMassage())}>{controlDate}</button>
                                <button onClick={() => alert(randomShowMassage())}>{confidentiality}</button>
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
                            <div className={classes.setting}>
                                <button onClick={() => alert(randomShowMassage())}>{settings}</button>
                            </div>
                            <hr/>
                            <div>
                                <button onClick={() => alert(randomShowMassage())}>{about}</button>
                                <button onClick={() => alert(randomShowMassage())}>{referenceMaterial}</button>
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