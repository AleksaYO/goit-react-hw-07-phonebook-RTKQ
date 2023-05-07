import { toast } from 'react-hot-toast';
import { useAddContactMutation, useGetContactsQuery } from 'redux/contactsApi';
import css from './Phonebook.module.css';

export function Form() {
  const [addContact] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery();

  const onSubmit = e => {
    e.preventDefault();

    const { name, number } = e.currentTarget.elements;

    contacts.some(contact => contact.number === number.value)
      ? toast.error('Контакт с таким номером уже существует')
      : addContact({ name: name.value, number: number.value });

    e.currentTarget.reset();
  };

  return (
    <form onSubmit={onSubmit} className={css.form}>
      <label className={css.label} htmlFor="">
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label} htmlFor="">
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.btn} type="submit">
        Add Contact
      </button>
    </form>
  );
}
