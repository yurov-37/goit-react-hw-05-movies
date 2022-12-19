import { Container } from 'components/Container/Container.styled';
import LolPicture from '../../data/images/lol.png';
import {
  MovieCardWrapper,
  MovieCardPoster,
  MovieCardInfo,
  MovieCardTitle,
  MovieCardLink,
  MovieCardBudget,
  MovieCardGenres,
  MovieCardRating,
  MovieLinksBlock,
  MovieLink,
  MovieLinksText,
} from './SingleMovieCard.styled';

export default function SingleMovieCard({ movieInfo }) {
  const { title, genres, budget, homepage, poster, description, rating } =
    movieInfo;
  return (
    <Container>
      <MovieCardWrapper>
        <MovieCardPoster
          src={
            poster ? `https://image.tmdb.org/t/p/w500/${poster}` : LolPicture
          }
          alt={title}
          width="360"
        />
        <MovieCardInfo>
          <MovieCardTitle>{title}</MovieCardTitle>
          <MovieCardRating>Rating: {rating.toFixed(1)}</MovieCardRating>
          <MovieCardLink>
            <p>Official website:</p>
            <a href={homepage}>{homepage}</a>
          </MovieCardLink>
          <MovieCardBudget>Budget: {budget}</MovieCardBudget>
          <MovieCardGenres>
            <p>Genres:</p>
            {genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </MovieCardGenres>
          <b>Overview</b>
          <p>{description}</p>
          <MovieLinksBlock>
            <MovieLinksText>Additional Information</MovieLinksText>
            <MovieLink to="cast">Cast</MovieLink>
            <MovieLink to="reviews">Reviews</MovieLink>
          </MovieLinksBlock>
        </MovieCardInfo>
      </MovieCardWrapper>
    </Container>
  );
}
