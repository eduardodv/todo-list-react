import {ClipboardText} from 'phosphor-react'

import styles from './styles.module.css'

export function WithoutTasksCreated() {
  return (
    <div className={styles.content}>
      <ClipboardText />
      <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}