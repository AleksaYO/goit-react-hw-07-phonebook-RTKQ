import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from 'redux/contactsApi';
import css from './Phonebook.module.css';
import { getFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';

export function PhonebookList() {
  const { data: contacts = [], isLoading } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const filter = useSelector(getFilter);
  const newArr = contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {contacts && (
        <>
          {isLoading && <p>Loading...</p>}
          <ul className={css.list}>
            {newArr.map(({ name, number, id }) => {
              return (
                <li id={id} key={id}>
                  {name}: {number}
                  <button onClick={() => deleteContact(id)}> Удалить</button>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
}
