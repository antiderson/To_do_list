import './style.css'
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import { Trash } from 'phosphor-react'

interface taskProps {
    id: string,
    content: string,
    isChecked: boolean,
    isCompleted: (task: string) => void,
    onDeleteTask: (state: string) => void
}

export function Task({ id, isCompleted, content, onDeleteTask, isChecked }: taskProps) {

    function handleDeleteTask() {
        onDeleteTask(id)
    }

    function handleCheckedTask() {
        isCompleted(id)
    }

    return (
        <div className='task'>
            <div className='taskBox'>
                <Checkbox.Root
                    onCheckedChange={handleCheckedTask}
                    className={isChecked == true ? 'UncheckedboxRoot' : 'CheckboxRoot'}
                >
                    <Checkbox.Indicator className='CheckboxIndicator'>
                        <CheckIcon />
                    </Checkbox.Indicator>
                </Checkbox.Root>
                <label className={isChecked == true ? 'taskChecked' : 'taskNoChecked'}>
                    {content}
                </label>
            </div>

            <button onClick={handleDeleteTask} className='buttonTrash'>
                <Trash size={24} />
            </button>
        </div>
    )
}
