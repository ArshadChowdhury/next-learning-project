"use client";

import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Link from "next/link";

const SignupForm = () => {
  // basic yup schema to validate input data and shwoing user errors accrodingly
  const basicLoginSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid Email Address")
      .required("Required"),
    password: yup.string().required("Required"),
  });

  // setting up formik here
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
    validationSchema: basicLoginSchema,
  });

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="h-fit w-full md:w-3/5 flex flex-col items-center rounded-md">
          <h1 className="py-10 font-bold">Login Form</h1>
          <div className="bg-gray-300 h-4/5 w-full lg:w-1/2 rounded-md">
            <form
              className="px-7 flex flex-col mt-8"
              onSubmit={formik.handleSubmit}
            >
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={
                  formik.errors.email && formik.touched.email
                    ? "focus:outline-red-400 border-red-400 border-2 mt-1 rounded px-2 py-1"
                    : "my-1 rounded px-2 py-1 focus:outline-none"
                }
              />
              {formik.errors.email && formik.touched.email && (
                <p className="text-red-400 text-sm text-left">
                  {formik.errors.email}
                </p>
              )}
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className={
                  formik.errors.password && formik.touched.password
                    ? "focus:outline-red-400 border-red-400 border-2 mt-1 rounded px-2 py-1"
                    : "my-1 rounded px-2 py-1 focus:outline-none"
                }
              />
              {formik.errors.password && formik.touched.password && (
                <p className="text-red-400 text-sm text-left">
                  {formik.errors.password}
                </p>
              )}
              <button
                type="submit"
                className="mt-4 py-2 bg-gray-200 w-1/4 rounded-lg hover:bg-slate-600 hover:text-white"
              >
                Submit
              </button>
              <p className="py-5">
                Not a member ?{" "}
                <Link href="/registration" className="text-blue-600">
                  Register here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
