import React from 'react'
import { Link } from 'react-router-dom'
import Mybutton from '../../Components/UI/Button/Mybutton'
import { useSelector } from 'react-redux'
import { fetchImages, itemsSliceImages, removeItem } from '../../redux/slices/imageSlice'
import { useAppDispatch } from '../../redux/store'

function Images() {

  const dispatch = useAppDispatch()

  const { items } = useSelector(itemsSliceImages)

  const getItems = () => {
    dispatch(fetchImages())
  }

  function deleteImage(id: number){
    dispatch(removeItem(id))
  }
  
  return (
    <div className='content'>
      
      <div className='content-block'>
        <div className='block'>
          <Mybutton onClick={() => getItems()}>Получить все картинки</Mybutton>
        </div>

        <div className='image'>  
          {
            items.map((item: any) =>
              <div className='img' key={item.id}>
                <Link to={`/img/${item.id}`}>
                  <img src={item.url}/>
                </Link>

                <button onClick={() => deleteImage(item.id)}>Удалить картинку</button>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Images