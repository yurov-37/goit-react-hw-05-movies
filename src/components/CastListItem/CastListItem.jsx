import LolPicture from '../../data/images/lol.png';

export default function CastListItem({ character, name, poster }) {
  return (
    <li>
      <img
        src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : LolPicture}
        alt={name}
        width="200"
      />

      <p>{name}</p>
      <p>{character}</p>
    </li>
  );
}
