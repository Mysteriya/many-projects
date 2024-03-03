import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const Home: React.FC = () => {
  const {buttonText, text1, text2}  = useSelector((state: RootState) => state.languageSlice.items.page!.home)

  const [img, setImg] = React.useState<any>({})

  const [is, setIs] = React.useState<any>(false)

  const colorChange = () => {
    setIs(true)
  }

  function getFileSelected(event: any) {
    let selectedFile = event.target.files[0];

    setImg(selectedFile)

    return selectedFile;
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
        <div>
          {img.name}
        </div>


        <input type="file" name="photo" multiple accept="image/*,image/jpeg" onChange={(event) => getFileSelected(event)}/>
      </div>
    </>
  )
}

export default Home