import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const Home: React.FC = () => {
  const {buttonText, text1, text2}  = useSelector((state: RootState) => state.languageSlice.items.page!.home)

  const [is, setIs] = React.useState(false)

  const colorChange = () => {
    setIs(true)
  }

  return (
    <>
      <div style={{marginTop: '100px'}}>
        {is ? 
          <div>
            <h1 style={{color: "red"}}>{text1} <br/> {text2}</h1> 
          </div>
          :
          <button onClick={() => colorChange()}>{buttonText}</button>
        }
      </div>
    </>
  )
}

export default Home