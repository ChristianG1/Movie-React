import styles from './Search.module.css';
import { FaSearch } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { useQuery } from '../../hooks/useQuery';

export function Search() {
  const history = useHistory();
  const query = useQuery();
  const search = query.get("search");

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text" value={search}
          placeholder='Type to search...'
          aria-label='Search Movies'
          onChange={(e) => {
            const value = e.target.value;
            history.push(`/?search=${value}`)
          }}
        />
      </div>
    </form>
  )
}
