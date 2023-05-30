import './style.css';
import Plus from '../../assets/plus.svg';
import { NoContent } from '../NoContent';
import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useToast } from '../../hooks/useToast';
import { Task } from '../Task';

interface taskesProps {
    id: string,
    content: string,
    state: boolean
}

export function Content() {
    const [tasks, setTask] = useState(Array<taskesProps>)
    const [newTaskText, setNewTaskText] = useState('')
    const { showToast } = useToast();


function tal(){
    
}

    function createTask(event: FormEvent) {
        // if (newTaskText.length == 0) {
        //     showToast({
        //         message: "Erro ao adicionar tarefa",
        //         type: 'danger'
        //     })


        event.preventDefault()

        setTask([
            ...tasks,
            {
                id: uuidv4(),
                content: newTaskText,
                state: false
            }
        ])

        setNewTaskText('')
        showToast({
            message: "Tarefa adicionada com sucesso",
            type: 'success'
        })
        console.log("teste")

    }
    function handleTextTask(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('')
        setNewTaskText(event.target.value)
    }

    function deleteTask(taskToDelete: string) {
        const tasksWhithoutDeleteOne = tasks.filter(task => {
            return task.id != taskToDelete
        })

        setTask(tasksWhithoutDeleteOne)
    }

    function changeTaskStatus(state: string) {
        const todoListWithChangedTask = tasks.map(task => {
            if (task.id === state) {
                task.state = !task.state
                return task
            }
            return task
        })

        setTask(todoListWithChangedTask)
    }

    const numberOfCompleted = tasks.filter(
        task => task.state === true).length

    const countTasks = tasks.length
    const isDisabledTask = newTaskText.length == 0

    // console.log(newTaskText)
    return (
        <div>
            <div className='wapper'>
                <div>
                    <form className='container'>
                        <input
                            onChange={handleTextTask}
                            placeholder="Adicionar uma nova tarefa"
                            type="text"
                            value={newTaskText}
                            required
                        />
                        <button
                            type={'submit'}
                            disabled={isDisabledTask}
                            onClick={createTask}>
                            Criar
                            <img
                                src={Plus}
                                alt="Ícone de mais" />
                        </button>
                    </form>
                </div>

                <main className='content'>
                    <div className='counter'>
                        <strong className='blue'>
                            Tarefas criadas<span>{countTasks}</span>
                        </strong>
                        <strong className='purple'>
                            Concluidas
                            <span>
                                {numberOfCompleted} {tasks.length > 0 && 'de'}{' '}
                                {tasks.length > 0 && countTasks}
                            </span>
                        </strong>
                    </div>
                </main>
                <div>
                    {tasks.map(task => {
                        return (
                            <Task
                                key={task.id}
                                content={task.content}
                                id={task.id}
                                isChecked={task.state}
                                onDeleteTask={deleteTask}
                                isCompleted={changeTaskStatus} />
                        )
                    })}
                    {tasks.length === 0 && <NoContent />}
                </div>
            </div>
        </div>
    )
}