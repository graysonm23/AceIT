import React, { useState } from "react";
import "../css/signup.css";
import API from "../utils/API";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import ValidatedSignupForm from "./validatedSignupForm";
import "./signup.css";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  button,
  form,
  FormGroup,
  label,
  input,
  Button
} from "reactstrap";

function Signup() {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [errors, setErrors] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleEmailSubmit = event => {
    event.preventDefault();
    console.log(email, password, confirmPassword, name);
    // axios.post("/api/auth/signup");
    console.log(event);
    const userObj = {
      email: email,
      password: password,
      name: name
    };
    API.signUpRoute(userObj)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log("Unable to save email ", err));
  };
  return (
    <div className="signupPage">
      <Container className="signupContainer">
        <Row>
          <Col className="SignupCol">
            <Card className="SignupCard">
              <CardBody className="signUpCardBody">
                <CardTitle className="homeCardTitle">
                  <h1 className="signupTitle">Signup</h1>
                </CardTitle>
                <CardBody className="homeCardBody">
                  <Formik
                    initialValues={{ email: "", password: "" }}
                    onSubmit={(values, { setSubmitting }) => {
                      setTimeout(() => {
                        console.log("Logging in", values);
                        setSubmitting(false);
                      }, 500);
                    }}
                    //********Handling validation messages yourself*******/
                    // validate={values => {
                    //   let errors = {};
                    //   if (!values.email) {
                    //     errors.email = "Required";
                    //   } else if (!EmailValidator.validate(values.email)) {
                    //     errors.email = "Invalid email address";
                    //   }
                    //   const passwordRegex = /(?=.*[0-9])/;
                    //   if (!values.password) {
                    //     errors.password = "Required";
                    //   } else if (values.password.length < 8) {
                    //     errors.password = "Password must be 8 characters long.";
                    //   } else if (!passwordRegex.test(values.password)) {
                    //     errors.password = "Invalida password. Must contain one number";
                    //   }
                    //   return errors;
                    // }}
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
                        .min(
                          8,
                          "Password is too short - should be 8 chars minimum."
                        )
                        .matches(
                          /(?=.*[0-9])/,
                          "Password must contain a number."
                        ),
                      changepassword: Yup.string().when("password", {
                        is: val => (val && val.length > 0 ? true : false),
                        then: Yup.string().oneOf(
                          [Yup.ref("password")],
                          "Both password need to be the same"
                        )
                      })
                    })}
                  >
                    <form onSubmit={handleEmailSubmit}>
                      <label htmlFor="email">Name</label>
                      <input
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className={errors.name && "error"}
                      />
                      {errors.name && (
                        <div className="input-feedback">{errors.name}</div>
                      )}
                      <label htmlFor="email">Email</label>
                      <input
                        name="email"
                        type="text"
                        placeholder="Enter your email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className={errors.email && "error"}
                      />
                      {errors.email && (
                        <div className="input-feedback">{errors.email}</div>
                      )}
                      <label htmlFor="email">Password</label>
                      <input
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className={errors.password && "error"}
                      />
                      {errors.password && (
                        <div className="input-feedback">{errors.password}</div>
                      )}
                      <label for="passowrd">Confirm Password</label>
                      <input
                        type="password"
                        name="changepassword"
                        placeholder="Confirm your password"
                        onChange={e => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                        className={errors.password && "error"}
                      />
                      <span class="error" style={{ color: "red" }}>
                        {errors.changepassword && (
                          <div className="input-feedback">
                            {errors.changepassword}
                          </div>
                        )}
                      </span>
                      <button type="submit">Signup</button>
                    </form>
                  </Formik>
                </CardBody>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Signup;