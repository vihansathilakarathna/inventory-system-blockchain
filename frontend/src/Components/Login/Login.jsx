import React, { useState } from "react";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import loginImage from "../../Assets/Images/loginImage.png";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();

  const handleGoogleSuccess = (response) => {
    console.log("Google login success:", response);
  };

  const handleGoogleFailure = (error) => {
    console.error("Google login failed:", error);
  };

  const handleFacebookResponse = (response) => {
    console.log("Facebook login success:", response);
  };

  const handleFacebookLoginFailure = (error) => {
    console.error(error);
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

    if (!password) {
      formErrors.password = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
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

      axios
        .post("http://localhost:3001/login", { email, password })
        .then((result) => {
          console.log(result);
          
          if (result.data === "Success") {
            setLoading(true);
            setEmail("");
            setPassword("");
            setAgree(false);
            setErrors({});
            navigate("/dashboard");
          }
        })
        .catch((err) => {
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
        <p className="login-title">Login</p>
        <form onSubmit={handleSubmit}>
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
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
        <div className="mb-3">
          <GoogleLogin
            clientId="YOUR_GOOGLE_CLIENT_ID"
            onSuccess={handleGoogleSuccess}
            onFailure={handleGoogleFailure}
            render={(renderProps) => (
              <button
                className="login-google"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <FontAwesomeIcon icon={faGoogle} className="me-2" />
                Login with Google
              </button>
            )}
          />
        </div>
        <div className="mb-3">
          <FacebookLogin
            appId="YOUR_FACEBOOK_APP_ID"
            autoLoad={false}
            fields="name,email,picture"
            callback={handleFacebookResponse}
            onFailure={handleFacebookLoginFailure}
            render={(renderProps) => (
              <button className="login-facebook" onClick={renderProps.onClick}>
                <FontAwesomeIcon icon={faFacebook} className="me-2" />
                Login with Facebook
              </button>
            )}
          />
        </div>
      </div>
      <div className="login-animation">
        <img src={loginImage} alt="" />
      </div>
    </div>
  );
}
