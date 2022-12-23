import { ReviewAuthor, ReviewBox } from './ReviewItem.styled';

export default function ReviewItem({ author, content }) {
  return (
    <ReviewBox>
      <ReviewAuthor>{author}</ReviewAuthor>
      <p>{content}</p>
    </ReviewBox>
  );
}
