import React, { useState } from "react";
import "./Login.css";
import loginImage from "../../Assets/Images/loginImage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const navigate = useNavigate(); 

  const handleFacebookLogin = () => {
    // Implement logic to initiate Facebook login flow
  };

  // Function to handle login with Google
  const handleGoogleLogin = () => {
    // Implement logic to initiate Google login flow
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!email) {
      formErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email address is invalid";
      isValid = false;
    }

    if (!email) {
      formErrors.name = "Name is required";
      isValid = false;
    }

    if (!email) {
      formErrors.username = "User Name is required";
      isValid = false;
    }

    if (!password) {
      formErrors.password = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    if (password !== confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    if (!agree) {
      formErrors.agree = "You must agree to the terms";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);

      axios.post('http://localhost:3001/register', {name, email, password})
      .then(result => {
        console.log(result);
        setLoading(true);
        setName("");
        setUserName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setAgree(false);
        setErrors({});
        navigate('/login');
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }
};

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.id]: null,
    }));
  };

  return (
    <div className="loginpage">
      <div className="login-form">
        <p className="login-title">SignUp</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={handleInputChange(setName)}
            />
            {errors.name && <div className="error">{errors.name}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputUsername" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={handleInputChange(setUserName)}
            />
            {errors.username && <div className="error">{errors.username}</div>}
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={handleInputChange(setEmail)}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <div className="password-container">
              <input
                type={passwordVisible ? "text" : "password"}
                className="form-control"
                id="password"
                value={password}
                onChange={handleInputChange(setPassword)}
              />
              {password && (
                <FontAwesomeIcon
                  icon={passwordVisible ? faEyeSlash : faEye}
                  className="password-icon"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                />
              )}
            </div>
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputConfirmPassword1"
              className="form-label"
            >
              Confirm Password
            </label>
            <div className="password-container">
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                className="form-control"
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleInputChange(setConfirmPassword)}
              />
              {confirmPassword && (
                <FontAwesomeIcon
                  icon={confirmPasswordVisible ? faEyeSlash : faEye}
                  className="password-icon"
                  onClick={() =>
                    setConfirmPasswordVisible(!confirmPasswordVisible)
                  }
                />
              )}
            </div>
            {errors.confirmPassword && (
              <div className="error">{errors.confirmPassword}</div>
            )}
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
              checked={agree}
              onChange={() => {
                setAgree(!agree);
                setErrors((prevErrors) => ({
                  ...prevErrors,
                  agree: null,
                }));
              }}
            />
            <label class="form-check-label" for="exampleCheck1">
              I agree to the terms and conditions as set out by the user
              agreement.
            </label>
            {errors.agree && <div className="error">{errors.agree}</div>}
          </div>
          <button type="submit" class="login-button" disabled={loading}>
            {loading ? "Loading..." : "Sign Up"}
          </button>

          <div className="mb-3">
            <p className="signup-text">
              Already have an account <a href="login">Login</a>
            </p>
          </div>
        </form>
      </div>
      <div className="login-animation">
        <img src={loginImage} alt="" />
      </div>
    </div>
  );
}
