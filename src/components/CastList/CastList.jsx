import CastListItem from 'components/CastListItem/CastListItem';
import { CastGallery } from './CastList.styled';

export default function CastList({ arrayOfCast }) {
  return (
    <CastGallery>
      {arrayOfCast.map(({ id, character, name, poster }) => {
        return (
          <CastListItem
            key={id}
            character={character}
            name={name}
            poster={poster}
          />
        );
      })}
    </CastGallery>
  );
}
