import { Link } from 'react-router-dom';
import LolPicture from '../../data/images/lol.png';

export default function MovieCard({ id, name, title, poster, voteAverage }) {
  return (
    <li>
      <Link to={`/movies/${id}`}>
        <img
          src={
            poster ? `https://image.tmdb.org/t/p/w500/${poster}` : LolPicture
          }
          alt={title || name}
        />
        {title ? <h3>{title}</h3> : <h3>{name}</h3>}
        <p>{voteAverage}</p>
      </Link>
    </li>
  );
}