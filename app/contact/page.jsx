"use client";

import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Link from "next/link";
import Header from "../components/Header";

const ContactUs = () => {
  // password rules to check if the password is strong enough
  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

  // basic yup schema to validate input data and shwoing user errors accrodingly
  const basicRegistrationSchema = yup.object().shape({
    fullName: yup.string().required("Required"),
    email: yup
      .string()
      .email("Please enter a valid Email Address")
      .optional("Optional"),
    phone: yup
      .string()
      .min(11, "Please enter a valid Bangladeshi Number")
      .max(14, "Please enter a valid Bangladeshi Number")
      .required("Required"),
      message : yup.string().required("Required").min(20, "Message must be at least 20 character long").max(300, "Message must not exceed 300 characters")
  });

  // setting up formik here
  const formik = useFormik({
    initialValues: {
        fullName: "",
        email: "",
        phone: "",
        message: "",
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
          <h1 className="py-10 font-bold text-3xl">Contact Us</h1>
          <div className="bg-gray-300 h-4/5 w-full lg:w-1/2 rounded-md">
            <form
              className="px-7 flex flex-col mt-8"
              onSubmit={formik.handleSubmit}
            >
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
                className={
                  formik.errors.fullName && formik.touched.fullName
                    ? "focus:outline-red-400 border-red-400 border-2 mt-1 rounded px-2 py-1"
                    : "my-1 rounded px-2 py-1 focus:outline-none"
                }
              />
              {formik.errors.fullName && formik.touched.fullName && (
                <p className="text-red-400 text-sm text-left">
                  {formik.errors.fullName}
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
                  {formik.touched.email}
                </p>
              )}
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                className={
                  formik.errors.phone && formik.touched.phone
                    ? "focus:outline-red-400 border-red-400 border-2 mt-1 rounded px-2 py-1"
                    : "my-1 rounded px-2 py-1 focus:outline-none"
                }
              />
              {formik.errors.phone && formik.touched.phone && (
                <p className="text-red-400 text-sm text-left">
                  {formik.errors.phone}
                </p>
              )}
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                className={
                  formik.errors.message && formik.touched.message
                    ? "focus:outline-red-400 border-red-400 border-2 mt-1 rounded px-2 py-1"
                    : "my-1 rounded px-2 py-1 focus:outline-none"
                }
              />
              {formik.errors.message && formik.touched.message && (
                <p className="text-red-400 text-sm text-left">
                  {formik.errors.message}
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

export default ContactUs;
