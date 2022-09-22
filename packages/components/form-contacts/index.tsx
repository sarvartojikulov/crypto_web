import React from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';

// TODO: i18n, api call, form validation

const validateEmail = (email: string) => {
  return email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const FormContacts = () => {
  return (
    <div className="col-span-full lg:col-span-7 bg-base-300 rounded-lg shadow-lg py-6 px-6">
      <Formik
        initialValues={{ name: '', email: '', phone: '', message: '' }}
        validate={(values) => {
          const errors: any = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="grid grid-cols-4 gap-x-4 gap-y-6">
            <div className="flex flex-col col-span-full md:col-span-2">
              <ErrorMessage name="name" component="label" className="label" />
              <Field
                type="text"
                name="name"
                placeholder="Name"
                className="input input-primary w-full"
              />
            </div>
            <div className="col-span-full md:col-span-2">
              <ErrorMessage name="phone" component="label" className="label" />
              <Field
                type="tel"
                name="phone"
                placeholder="Phone"
                className="input input-primary w-full"
              />
            </div>
            <div className="col-span-full">
              <ErrorMessage name="email" component="label" className="label" />
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="input input-primary w-full"
              />
            </div>
            <div className="col-span-full">
              <Field
                as="textarea"
                name="message"
                rows="6"
                placeholder="Message"
                className="textarea textarea-primary w-full"
              />
            </div>
            <button
              className="btn btn-primary col-span-2 col-start-2 md:col-start-3"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormContacts;
