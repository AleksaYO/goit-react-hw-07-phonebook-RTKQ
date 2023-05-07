import { Toaster } from 'react-hot-toast';
import { Phonebook } from './Phonebook/Phonebook';

export const App = () => {
  return (
    <div>
      <Phonebook />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
