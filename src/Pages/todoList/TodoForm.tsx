import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import { getID, setCount } from '../../redux/slices/todoSlice/todoSlice'
import { RootState } from '../../redux/store'

type TypeTodoFormProps = {
  removeTodos: (id: number) => void
  number: number,

  item: {
    id: number,
    title: string
    body: string
  }

  setIsModalActive: (prop: boolean) => any
}

export const TodoForm: React.FC<TypeTodoFormProps> = ({number, item, removeTodos, setIsModalActive}) => {
  const dispatch = useDispatch()

  const {editNameAndDescription, removeTask} = useSelector((state: RootState) => state.languageSlice.items.page!.todoList.form)

  const openWindow = (item: number, index: number) => {
    setIsModalActive(true)

    const params = {
      item: item,
      index: index - 1
    }

    dispatch(getID(params))
  }

  return (
    <div className='todo-block'>
      <div className='name-block'>
          <strong>{number}.</strong>

          <Link to={`/todos/${item.id}`}>
            <p onClick={() => {dispatch(setCount(number))}}>{item.title}</p>
          </Link>
      </div>

    <div className='description-task'>
      <p className='text'>{item.body}</p>
    </div>

      <div className='todo-button'>
        <button onClick={() => openWindow(item.id, number)}>{editNameAndDescription}</button>
        <button onClick={() => removeTodos(item.id)}>{removeTask}</button>
      </div>
    </div>
  )
}