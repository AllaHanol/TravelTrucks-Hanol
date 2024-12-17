import { useDispatch, useSelector } from 'react-redux';

import FiltersList from '../FiltersList/FiltersList.jsx';

import { selectEquipment } from '../../redux/trucks/trucksSelectors.js';
import { addEquipment } from '../../redux/trucks/action.js';

import css from './VehicleEquipment.module.css';

export default function VehicleEquipment() {
  const equipments = useSelector(selectEquipment);
  const dispatch = useDispatch();

  const handleCheckboxChange = id => {
    dispatch(addEquipment(id));
  };

  return (
    <div>
      <p className={css.text}>Filters</p>
      <div className={css.filters}>
        <h3 className={css.title}>Vehicle Equipment</h3>
        <ul className={css.list}>
          {Object.entries(equipments).map(([key, value]) => (
            <li key={key} className={css.item}>
              <FiltersList
                id={key}
                checked={value}
                onChange={() => handleCheckboxChange(key)}
                type="checkbox"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
