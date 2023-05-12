import styles from './styles.module.css';
import logo from '../../assets/logo.svg'


export function Header () {
  return (
    <header className={styles.header}>
      <h1>
        <img src={logo} alt="logo: ToDo" />
      </h1>
    </header>
  )
}