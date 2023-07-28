import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from "redux/contactsSlice";
import styles from './ContactList.module.css';

const ContactList = () => {
  let contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const handleOnClick = evt => {
    dispatch(deleteContacts(evt.currentTarget.id));
  };

  const filter = useSelector(state => state.filter.value);
  if (filter !== '')
    contacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={styles.contact_li} key={id}>
            {name} : {number}
            <button id={id} type="button" onClick={handleOnClick}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
