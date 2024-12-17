import Icon from '../Icon/Icon.jsx';

import css from './TruckOptions.module.css';

export default function TruckOptions({ option, id }) {
  return (
    <div className={css.content}>
      <Icon id={id ? id : option} width={20} height={20}></Icon>
      <p className={css.info}>{option}</p>
    </div>
  );
}
