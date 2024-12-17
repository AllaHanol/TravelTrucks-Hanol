import Icon from '../Icon/Icon.jsx';

import css from './Review.module.css';

export default function Review({ review }) {
  const items = [];
  for (let i = 1; i <= 5; i++) {
    items.push(
      <li key={i}>
        <Icon
          id="star"
          width={16}
          height={16}
          color={review.reviewer_rating >= i ? 'rating' : 'badges'}
        ></Icon>
      </li>
    );
  }
  return (
    <div className={css.container}>
      <div className={css.info}>
        <h2 className={css.avatar}>
          {review.reviewer_name[0].toUpperCase()}
        </h2>
        <div>
          <p className={css.name}>{review.reviewer_name}</p>
          <ul className={css.list}>{items}</ul>
        </div>
      </div>
      <p>{review.comment}</p>
    </div>
  );
}
