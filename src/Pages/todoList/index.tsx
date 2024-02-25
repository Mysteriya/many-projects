import React from 'react'

import { TodoForm } from './TodoForm'

import { useSelector } from 'react-redux'
import { changeTodo, removeItems } from '../../redux/slices/todoSlice/todoSlice'

import { RootState, useAppDispatch } from '../../redux/store'

import Control from './Control'
import MyWindow from '../../Components/UI/ModalWindow/MyWindow'
import Mybutton from '../../Components/UI/Button/Mybutton'
import { TypeItems } from '../../redux/slices/todoSlice/type'

export default function TodoList() {
    const dispatch = useAppDispatch()
    
    const { sortItems } = useSelector((state: RootState) => state.todoSlice)
    const { ChangeDescripton, ChangeName, ListTaskVoid, apply, exit, windowEditNameAndDescription } = useSelector((state: RootState) => state.languageSlice.items.page!.todoList.main)

    const [ value, setValue ] = React.useState<{
        title: string;
        body: string;
    }>({title: '', body: ''})

    const [ changeValue, setChangeValue] = React.useState<{
        title: string;
        body: string;
    }>({title: '', body: ''})

    const [ selectedItems, setSelecteditems ] = React.useState<string>('')
    const [ isModalActive, setIsModalActive ] = React.useState<boolean>(false)

    const editTodo = (props: {title: string, body: string}) => {
        const params = {
            title: props.title,
            body: props.body,
        }

        dispatch(changeTodo(params))
    }

    const functionButton = () => {   
        editTodo(changeValue)
        setChangeValue({title: '', body: ''})

        setIsModalActive(false)
    }

    const removeTodos = (id: number) => {
        dispatch(removeItems(id))
    }

    return (
        <div className='todo-content'>
            <MyWindow isWindow={isModalActive}>
                <div>
                    <h2>{windowEditNameAndDescription}</h2>

                    <div className='todoButtonModalBack'>
                        <Mybutton onClick={() => setIsModalActive(false)}>{exit}</Mybutton>
                    </div>

                    <div className='todo-col'>
                        <p>{ChangeName}</p>
                        <input 
                            value={changeValue.title}
                            onChange={(event) => setChangeValue({...changeValue, title: event.target.value})}

                            type='text'
                        />
                    </div>

                    <div className='todo-col'>
                        <p>{ChangeDescripton}</p>
                        <input
                            value={changeValue.body}
                            onChange={(event) => setChangeValue({...changeValue, body: event.target.value})}

                            type='text'
                        />
                    </div>

                    <div className='todoButtonModalAssing'>
                        <Mybutton onClick={() => functionButton()}>{apply}</Mybutton>
                    </div>
                </div>
            </MyWindow>

            <Control
                value={value}
                setValue={setValue}

                selectedItems={selectedItems}
                setSelecteditems={setSelecteditems}
            />

            {!sortItems.length ?
                <div className='task-list'>
                    <h1>{ListTaskVoid}</h1>
                </div>

                :

                sortItems.map((item: TypeItems, index: number) => 
                    <TodoForm key={item.id} number={index + 1} item={{...item}} removeTodos={removeTodos} setIsModalActive={setIsModalActive}/>
                )
            }
        </div>
    )
}