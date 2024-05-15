import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const loginUser = (e) => {
    e.preventDefault();
    if (form.email === "" || form.password === "") {
      alert("Please enter both email and password to sign in.");
      return;
    }

    fetch("http://localhost:4000/api/login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Invalid email or password");
        }
        return response.json();
      })
      .then((data) => {
        alert("Successfully logged in!");
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/");
      })
      .catch((error) => {
        alert(error.message || "Something went wrong. Please try again.");
      });
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <img src={require("../assets/clothify.png")} alt="Clothify Logo" />
      </div>
      <div className="login-form">
        <h2 className="login-title">Sign in to your account</h2>
        <form onSubmit={loginUser}>
          <div className="login-inputs">
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="input-field"
              placeholder="Email address"
              value={form.email}
              onChange={handleInputChange}
            />
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="input-field"
              placeholder="Password"
              value={form.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="login-options">
            <label className="checkbox-container">
              <input id="remember-me" name="remember-me" type="checkbox" />
              Remember me
            </label>
            <span className="forgot-password">Forgot your password?</span>
          </div>
          <button type="submit" className="login-button">Sign in</button>
          <p className="register-prompt">
            Don't have an account? Please <Link to="/register">register now</Link>.
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
