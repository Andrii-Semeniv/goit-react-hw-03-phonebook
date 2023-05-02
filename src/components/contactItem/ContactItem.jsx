import PropTypes from 'prop-types';

import css from './ContactItem.module.css';
const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <div>
      <li className={css.listIem}>
        {name}: {number}
        <button className={css.btn} onClick={() => onDelete({ id })}>
          Delete
        </button>
      </li>
    </div>
  );
};
export default ContactItem;

ContactItem.prototype = {
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
