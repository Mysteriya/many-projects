import React from 'react'
import Header from '../Components/Header'

const Home: React.FC = () => {

  const [is, setIs] = React.useState(false)

  const colorChange = () => {
    setIs(true)
  }

  return (
    <>
      <Header/>
      {is && 
        <>
          <h1 style={{color: "red", marginTop: 15}}>Строянские кони на вашем устройстве</h1>
          <h1 style={{color: "red"}}>Я знаю, где ты живешь</h1>
        </>
      }
      <button onClick={() => colorChange()}>Запустить троянского коня</button>
    </>
  )
}

export default Home