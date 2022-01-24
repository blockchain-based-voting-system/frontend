import React from "react";
import { Formik } from "formik";
import { RouteProps } from "react-router";
import LoginLayout from "../layouts/Login";
import * as Yup from "yup";

const schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(3).required("Required"),
});

const Login = (props: RouteProps): JSX.Element => {
  return (
    <div>
      <LoginLayout>
        <div className="login-container">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={schema}
            onSubmit={(values) => console.log({ values })}
          >
            {({ errors, touched, getFieldProps, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <input id="email" type="email" {...getFieldProps("email")} />
                <div className="form-error-text">
                  {touched.email && errors.email ? errors.email : null}
                </div>

                <input
                  id="password"
                  type="password"
                  {...getFieldProps("password")}
                />
                <div className="form-error-text">
                  {touched.password && errors.password ? errors.password : null}
                </div>

                <button type="submit">Login</button>
              </form>
            )}
          </Formik>
        </div>
      </LoginLayout>
    </div>
  );
};

export default Login;
