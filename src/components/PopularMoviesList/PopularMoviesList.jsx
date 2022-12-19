import MovieCard from 'components/MovieCard/MovieCard';
import { MovieList } from './PopularMoviesList.styled';

export default function PopularMoviesList({ movies }) {
  return (
    <MovieList>
      {movies.map(({ id, title, poster, voteAverage, name }) => (
        <MovieCard
          key={id}
          id={id}
          name={name}
          title={title}
          poster={poster}
          voteAverage={voteAverage}
        />
      ))}
    </MovieList>
  );
}
