import './App.css';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import { fetchContacts } from '../redux/contactsOps';
import { selectIsLoading, selectIsError } from '../redux/contactsSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <div className="formBox">
        <ContactForm />
        <SearchBox />
      </div>
      {!isError && <ContactList />}
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
    </div>
  );
}

export default App;
