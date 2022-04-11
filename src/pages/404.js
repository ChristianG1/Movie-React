import styles from './Error.module.css';
import error from '../assets/img/404.png'

export function Error() {
  return (
    <div className={styles.container}>
      <div className={styles.subtext}>
        <h2 className={styles.title}> You got lost ?</h2>
        <p>Apparently the page you are looking for does not exist</p>
        <p> try to search for something from Avengers</p>
      </div>
      <img src={error} />
    </div>
  )
}