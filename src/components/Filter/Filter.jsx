import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ filter, setFilter }) => {
  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  return (
    <div className={css.filterContainer}>
      <p className={css.filterLabel}>Find Contacts by Name</p>
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        placeholder="Search by name"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};
