import ContactItem from 'components/contactItem/ContactItem';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          id={id}
          key={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};
export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
