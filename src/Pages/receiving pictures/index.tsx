import React from 'react'
import Mybutton from '../../Components/UI/Button/Mybutton'
import { useSelector } from 'react-redux'
import { fetchImages } from '../../redux/slices//imageSlice/imageSlice'
import { RootState, useAppDispatch } from '../../redux/store'
import Image from './Image'
import { TypeImageState } from '../../redux/slices/imageSlice/type'
import MyWindow from '../../Components/UI/ModalWindow/MyWindow'

export default function Images() {
  const dispatch = useAppDispatch()
  const items = useSelector((state: RootState) => state.imageSlice.items)
  
  const {buttonText1} = useSelector((state: RootState) => state.languageSlice.items.page!.receivingPictures)

  const getItems = () => {
    dispatch(fetchImages())
  }

  return (
    <div className='image__content'>
      <div className='content_block'>
        <MyWindow position='fixed' top={0} left={0} background='rgb(48, 48, 48)' width={"23vw"} height={"100vh"} isWindow>
          <div className='block'>
            <Mybutton onClick={() => getItems()}>{buttonText1}</Mybutton>
          </div>
        </MyWindow>
        <div className='image'>  
          {items.map((item: TypeImageState) =>
            <Image id={item.id} url={item.url} key={item.id}/>
          )}
        </div>
      </div>
    </div>
  )
}