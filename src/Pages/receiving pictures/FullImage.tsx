import axios from 'axios'
import React from 'react'
import { useParams, useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import Mybutton from '../../Components/UI/Button/Mybutton'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'


export default function FullImage() {
  const {errorAlert, buttonBack, loading} = useSelector((state: RootState) => state.languageSlice.items.page!.receivingPictures)
  
  const [ item, setItem ] = React.useState<{
    title: string,
    url: string
  }[]>()

  const { id } = useParams()
  const navigate = useNavigate()

  React.useEffect(() => {
    async function fetchPizza(){
      try{
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/photos?id=' + id)
        setItem(data)

      }catch(error){
        console.log(error)
        alert({errorAlert})
        navigate('/')
      }
    }

    fetchPizza()
  }, [])

  if(!item){
    return <h1>{loading}</h1>
  }

  return (
    <div className='full'>
      <div>
        <img src={item[0].url}/>
        <h1>{item[0].title}</h1>
      </div>

      <Link to={'/img'}>
        <Mybutton>{buttonBack}</Mybutton>
      </Link>
    </div>
  )
}