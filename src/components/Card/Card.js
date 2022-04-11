import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import { getImage } from '../../utils/getImage';
import { Stars } from '../../containers/Stars';

export function Card({ movie }) {
  const imageUrl = getImage(movie.poster_path, 300);
  
  return (
    <li className={styles.card}>
      <Link to={`/movies/${movie.id}`}>
        <img
          width={200}
          height={300}
          src={imageUrl}
          alt={movie.title}
          className={styles.image}
        />
        <div>
          <h3 className={styles.card_title}>{movie.title.length > 30 ? movie.title.substring(0, 30) + '...' : movie.title}</h3>
          <p className={styles.release_date}>{movie.release_date}</p>
          <Stars raiting={movie.vote_average}/>
          {/* <AiFillStar color='#FFE174'/> */}
        </div>
      </Link>
    </li>
  )
}

