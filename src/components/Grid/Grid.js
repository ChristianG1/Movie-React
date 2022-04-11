import { Card } from '../Card/Card';
import { Spinner } from '../Spinner/Spinner';
import styles from './Grid.module.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchApi } from '../../utils/fetchApi';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Empty } from '../Empty/Empty';

export default function Grid({ search }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const searchURL = search
    ? `/search/movie?query=${search}&page=${page}`
    : `/discover/movie?page=${page}`

  useEffect(() => {
    setIsLoading(true);
    fetchApi(searchURL).then((data) => {
      setMovies((prevMovies) => prevMovies.concat(data.results));
      setHasMore(data.page < data.total_pages);
      setIsLoading(false);
    })
  }, [search, page, searchURL])

  if(!isLoading && movies.length === 0) {
    return <Empty />
  }

  return (
    <InfiniteScroll
      dataLength={movies.length}
      hasMore={hasMore}
      next={() => setPage((prevPage) => prevPage + 1)}
      loader={<Spinner />}
    >
      <ul className={styles.grid}>
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>

  )
}

