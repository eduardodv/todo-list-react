import { PlusCircle } from 'phosphor-react'

import styles from './styles.module.css'
import { FormEvent, ChangeEvent, useState } from 'react';

interface PropsTasks {
  id: number,
  text: string,
  isComplete: boolean,
}

export interface PropsNewTask {
  createNewTask: (newTaskTextToAdd: PropsTasks) => void;
}

export function NewTask ({createNewTask}: PropsNewTask) {
  const [newTaskText, setNewTaskText] = useState('')
  const [idTask, setIdTask] = useState(0)

  function handleTextTask (event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  function handleCreateNewTask (event: FormEvent) {
    event.preventDefault();
    
    if (newTaskText.trim() === '') return

    const newTaskTextToAdd = {
      id: idTask,
      text: newTaskText,
      isComplete: false
    }
    
    setIdTask(idTask + 1);
    createNewTask(newTaskTextToAdd)
    setNewTaskText('')
  }

  return (
    <form className={styles.form} onSubmit={handleCreateNewTask}>
      <input 
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={handleTextTask}
        value={newTaskText}
        required
      />
      <button type="submit"><strong>Criar</strong> <PlusCircle weight="bold" /></button>
    </form>
  )
}