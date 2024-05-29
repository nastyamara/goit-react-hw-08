import { Formik, Form, Field } from "formik";

import  { Toaster } from 'react-hot-toast';
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";


export default function RegistrationForm() {

  const dispatch = useDispatch();
    
    
    return (
      <Formik
        
          initialValues={{
                name: '',
                email: '',
              password: '',
        }}
          onSubmit={(values, actions) => {
         
           dispatch(register(values))
            actions.resetForm()
            
       
          }}
        > 
          
            <Form className={css.form} autoComplete="off"> 
                <label className={css.label}>
                        <Field  name="name" />
                </label>
                
            
                <label className={css.label}>
                    <Field name="email" />
                 </label>
                
                <label className={css.label}>
                         <Field  name="password"  />
                 </label>
             
            
             
            <button type="submit" >Submit</button>
            <Toaster />
</Form>
 
         </Formik>
)


}