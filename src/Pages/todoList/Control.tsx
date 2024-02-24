import React from 'react'
import { addNewTodo, filterItems, searchItem } from '../../redux/slices/todoSlice/todoSlice'
import MySelect from '../../Components/UI/Select/MySelect'
import { RootState, useAppDispatch } from '../../redux/store'
import { useSelector } from 'react-redux'

type TypeValueProps = {
    title: string,
    body: string
}

interface IControlProps {
    selectedItems: string, 
    value: {
        title: string,
        body: string,
    }, 

    setValue: (text: TypeValueProps) => void
    setSelecteditems: (text: string) => void
}


const Control:React.FC<IControlProps> = ({ selectedItems, setSelecteditems, value, setValue }) => {
    const dispatch = useAppDispatch()
    const {addTask, inputDescription, inputName, lineSearch, typeSortText, typeSortDescriptionText, typeSortNameText} = useSelector((state: RootState) => state.languageSlice.items.page!.todoList.control)

    const [ searchValue, setSearchValue ] = React.useState('')

    const isMounted = React.useRef(false)

    const addNewTodos = () => {
        if(value.title && value.body){
            const params = {    
                id: Date.now(),
                title: value.title,
                body: value.body,
                userId: Date.now(),
            }
    
            dispatch(addNewTodo(params))
    
            setValue({title: '', body: ''})
        }
    }

    React.useEffect(() => {
        if(isMounted.current){
            dispatch(searchItem(searchValue))
        }

        isMounted.current = true
    }, [searchValue])
    

    const sortItems = (sort: string) => {         
        setSelecteditems(sort)

        dispatch(filterItems(sort))
    }

  return (
    <div className='control-block'>
        <div className='todo-input'>
            <div className='todo-col'>
                <p>{inputName}</p>
                <input 
                    value={value.title}
                    onChange={(event) => setValue({...value, title: event.target.value})}

                    type='text'
                />
            </div>

            <div className='todo-col'>
                <p>{inputDescription}</p>
                <input
                    value={value.body}
                    onChange={(event) => setValue({...value, body: event.target.value})}

                    type='text'
                />
            </div>

            <button
                className='todo-button'
                onClick={() => addNewTodos()}
            >
                {addTask}
            </button>
        </div>

        <div className='search-block'>
            <input 
                value={searchValue}
                onChange={event => setSearchValue(event.target.value)}

                placeholder={lineSearch}

                type='text'
            />
        </div>

        <div className='selected-block'>
            <MySelect
                defaultValue={typeSortText}

                options={[
                    {name: typeSortDescriptionText, value: 'title'},
                    {name: typeSortNameText, value: 'body'}
                ]}

                setSelect={sortItems}
                value={selectedItems}
            />
        </div>
    </div>
  )
}

export default Control