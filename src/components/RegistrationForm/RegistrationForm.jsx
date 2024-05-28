import { Formik, Form, Field } from "formik";

import  { Toaster } from 'react-hot-toast';
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";


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
          
            <Form className='registrationForm' autoComplete="off"> 
                <label>
                        <Field className="username" name="name" />
                </label>
                
            
                <label>
                    <Field className="email" name="email" />
                 </label>
                
                <label>
                         <Field  className="password"name="password"  />
                 </label>
             
            
             
            <button type="submit" >Submit</button>
            <Toaster />
</Form>
 
         </Formik>
)


}