import styles from './styles.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Desenvolvido por <a href="https://github.com/eduardodv" target="_blank">e.</a></p>
      <p>/</p>
      <p>Figma by: <a href="https://www.rocketseat.com.br/" target="_blank">Rocketseat</a></p>
    </footer>
  )
}