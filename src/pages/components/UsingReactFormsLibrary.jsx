"use client";

import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import FormHeader from "./FormHeader";
import Modal from "./Modal";

export default function UsingReactFormsLibrary() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const [showModal, setShowModal] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const onSubmit = useCallback(() => {
    console.log(getValues());
    setSubmittedData(getValues());
    setShowModal(true);
  }, [getValues]);

  return (
    <div className="p-8 w-full max-w-md flex items-start justify-center">
      <div>
        <FormHeader title={"Using React Forms"} />
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium" htmlFor="fullName">
              Fullname
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              {...register("fullName", {
                required: "Fullname field is required",
              })}
              className={`w-full px-3 py-2 border ${
                errors.fullName
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-700"
              } rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800`}
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.fullName?.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              {...register("email", { required: "Email is required" })}
              className={`w-full px-3 py-2 border ${
                errors.email
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-700"
              } rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email?.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              {...register("password", { required: "Password is required" })}
              className={`w-full px-3 py-2 border ${
                errors.password
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-700"
              } rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password?.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              {...register("phone", { required: "this field is required" })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register("termsReactForms", {
                required: "You must accept the terms and conditions",
              })}
              className={`rounded border-gray-300 dark:border-gray-700 text-blue-500 focus:ring-blue-500 ${
                errors.termsReactForms ? "border-red-500" : ""
              }`}
            />
            <label
              htmlFor="termsReactForms"
              className="text-sm text-gray-600 dark:text-gray-400"
            >
              I agree to the Terms and Conditions
            </label>
          </div>
          {errors.termsReactForms && (
            <p className="text-red-500 text-xs">
              {errors.termsReactForms?.message}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors font-medium"
          >
            Submit Form
          </button>
        </form>
      </div>

      {showModal && submittedData && <Modal data={submittedData} />}
    </div>
  );
}
