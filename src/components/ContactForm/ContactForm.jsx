import { Formik, Form, Field, ErrorMessage } from "formik"
import { useId } from "react"
import * as Yup from 'yup'
import "yup-phone-lite"
import { useDispatch } from "react-redux"
import { addContact } from "../../redux/contacts/operations";
import css from './ContactForm.module.css'



const UserSchema = Yup.object().shape({
            name:  Yup.string().min(3, "At least 3 chars required").required('Is required!'),
            number: Yup.string()
  .phone("UA", "Please enter a valid phone number")
  .required("A phone number is required")
        })


export default function ContactForm() {
    const nameId = useId();
    const dispatch = useDispatch()
    
    const handleSubmit = (value, actions) => {
        dispatch(addContact(value))
        actions.resetForm();
       
    }

    return (
        <Formik initialValues={{
            name:'',
            number: '',
        
        }}
            validationSchema={UserSchema}
            onSubmit={handleSubmit} > 
            <Form className={css.formContainer}> <div >
                <label htmlFor={nameId} className={css.formTitle}>Name</label>
                <Field name="name" id={ nameId } className={css.formInput}/>
            <ErrorMessage name="name"/>
            </div>
                <div>
                <label htmlFor="" className={css.formTitle}>Number</label>
                    <Field name="number"className={css.formInput} />
                 <ErrorMessage name="number"/>
                </div> 
             
                <button type="submit" className={css.formBtn}>Add contact</button>
</Form>
        </Formik>
    )
}