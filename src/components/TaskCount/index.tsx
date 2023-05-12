import styles from './styles.module.css'

export interface TaskCount {
  title: string,
  totalTasks: number,
  completedTasks?: number,
}

export function TaskCount ({ title, totalTasks, completedTasks }: TaskCount) {
  return (
    <div className={styles.box}>
      <p><strong>{ title }</strong></p>
      <span>
        <strong>
          {completedTasks !== undefined ? `${completedTasks} de ${ totalTasks }` : totalTasks}
        </strong>
      </span>
    </div>
  )
}