import React, { useState, useEffect } from "react";
import "../src/styles/App.css";
import Form from "../src/components/Form";
import axios from "axios";
import formSchema from "./validation/formSchema";
import User from "./components/User";
import * as yup from "yup";

function App() {
  const initialValues = { name: "", email: "", password: "", terms: false };
  const initialFormErrors = {
    username: "",
    email: "",
    role: "",
    civil: "",
  };
  const initialUser = [];
  const initialDisabled = true;
  //Initial State
  const [user, setUser] = useState(initialUser);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors); // object
  const [disabled, setDisabled] = useState(initialDisabled); // boolean

  const getFriends = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        // console.log(res.data.data);
        setUser(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const postNewUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        setUser([res.data.data, ...user]);
      })
      .catch((err) => {
        console.log(err);
      });
    setFormValues(initialValues);
  };

  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
    setFormValues({
      ...formValues,
      [name]: value, // NOT AN ARRAY
    });
  };

  const formSubmit = () => {
    const newUser = {
      username: formValues.username,
      email: formValues.email,
      password: formValues.password,

      terms: ["terms"].filter((terms) => formValues[terms]),
    };

    postNewUser(newUser);
  };

  useEffect(() => {
    getFriends();
  }, []);

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <div className="App">
      <h1>On Boarding Form</h1>
      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      {/* key={user.id}  */}
      {user.map((user) => {
        return <User details={user} />;
      })}
    </div>
  );
}

export default App;
