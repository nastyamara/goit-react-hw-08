import { Formik, Form, Field } from "formik";

import  { toast } from 'react-hot-toast';
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

// const notify = () => toast('Ooops, you`ve clicked too early. Enter something');


export default function LoginForm() {
  const dispatch = useDispatch()

   const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(reponse => {
        console.log(reponse);
        toast.success("Success!!!");
      })
      .catch(error => {
        console.log(error);
      });

    actions.resetForm();
  };

    

 return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form  autoComplete="off">
        <label>
          Email
          <Field type="email" name="email" />
        </label>
        <label >
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
