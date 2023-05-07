import { filteredContacts } from 'redux/slice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import css from './Phonebook.module.css';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <div className={css.filter}>
      <h2>Contacts</h2>
      <label className={css.label} htmlFor="">
        Find contacts by name
        <input
          className={css.input}
          onInput={e => dispatch(filteredContacts(e.target.value))}
          name="text"
          type="text"
          value={filter}
        />
      </label>
    </div>
  );
}
