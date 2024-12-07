import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import FormHeader from "./FormHeader";
import Modal from "./Modal";

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  phone: Yup.string(),
  tos: Yup.boolean().oneOf([true], "You must accept the terms and conditions"),
});

export default function UsingFormikYupLibrary() {
  const [showModal, setShowModal] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  return (
    <div className="p-8 w-full max-w-md flex items-start justify-center">
      <div>
        <FormHeader title={"Using Formik & Yup"} />

        <Formik
          className="space-y-6"
          initialValues={{
            fullName: "",
            email: "",
            password: "",
            phone: "",
            tos: false,
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            setSubmittedData(values);
            setShowModal(true);
          }}
        >
          {({ handleChange, handleBlur }) => (
            <Form className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium" htmlFor="fullName">
                  Full Name
                </label>
                <Field
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="w-full px-3 py-2 border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                />
                <ErrorMessage
                  name="fullName"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium" htmlFor="email">
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium" htmlFor="password">
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-3 py-2 border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium" htmlFor="phone">
                  Phone Number
                </label>
                <Field
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-3 py-2 border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                />
              </div>

              <div className="flex items-center gap-2">
                <Field
                  type="checkbox"
                  id="tos"
                  name="tos"
                  className="rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                />
                <label
                  className="text-sm text-gray-600 dark:text-gray-400"
                  htmlFor="tos"
                >
                  I agree to the Terms and Conditions
                </label>
              </div>
              <ErrorMessage
                name="tos"
                component="p"
                className="text-red-500 text-xs"
              />

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors font-medium"
              >
                Submit Form
              </button>
            </Form>
          )}
        </Formik>
      </div>

      {showModal && submittedData && <Modal data={submittedData} />}
    </div>
  );
}
