import React from 'react'

import { TodoForm } from './TodoForm'

import { useSelector } from 'react-redux'
import { changeTodo, itemsSliceTodos, removeItems } from '../../redux/slices/todoSlice'

import Control from '../../Components/Control'
import { useAppDispatch } from '../../redux/store'
import MyWindow from '../../Components/UI/ModalWindow/MyWindow'
import Mybutton from '../../Components/UI/Button/Mybutton'

export default function TodoList() {
    const dispatch = useAppDispatch()
    
    const { sortItems } = useSelector(itemsSliceTodos)

    const [ value, setValue ] = React.useState<{
        title: string;
        body: string;
    }>({title: '', body: ''})

    const [ changeValue, setChangeValue] = React.useState<{
        title: string;
        body: string;
    }>({title: '', body: ''})

    const [ selectedItems, setSelecteditems ] = React.useState<string>('')

    const [ isModalActive, setIsModalActive ] = React.useState(false)

    const abc = (props: {title: string, body: string}) => {
        const params = {
            title: props.title,
            body: props.body,
        }


        dispatch(changeTodo(params))
    }

    const functionButton = () => {
        
        abc(changeValue)

        setChangeValue({title: '', body: ''})

        setIsModalActive(false)
    }

    const removeTodos = (id: number) => {
        dispatch(removeItems(id))
    }

    return (
        <div className='todo-content'>
                <MyWindow setIsModalActive={setIsModalActive} isModalActive={isModalActive}>
                <h2>Окно редактирвоания имени и описания</h2>

                <div className='todoButtonModalBack'>
                    <Mybutton onClick={() => setIsModalActive(false)}>Выйти</Mybutton>
                </div>

                <div className='todo-col'>
                    <p>Изменить имя задачи</p>
                    <input 
                        value={changeValue.title}
                        onChange={(event) => setChangeValue({...changeValue, title: event.target.value})}

                        type='text'
                    />
                </div>

                <div className='todo-col'>
                    <p>Изменить описание задачи</p>
                    <input
                        value={changeValue.body}
                        onChange={(event) => setChangeValue({...changeValue, body: event.target.value})}

                        type='text'
                    />
                </div>

                <div className='todoButtonModalAssing'>
                    <Mybutton onClick={() => functionButton()}>Применить изменения</Mybutton>
                </div>
            </MyWindow>

            <Control
                value={value}
                setValue={setValue}

                selectedItems={selectedItems}
                setSelecteditems={setSelecteditems}
            />

            {!sortItems.length ?
                <div style={{textAlign: "center", color: 'white'}}>
                    <h1>Список заданий пустой</h1>
                </div>

                :

                sortItems.map((item: any, index: number) => 
                    <TodoForm key={item.id} number={index + 1} item={{...item}} removeTodos={removeTodos} setIsModalActive={setIsModalActive}/>
                )
            }
        </div>
    )
}