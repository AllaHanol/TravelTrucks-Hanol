import Icon from '../Icon/Icon.jsx';

import css from './MainTruckInfo.module.css';

export default function MainTruckInfo({ truckInfo }) {
  return (
    <section className={css.description}>
      <section className={css.mainInfo}>
        <h2>{truckInfo.name}</h2>
        <div className={css.ratingDescr}>
          <ul className={css.ratingLocation}>
            <li>
              <Icon id="star" width={16} height={16} color="rating"></Icon>
              <p>
                {truckInfo.rating}({truckInfo.reviews.length} Reviews)
              </p>
            </li>
            <li>
              <Icon id="map" width={16} height={14}></Icon>
              <p>{truckInfo.location}</p>
            </li>
          </ul>
          <div className={css.price}>
            <h2>&euro;{truckInfo.price.toFixed(2)}</h2>
          </div>
        </div>
      </section>
      <ul className={css.imgGallery}>
        {truckInfo.gallery.map((img, index) => (
          <li key={index} className={css.imgItem}>
            <img src={img.original} alt="Truck photo" className={css.img} />
          </li>
        ))}
      </ul>
      <p>{truckInfo.description}</p>
    </section>
  );
}
