import React from "react";

export default function Form(props) {
  const { values, submit, change, disabled, errors } = props;
  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };
  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="errors">
          {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
          <div>{errors.username}</div>
          <div>{errors.email}</div>
          <div>{errors.role}</div>
          <div>{errors.civil}</div>
        </div>
        <br />
        <label htmlFor="name">Name</label>
        <input
          value={values.username}
          onChange={onChange}
          name="username"
          type="text"
        />
        <label htmlFor="email">Email</label>
        <input
          value={values.email}
          onChange={onChange}
          name="email"
          type="text"
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          onChange={onChange}
          value={values.password}
        />
        <label>
          Terms Of Service
          <input
            type="checkbox"
            name="terms"
            onChange={onChange}
            checked={values.terms}
          />
        </label>
        <br></br>
        <br></br>
        <button type="submit">Submit Information</button>
      </form>
    </div>
  );
}
