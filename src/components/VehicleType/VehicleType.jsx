import { useDispatch, useSelector } from 'react-redux';

import FiltersList from '../FiltersList/FiltersList.jsx';

import { selectType } from '../../redux/trucks/trucksSelectors.js';


import css from './VehicleType.module.css';
import { addType } from '../../redux/trucks/action.js';

export default function VehicleType() {
  const type = useSelector(selectType);
  const dispatch = useDispatch();

  const vehicleTypes = ['panelTruck', 'fullyIntegrated', 'alcove'];

  const vehicleTypesFofFront = ['van', 'fully Integrated', 'alcove'];

  const handleRadioChange = value => {
    dispatch(addType(value));
  };

  return (
    <div className={css.filters}>
      <h3 className={css.title}>Vehicle Type</h3>
      <ul className={css.list}>
        {vehicleTypes.map((vehicle, index) => (
          <li key={index} className={css.item}>
            <FiltersList
              id={vehicle}
              checked={vehicle === type}
              onChange={() => handleRadioChange(vehicle)}
              type="radio"
              //different titles???
              name={vehicleTypesFofFront[index]}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
