import React from 'react'
import MyWindow from '../../Components/UI/ModalWindow/MyWindow'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

export default function SpeedTest() {
    const {againFroze, clickText, clickSec, clickSpeed, dialed, grade, quantity, sec, timeText, youGrade} = useSelector((state: RootState) => state.languageSlice.items.page!.speedTest)

    let stateRef = React.useRef('passive')
    const limit = 5
    let aRef = React.useRef(0)
    let bRef = React.useRef(0)

    const [time, setTime] = React.useState(0)
    const [click, setClick] = React.useState(0)
    const [result, setResult] = React.useState(0)

    const [isWindow, setIsWindow] = React.useState(false)

    const startTest = React.useCallback(() => {
        const state = stateRef.current

        if(state === 'active'){
            setClick(bRef.current = bRef.current + 1)
        }

        if(state === 'passive'){
            stateRef.current = 'active'

            const timer = window.setInterval(() => {
                setTime(aRef.current = aRef.current + 1)

                if(aRef.current === limit){
                    clearInterval(timer)
                    stateRef.current = 'stop'

                    setResult(bRef.current / aRef.current)
                    
                    setIsWindow(true)
                }
            }, 1000)
        }
    }, [])

    const resetTime = () => {
        stateRef.current = 'passive'
        
        setClick(bRef.current = 0)
        setTime(aRef.current = 0)

        setIsWindow(false)
    }
    const definitionOfYou = () => {
        if (result <= 4){
            return grade.turtle;

        }if (result >= 5 && result <= 6) {
            return grade.deer;

        }if (result >= 7 && result <= 9) {
            return grade.tiger

        }if (result >= 10 && result <= 12){
            return grade.wolf;

        }if (result >= 13 && result <= 20){
            return grade.racingCar

        }else {
            return grade.cheat
        }
    }

  return (
    <div>
        <MyWindow isWindow={isWindow}>
            <div>
                <h1>{clickSpeed}: {result} {clickSec}</h1>
                <h2>{dialed} {bRef.current} {clickText} {aRef.current} {sec}</h2>

                <h1 style={{display:'block', textAlign: 'unset', marginTop: '30px', fontSize: '50px', }}>{youGrade}: {definitionOfYou().toUpperCase()}</h1>

                <button 
                    onClick={resetTime}
                    className='styleButton'
                >{againFroze}</button>
            </div>
        </MyWindow>

        <div className='blockTimeCount'>
            <div>
                <h1>{quantity}: {click}</h1> <h1>/</h1> <h1>{timeText}: {time}</h1>
            </div>
        </div>

        <button
            onClick={startTest}
            className='buttonClick'
        >CLICK
        </button>
    </div>
  )
}