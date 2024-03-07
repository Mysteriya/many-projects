import React from 'react'

import Mybutton from '../../Components/UI/Button/Mybutton'

import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { itemsSliceTodos } from '../../redux/slices/todoSlice/todoSlice'
import { RootState } from '../../redux/store'

export const TodoFull: React.FC = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const { items, count } = useSelector(itemsSliceTodos)
    const {back, errorText, loading} = useSelector((state: RootState) => state.languageSlice.items.page!.todoList.full)

    const isMounted = React.useRef(false)

    const [ item, setItem ] = React.useState<{
        title: string,
        body: string,
    }>()

    React.useEffect(() => {
        if(isMounted.current){
            const json = JSON.stringify(items)

            localStorage.setItem('data', json)
        }

        isMounted.current = true
    }, [id])

    React.useEffect(() => {
        async function fetchTodos(){
            try{
                const result = JSON.parse(localStorage.getItem('data') || '')         
                const element = await result.find((elem: any) => elem.id === Number(id))

                setItem(element)
                
            }catch(error){
                alert(`${errorText}: ${error}`)
                navigate('/')
            }
        }

        fetchTodos()
    }, [id])

    if(!item){
        return(
            <div>{loading}</div>
        )
    }

  return (
    <div className='todo-full'>
        <Link to={'/going/todos/'}>
            <Mybutton>{back}</Mybutton>
        </Link>

        <div className='todo-blockFull'>

            <div className='name-block'>
                <strong>{count}.</strong>
            
                <p>{item.title}</p>

            </div>

            <p className='text'>{item.body}</p>
        </div>
    </div>
  )
}

export default TodoFull