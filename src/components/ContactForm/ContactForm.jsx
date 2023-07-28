import uniqid from 'uniqid';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contactsSlice';
import styles from './ContactForm.module.css';

const ContactForm = () => {

  let contacts = useSelector(state => state.contacts);
  
  const dispatch = useDispatch();
    const handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.target;
        console.log(contacts.filter(cont => form.elements.name.value === cont.name).length)
        if(contacts.filter(cont => form.elements.name.value === cont.name).length === 0){
          dispatch(
            addContacts({
                id: uniqid(),
                name:form.elements.name.value,
                number: form.elements.number.value,
            })
        );
        
        form.reset();
    };
  }

  return (
    <form className={styles.theForm} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          className={styles.main_input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label htmlFor="number">
        Number
        <input
          className={styles.main_input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button className={styles.sub_btn} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm
