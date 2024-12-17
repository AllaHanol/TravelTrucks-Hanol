import TruckOptionsList from '../TruckOptionsList/TruckOptionsList.jsx';
import css from './DetailInfo.module.css';

export default function DetailInfo({ truckInfo }) {
  return (
    <section className={css.detail_info}>
      <TruckOptionsList data={truckInfo} />
      <section className={css.info}>
        <h3 className={css.title}>Vehicle details</h3>
        <ul className={css.list}>
          <li className={css.item}>
            <p>Form</p>
            <p>{truckInfo.form}</p>
          </li>
          <li className={css.item}>
            <p>Length</p>
            <p>{truckInfo.length}</p>
          </li>
          <li className={css.item}>
            <p>Width</p>
            <p>{truckInfo.width}</p>
          </li>
          <li className={css.item}>
            <p>Height</p>
            <p>{truckInfo.height}</p>
          </li>
          <li className={css.item}>
            <p>Tank</p>
            <p>{truckInfo.tank}</p>
          </li>
          <li className={css.item}>
            <p>Consumption</p>
            <p>{truckInfo.consumption}</p>
          </li>
        </ul>
      </section>
    </section>
  );
}
