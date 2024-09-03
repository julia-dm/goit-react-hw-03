import PropTypes from 'prop-types';
import css from '../Contact/Contact.module.css'
export default function Contact({ data: { id, name,number }, onDelete }) {
  return (
    <div className={css.contact}>
      <div className={css.contacItem}>
      <h2  className={css.contactName}>{name} </h2>
      <p className={css.contactNumber}>{number}</p>
      </div>
      <button className={css.contactBtn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
Contact.propTypes={
    data: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,

      }),
      onDelete:PropTypes.func,
}