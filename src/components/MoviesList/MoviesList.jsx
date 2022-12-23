import MovieCard from 'components/MovieCard/MovieCard';
import { MovieList } from './MoviesList.styled';

export default function MoviesList({ movies, state }) {
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
          state={state}
        />
      ))}
    </MovieList>
  );
}
