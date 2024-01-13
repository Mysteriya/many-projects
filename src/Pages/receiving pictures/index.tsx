import React from 'react'
import { Link } from 'react-router-dom'
import Mybutton from '../../Components/UI/Button/Mybutton'
import { useSelector } from 'react-redux'
import { fetchImages, itemsSliceImages, removeItem } from '../../redux/slices/imageSlice'
import { useAppDispatch } from '../../redux/store'

import { useInView } from 'react-intersection-observer'

export default function Images() {
  const dispatch = useAppDispatch()
  const { items } = useSelector(itemsSliceImages)

  const {ref, inView} = useInView({
    threshold: 0.5
  })

  const  deleteImage = (id: number) => {
    dispatch(removeItem(id))
  }

  const getItems = () => {
    dispatch(fetchImages())
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
              <div className='img' key={item.id} ref={ref}>
                {inView === true ? 
                  <>
                    <Link to={`/img/${item.id}`}>
                      <img src={item.url}/>
                    </Link>

                    <button onClick={() => deleteImage(item.id)}>Удалить картинку</button>
                  </>
                  :
                  <>
                    <h2>Загрузка...</h2>
                  </>
                }
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}