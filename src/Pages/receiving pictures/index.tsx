import React from 'react'
import Mybutton from '../../Components/UI/Button/Mybutton'
import { useSelector } from 'react-redux'
import { fetchImages } from '../../redux/slices//imageSlice/imageSlice'
import { RootState, useAppDispatch } from '../../redux/store'
import Image from './Image'
import { TypeImageState } from '../../redux/slices/imageSlice/type'

export default function Images() {
  const dispatch = useAppDispatch()
  const items = useSelector((state: RootState) => state.imageSlice.items)

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
          {items.map((item: TypeImageState) =>
            <Image id={item.id} url={item.url} key={item.id}/>
          )}
        </div>
      </div>
    </div>
  )
}