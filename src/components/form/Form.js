import React, { useState } from "react"
import axios from "axios"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import "./form.scss"

const formSchema = Yup.object().shape({
  email: Yup.string()
    .email("Adres e-mail jest nieprawidłowy")
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
      <h3>Napisz do nas</h3>
      <p>Odpowiemy najszybciej jak to możliwe</p>
      <Formik
        initialValues={{ email: "", message: "" }}
        onSubmit={handleOnSubmit}
        validationSchema={formSchema}
      >
        {({ isSubmitting }) => (
          <Form id="fs-frm" noValidate>
            {/* <label htmlFor="email">Email:</label> */}
            <Field id="email" type="email" name="email" placeholder="E-mail" />
            <ErrorMessage name="email" className="errorMsg" component="p" />
            {/* <label htmlFor="message">Wiadomość:</label> */}
            <Field
              id="message"
              name="message"
              component="textarea"
              placeholder="Tu wpisz swoją wiadomość"
            />
            <ErrorMessage name="message" className="errorMsg" component="p" />
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
