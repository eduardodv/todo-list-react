import { Check, Trash } from 'phosphor-react'

import styles from './styles.module.css'

export interface Task {
  id: number,
  text: string,
  isComplete: boolean
}

export interface PropsTask {
  task: Task,
  onDeleteTask: (task: number) => void,
  onToggleCheckTask: (task: number) => void,
}

export function Task ({task, onDeleteTask, onToggleCheckTask}: PropsTask) {
  
  function handleDeleteTask () {
    if(confirm("Você tem certeza que deseja deletar esta tarefa?") === true) {
      onDeleteTask(task.id);
    }
  }

  function handleToggleCheckTask () {
    onToggleCheckTask(task.id)
  }

  return (
    <div className={`${styles.taskItem} ${task.isComplete ? styles.completed : ''}`}>
      <div className={styles.check}>
        <button type="button" onClick={handleToggleCheckTask}>
          <Check weight="bold" />
        </button>
      </div>
      <p>{ task.text }</p>
      <button onClick={handleDeleteTask} className={styles.delete} type="button">
        <Trash weight="bold" />
      </button>
    </div>
  )
}