import css from './Contact.module.css'
import { useDispatch } from 'react-redux'
import { deleteContact } from '../../redux/contactsOps'

export default function Contact({ contact }) {

    const dispatch = useDispatch();


    return (
    <div className={css.contact}>
            <p>{ contact.name}</p>
            <p>{ contact.number}</p>
            <button onClick={
                () => dispatch(deleteContact(contact.id))}>
                Delete</button>
        </div>
     )
}