import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = evt => {
    dispatch(setFilter(evt.currentTarget.value));
  };

  const filter = useSelector(state => state.filter.value);

  return (
    <input
      id="filter"
      className={styles.filter_input}
      onChange={handleChange}
      type="text"
      name="filter"
      value={filter}
    />
  );
};

export default Filter;
