

import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import css from './App.module.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {fetchContacts} from '../../redux/contactsOps'
import { selectError, selectLoading } from "../../redux/contactsSlice";


function App() {


  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading)
  const error = useSelector(selectError);

  useEffect(() => { dispatch(fetchContacts()) }, [dispatch])
  

 

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
   
      <ContactForm/>
      <SearchBox />
      {isLoading && <p>Is loading</p>}
      {error && <p>Please, try again</p>}
      <ContactList/>
     
     
    </div>
  )
}

export default App