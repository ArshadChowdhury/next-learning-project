"use client";

import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Link from "next/link";
import Header from "../components/Header";

const SignupForm = () => {
  // password rules to check if the password is strong enough
  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

  // basic yup schema to validate input data and shwoing user errors accrodingly
  const basicRegistrationSchema = yup.object().shape({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    email: yup
      .string()
      .email("Please enter a valid Email Address")
      .required("Required"),
    password: yup
      .string()
      .min(5)
      .matches(passwordRules, { message: "Please create a stronger password" })
      .required("Required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  // setting up formik here
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
    validationSchema: basicRegistrationSchema,
  });

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="h-fit w-full md:w-3/5 flex flex-col items-center">
          <h1 className="py-10 font-bold">Registration Form</h1>
          <div className="bg-gray-300 h-4/5 w-full lg:w-1/2 rounded-md">
            <form
              className="px-7 flex flex-col mt-8"
              onSubmit={formik.handleSubmit}
            >
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                className={
                  formik.errors.firstName && formik.touched.firstName
                    ? "focus:outline-red-400 border-red-400 border-2 mt-1 rounded px-2 py-1"
                    : "my-1 rounded px-2 py-1 focus:outline-none"
                }
              />
              {formik.errors.firstName && formik.touched.firstName && (
                <p className="text-red-400 text-sm text-left">
                  {formik.errors.firstName}
                </p>
              )}
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                className={
                  formik.errors.lastName && formik.touched.lastName
                    ? "focus:outline-red-400 border-red-400 border-2 mt-1 rounded px-2 py-1"
                    : "my-1 rounded px-2 py-1 focus:outline-none"
                }
              />
              {formik.errors.lastName && formik.touched.lastName && (
                <p className="text-red-400 text-sm text-left">
                  {formik.errors.lastName}
                </p>
              )}
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
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
                className={
                  formik.errors.confirmPassword &&
                  formik.touched.confirmPassword
                    ? "focus:outline-red-400 border-red-400 border-2 mt-1 rounded px-2 py-1"
                    : "my-1 rounded px-2 py-1 focus:outline-none"
                }
              />
              {formik.errors.confirmPassword &&
                formik.touched.confirmPassword && (
                  <p className="text-red-400 text-sm text-left">
                    {formik.errors.confirmPassword}
                  </p>
                )}
              <button
                type="submit"
                className="mt-4 py-2 bg-gray-200 w-1/4 rounded-lg hover:bg-slate-600 hover:text-white"
              >
                Submit
              </button>
              <p className="py-5">
                Already a member ?{" "}
                <Link href="/login" className="text-blue-600">
                  Login here
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
