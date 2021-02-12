import React, { useState } from "react"
import axios from "axios"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import "./form.scss"

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const formSchema = Yup.object().shape({
  name: Yup.string().required("Pole wymagane"),
  location: Yup.string().required("Pole wymagane"),
  when: Yup.string().required("Pole wymagane"),
  long: Yup.string().required("Pole wymagane"),
  people: Yup.string().required("Pole wymagane"),
  email: Yup.string()
    .email("Adres e-mail jest nieprawidłowy")
    .required("Pole wymagane"),
  phone: Yup.string()
    .matches(phoneRegExp, "Numer jest nieprawidłowy")
    .required("Pole wymagane"),
  message: Yup.string().required("Pole wymagane"),
})

export default () => {
  /* Server State Handling */
  const [serverState, setServerState] = useState()
  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg })
  }
  const handleOnSubmit = (values, actions) => {
    axios({
      method: "POST",
      url: "http://formspree.io/xyybvorz",
      data: values,
    })
      .then(response => {
        actions.setSubmitting(false)
        actions.resetForm()
        handleServerResponse(
          true,
          "Dziękujemy, odpowiemy najszybciej jak to możliwe!"
        )
      })
      .catch(error => {
        actions.setSubmitting(false)
        handleServerResponse(false, error.response.data.error)
      })
  }
  return (
    <div>
      <h3>Formularz kontaktu</h3>
      <p>Wpisz dane szukanego lokalu, my zajmiemy się resztą.</p>
      <Formik
        initialValues={{
          name: "",
          long: "",
          location: "",
          people: "",
          email: "",
          when: "",
          phone: "",
          message: "",
        }}
        onSubmit={handleOnSubmit}
        validationSchema={formSchema}
      >
        {({ isSubmitting }) => (
          <Form id="fs-frm" noValidate>
            <Field
              id="name"
              type="text"
              name="name"
              placeholder="Imię Nazwisko/Firma"
            />
            <ErrorMessage name="name" className="errorMsg" component="p" />

            <Field
              id="location"
              type="text"
              name="location"
              placeholder="Lokalizacja kwatery (kod pocztowy, miejscowość)"
            />
            <ErrorMessage name="location" className="errorMsg" component="p" />

            <Field
              id="people"
              type="text"
              name="people"
              placeholder="Ile osób"
            />
            <ErrorMessage name="people" className="errorMsg" component="p" />

            <Field id="when" type="text" name="when" placeholder="Od kiedy?" />
            <ErrorMessage name="when" className="errorMsg" component="p" />

            <Field
              id="long"
              type="text"
              name="long"
              placeholder="Na jak długo?"
            />
            <ErrorMessage name="long" className="errorMsg" component="p" />

            <Field
              id="message"
              name="message"
              component="textarea"
              placeholder="Dodatkowe informacje"
            />
            <ErrorMessage name="message" className="errorMsg" component="p" />

            <Field id="email" type="email" name="email" placeholder="E-mail" />
            <ErrorMessage name="email" className="errorMsg" component="p" />

            <Field id="phone" type="phone" name="phone" placeholder="Telefon" />
            <ErrorMessage name="phone" className="errorMsg" component="p" />

            <button type="submit" disabled={isSubmitting}>
              Wyślij
            </button>
            {serverState && (
              <p className={!serverState.ok ? "errorMsg" : ""}>
                {serverState.msg}
              </p>
            )}
          </Form>
        )}
      </Formik>
    </div>
  )
}
