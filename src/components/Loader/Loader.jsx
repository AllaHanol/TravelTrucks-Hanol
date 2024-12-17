import { Radio } from 'react-loader-spinner';

import css from './Loader.module.css';

export default function Loader() {
  return (
    <Radio
      visible={true}
      ariaLabel="radio-loading"
      wrapperStyle={{}}
      wrapperClass={css.loader}
    />
  );
}
