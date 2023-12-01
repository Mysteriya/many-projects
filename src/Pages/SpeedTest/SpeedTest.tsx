import React from 'react'
import MyWindow from '../../Components/UI/ModalWindow/MyWindow'

function SpeedTest() {

    let stateRef = React.useRef('passive')
    const limit = 5
    let aRef = React.useRef(0)
    let bRef = React.useRef(0)

    const [time, setTime] = React.useState(0)
    const [click, setClick] = React.useState(0)
    const [result, setResult] = React.useState(0)

    const [isModalActive, setIsModalActive] = React.useState(false)

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
                    
                    setIsModalActive(true)
                }
            }, 1000)
        }
    }, [])

    const resetTime = () => {
        stateRef.current = 'passive'
        
        setClick(bRef.current = 0)
        setTime(aRef.current = 0)

        setIsModalActive(false)
    }
    const definitionOfYou = () => {
        if (result <= 4){
            return "черепаха";

        }if (result >= 5 && result <= 6) {
            return "олень";

        }if (result >= 7 && result <= 9) {
            return "тигр";

        }if (result >= 10 && result <= 12){
            return "волчара";

        }if (result >= 13 && result <= 20){
            return "гоночный болид"

        }else {
            return "ТЫ ИГРАЕШЬ С ЧИТАМИ!!!!!!!!!!!"
        }
    }

  return (
    <div>
        <MyWindow setIsModalActive={setIsModalActive} isModalActive={isModalActive}>
            <h1>Ваша скорость клика: {result} клик/cек</h1>
            <h2>Вы сделали {bRef.current} кликов за {aRef.current} секунд</h2>

            <h1 style={{display:'block', textAlign: 'unset', marginTop: '30px', fontSize: '50px', }}>Ваш ранг {definitionOfYou().toUpperCase()}</h1>

            <button 
                onClick={resetTime}
                className='styleButton'
            >Провести повторный замер</button>
        </MyWindow>

        <div className='blockTimeCount'>
            <div>
                <h1>Кол.во кликов: {click}</h1> <h1>/</h1> <h1>Время: {time}</h1>
            </div>
        </div>

        <button
            onClick={startTest}
            className='buttonClick'
        >CLICK
        </button>
        
        Привет!
    </div>
  )
}

export default SpeedTest