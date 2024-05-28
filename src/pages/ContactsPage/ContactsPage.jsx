import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading, selectError } from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";

import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";


export default function ContactsPage() {


  const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);
    const error = useSelector(selectError)

     useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

 return (
    <div>
      <h1>Phonebook</h1>
   
      <ContactForm/>
      <SearchBox />
      {isLoading && <p>Is loading</p>}
      {error && <p>Please, try again</p>}
      <ContactList/>
     
     
    </div>
  )
}

