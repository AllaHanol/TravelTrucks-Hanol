import Icon from '../Icon/Icon.jsx';
import css from './FiltersList.module.css';

export default function FiltersList(params) {
  return (
    <label
      className={`${css.label} ${params.checked ? css.checked : ''}`}
    >
      <input
        type={params.type}
        id={params.id}
        checked={params.checked}
        onChange={params.onChange}
        className={css.input}
      />
      <Icon id={params.id} width={32} height={32}></Icon>
      <span className={css.text}>
        {params.name ? params.name : params.id}
      </span>
    </label>
  );
}
