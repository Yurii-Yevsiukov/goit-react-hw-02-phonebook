import PropTypes from 'prop-types';
import css from './Filter.module.css';

export function Filter({ filter, hendleFilterChange }) {
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        input={filter}
        type="text"
        name="filter"
        onChange={hendleFilterChange}
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  hendleFilterChange: PropTypes.func.isRequired,
};