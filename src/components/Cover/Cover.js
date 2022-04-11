import styles from './Cover.module.css'; 
import cover from '../../assets/media/cover.mp4'

export function Cover() {
  return (
    <div className={styles.cover_container}>
      <video className={styles.video} src={cover} autoPlay loop muted />
      <h1>MovieNow</h1>
      <h4>Scroll to see more...</h4>
    </div>
  )
}