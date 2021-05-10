import React, { useState } from "react";
import { useHistory } from "react-router-dom";


function SignInForm({isClicked, setSignInForm, setCurrentCreative}) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // request => POST /login
    fetch("http://localhost:3000/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData),
      
    }) 
      .then((response) => response.json())
      .then((user) => setCurrentCreative(user))

      setSignInForm(!isClicked)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        {errors.map((error) => (
          <p key={error} style={{ color: "red" }}>
            {error}
          </p>
        ))}
        <input type="submit" value="singin" />
      </form>
    </div>
  );
}

export default SignInForm;

 
