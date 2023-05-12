import { useState } from 'react'

import styles from './styles.module.css'

import { Header } from '../Header'
import { NewTask } from '../NewTask'
import { TaskCount } from '../TaskCount'
import { Task } from '../Task'
import { WithoutTasksCreated } from '../WithoutTasksCreated'
import { Footer } from '../Footer'

interface PropsTasks {
  id: number,
  text: string,
  isComplete: boolean,
}

function App() {
  const [tasks, setTasks] = useState<PropsTasks[]>([]);

  const totalTasks = tasks.length
  const completedTasks = tasks.filter(task => task.isComplete === true).length

  function createNewTask(newTaskTextToAdd: PropsTasks) {
    setTasks([...tasks, newTaskTextToAdd])
  }

  function deleteTask(taskToDelete: number) {
    const tasksWithoutDeleteOne = tasks.filter(task => {
      return task.id !== taskToDelete;
    })

    setTasks(tasksWithoutDeleteOne)
  }

  function toggleCheckTask(toggleCheckTask: number) {
    const tasksWithToggleComplete = tasks.map((task) => {
      if(task.id === toggleCheckTask) {
        return {
          ...task,
          isComplete: !task.isComplete
        }
      }
      return task;
    })

    setTasks(tasksWithToggleComplete)
  }

  return (
    <>
      <Header />
      <main className={styles.container}>
        <NewTask createNewTask={createNewTask} />
        <div className={styles.twoColumns}>
          <TaskCount title='Tarefas criadas' totalTasks={totalTasks} />
          <TaskCount title='Concluídas' totalTasks={totalTasks} completedTasks={completedTasks} />
        </div>
        {tasks?.map((task) => {
          return (
            <Task 
              task={task}
              key={task.id}
              onDeleteTask={deleteTask}
              onToggleCheckTask={toggleCheckTask}
            />
          )
        })}
        { tasks.length <= 0 && <WithoutTasksCreated />}
      </main>
      <Footer />
    </>
  )
}

export default App
