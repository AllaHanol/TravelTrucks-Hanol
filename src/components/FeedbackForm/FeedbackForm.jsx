import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from "formik";
import {
  // ToastContainer,
  toast,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useId } from "react";
import * as Yup from "yup";

import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";

import css from "./FeedbackForm.module.css";
import Button from "../Button/Button.jsx";

const FeedbackSchema =
  Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(25, "Too Long!")
      .required("Required"),
    email: Yup.string()
      .email("Must be a valid email!")
      .required("Email is required!"),
    date: Yup.date().required(
      "Required",
    ),
    bookingDate: Yup.string()
      .matches(
        /^(\d{2})\.(\d{2})\.(\d{4})$/,
        "Date must be in format dd.mm.yyyy",
      )
      .required(
        "Select date in the future",
      ),
    message: Yup.string()
      .min(3, "Too short")
      .max(256, "Too long"),
  });

const initialValues = {
  name: "",
  email: "",
  message: "",
  date: "",
};

export default function FeedbackForm() {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const dateFieldId = useId();
  const msgFieldId = useId();

  const handleSubmit = (
    values,
    actions,
  ) => {
    console.log("object");
    toast.success(
      "Your reservation has been successfully sent!",
    );
    actions.resetForm();
  };

  return (
    // <section
    //   className={css.form_section}
    // >
    //   <ToastContainer />
    //   <div className={css.title}>
    //     <h3>Book your campervan now</h3>
    //     <p>
    //       Stay connected! We are always
    //       ready to help you.
    //     </p>
    //   </div>
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      {({ setFieldValue }) => (
        <div
          className={css.form_section}
        >
          <h3 className={css.title}>
            Book your campervan now
          </h3>
          <p>
            Stay connected! We are
            always ready to help you.
          </p>
          <Form className={css.form}>
            <div>
              <label
                htmlFor={nameFieldId}
              ></label>
              <Field
                type="text"
                name="name"
                id={nameFieldId}
                placeholder="Name*"
                className={css.input}
              />
              <ErrorMessage
                name="name"
                component="span"
              />
            </div>

            <div>
              <label
                htmlFor={emailFieldId}
              ></label>
              <Field
                type="email"
                name="email"
                id={emailFieldId}
                placeholder="Email*"
                className={css.input}
              />
              <ErrorMessage
                name="email"
                component="span"
              />
            </div>

            <div
              className={
                css.groupFieldAndError
              }
            >
              <Flatpickr
                placeholder="Booking date*"
                className={css.input}
                id={dateFieldId}
                options={{
                  dateFormat: "d.m.Y",
                  minDate: new Date(),
                }}
                onChange={(
                  selectedDates,
                ) => {
                  if (
                    selectedDates.length >
                    0
                  ) {
                    const formattedDate =
                      selectedDates[0]
                        .toLocaleDateString(
                          "en-GB",
                        )
                        .replace(
                          /\//g,
                          ".",
                        );
                    setFieldValue(
                      "bookingDate",
                      formattedDate,
                    );
                  }
                }}
                onInput={(e) => {
                  setFieldValue(
                    "bookingDate",
                    e.target.value,
                  );
                }}
              />
              <ErrorMessage
                name="bookingDate"
                component="span"
                className={css.error}
              />
            </div>

            {/* <div> */}
            {/* <label
              htmlFor={dateFieldId}
            ></label>
            <Field
              type="text"
              name="date"
              id={dateFieldId}
              className={css.input}
              onFocus={(e) =>
                (e.target.placeholder =
                  "")
              }
              onBlur={(e) =>
                (e.target.placeholder =
                  "Booking date*")
              }
              placeholder="Booking date*"
            />

            <ErrorMessage
              name="date"
              component="span"
            /> */}
            {/* </div> */}

            <div>
              <label
                htmlFor={msgFieldId}
              ></label>
              <Field
                as="textarea"
                name="message"
                id={msgFieldId}
                rows="5"
                placeholder="Comment"
                className={`${css.textarea} ${css.input}`}
              />
              <ErrorMessage
                name="message"
                component="span"
              />
            </div>

            <Button
              type="submit"
              variant="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
      )}
    </Formik>
    // </section>
  );
}
