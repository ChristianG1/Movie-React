import styles from './Empty.module.css';
import noResults from '../../assets/img/noresults.png';

export function Empty() {
  return(
    <div className={styles.empty}>
      <div className={styles.text}>
        <h3>No results found :( </h3>
        <p>We suggest you try to search with another name.</p>
      </div>
      <img src={noResults} className={styles.image} alt='No results'/>
    </div>
  )
}