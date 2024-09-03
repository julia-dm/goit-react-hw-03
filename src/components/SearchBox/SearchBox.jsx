import PropTypes from 'prop-types';
import css from '../SearchBox/SearchBox.module.css'

export default function SearchBox({ value, onFilter }) {
  return (
    <form className={css.searchBox} >
      <label className={css.searchName}>
        Find contacts by name:
        </label>
        <input className={css.searchInput}
          type="text"
          value={value}
          onChange={(e) => onFilter(e.target.value)}
        />
    
    </form>
  );
}

SearchBox.propTypes = {
  value: PropTypes.string,
  onFilter: PropTypes.func,
};