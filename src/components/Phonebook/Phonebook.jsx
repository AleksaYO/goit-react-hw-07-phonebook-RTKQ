import { PhonebookList } from './PhonebookList';
import { Form } from './Form';
import { Filter } from './Filter';
import { useGetContactsQuery } from 'redux/contactsApi';

export function Phonebook() {
  const { data: contacts = [] } = useGetContactsQuery();
  return (
    <>
      <Form />
      {contacts.length > 0 && <Filter />}
      <PhonebookList />
    </>
  );
}
