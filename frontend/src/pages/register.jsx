import React, { useState } from "react";
import { API } from "../api";
import { useNavigate } from "react-router-dom";

import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    skills: "",
    interest: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await API.post("/auth/register", {
      userName: { firstName: form.firstName, lastName: form.lastName },
      userEmail: form.email,
      userSkills: form.skills.split(","),
      userInterest: form.interest.split(","),
    });

    localStorage.setItem("userId", res.data.User._id);

    alert("Registered Successfully!");
     navigate("/");
    // console.log(res.data);
  } catch (err) {
    console.error(err.response?.data || err);
    alert(err.response?.data?.message || "Error registering user");
  }
};


  return (
    <div className="register-container">
  <div className="register-card">
    <h1 className="register-title">Register</h1>
    <form className="register-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <input
          className="register-input"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
        />
        <input
          className="register-input"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
        />
      </div>
      <input
        className="register-input"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        className="register-input"
        name="skills"
        placeholder="Skills (comma separated)"
        onChange={handleChange}
      />
      <input
        className="register-input"
        name="interest"
        placeholder="Interest (comma separated)"
        onChange={handleChange}
      />
      <button type="submit" className="register-button">
        Submit
      </button>
    </form>
  </div>
</div>

  );
}

export default Register;
