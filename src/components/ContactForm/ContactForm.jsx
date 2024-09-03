import { useId } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from '../ContactForm/ContactForm.module.css'

const UserSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone number format")
      .required("Required"),
  });

export default function ContactForm({ onAdd }) {
  const handleSubmit = (values, actions) => {
    onAdd({
      id: nanoid(),
      name: values.name,       
      number: values.number,  
        });
    actions.resetForm();      
  };

  const id = useId();

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.formName}>
          <label htmlFor={`${id}-name`} className={css.formLabel}>Name:</label>
          <Field type="text" name="name" id={`${id}-name`}  className={css.formInput} placeholder="Name"/>
          <ErrorMessage name="name" component="span" />
        </div>
        <div className={css.formNumber}>
          <label htmlFor={`${id}-number`} className={css.forLabel}>Number:</label>
          <Field type="text" name="number" id={`${id}-number`} className={css.formInput} placeholder="XXX-XX-XX"/>
          <ErrorMessage name="number" component="span" />
        </div>
        <button type="submit" className={css.formBtn}>Add contact</button>
      </Form>
    </Formik>
  );
}

ContactForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
