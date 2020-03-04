import React from "react";
import { Formik } from "formik";
// import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import { Row, Col, Container } from "reactstrap";

const ValidatedInfoForm = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
    //********Using Yum for validation********/

    validationSchema={Yup.object().shape({
      name: Yup.string()
        .min(2, "Too Short")
        .max(50, "Too Long"),
      email: Yup.string()
        .email()
        .required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number."),
      changepassword: Yup.string().when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Both password need to be the same"
        )
      })
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
        <form className="infoForm" onSubmit={handleSubmit}>
          <Container>
            <Row>
              <Col className="infoCol1">
                <label htmlFor="email">Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.name && touched.name && "error"}
                />
                {errors.name && touched.name && (
                  <div className="input-feedback">{errors.name}</div>
                )}
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  type="text"
                  placeholder="Enter your email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.email && touched.email && "error"}
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}
              </Col>
              <Col className="infoCol2">
                <label htmlFor="email">Password</label>
                <input
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.password && touched.password && "error"}
                />
                {errors.password && touched.password && (
                  <div className="input-feedback">{errors.password}</div>
                )}
                <label for="passowrd">Confirm Password</label>
                <input
                  type="password"
                  name="changepassword"
                  placeholder="Confirm your password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.changepassword}
                  className={errors.password && touched.password && "error"}
                />
                <span class="error" style={{ color: "red" }}>
                  {errors.changepassword && touched.password && (
                    <div className="input-feedback">
                      {errors.changepassword}
                    </div>
                  )}
                </span>
              </Col>
            </Row>
          </Container>
          <button
            className="infoSubButton"
            type="submit"
            disabled={isSubmitting}
          >
            Signup
          </button>
        </form>
      );
    }}
  </Formik>
);

export default ValidatedInfoForm;
