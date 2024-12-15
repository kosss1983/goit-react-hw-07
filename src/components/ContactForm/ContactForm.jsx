import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from './ContactForm.module.css';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const ContactForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    number: '',
  };
  const handleSubmit = ({ name, number }, options) => {
    const newContact = {
      name,
      number,
    };

    dispatch(addContact(newContact));
    options.resetForm();
  };

  const orderSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too short')
      .max(50, 'Too long')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Too short')
      .max(50, 'Too long')
      .required('Required'),
  });
  return (
    <Formik
      validationSchema={orderSchema}
      onSubmit={handleSubmit}
      initialValues={initialValues}
    >
      <Form className={s.form}>
        <label>
          <span>Name</span>
          <Field name="name" />
          <ErrorMessage name="name" component="span" className={s.error} />
        </label>
        <label>
          <span>Number</span>
          <Field name="number" />
          <ErrorMessage name="number" component="span" className={s.error} />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
