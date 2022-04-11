import styles from './Details.module.css';
import { Spinner } from '../components/Spinner/Spinner';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchApi } from '../utils/fetchApi';
import { useState } from 'react';
import { getImage } from '../utils/getImage';

export function Details() {
  const [movie, setMovie] = useState(null)
  const [isLoading, setIsLoading] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    
    fetchApi(`/movie/${movieId}`).then((data) => {
      setIsLoading(false);
      setMovie(data)
    })
  }, [movieId]);

  if(isLoading) {
    return <Spinner />
  }

  if(!movie) {
    return null;
  }

  const imageUrl = getImage(movie.poster_path, 500);
  return (
    <div className={styles.container}>
      <img className={`${styles.col} ${styles.image}`} src={imageUrl} alt={movie.title} />
      <div className={`${styles.col} ${styles.details}`}>
        <h2 className={styles.title}>{movie.title} </h2>
        <p>{movie.overview}</p>
        <p className={styles.genre}>
          {movie.genres.map(genre => genre.name).join(", ")}
        </p>
      </div>
    </div>
  )
}