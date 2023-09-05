import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import styles from "./Login.module.css"; // Import the CSS module

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h2 className={styles.heading}>Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              className={styles.inputField}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              className={styles.inputField}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className={styles.btnContainer}>
            <Button className={styles.loginBtn} type="submit">
              Log In
            </Button>
          </div>
        </Form>
        <div className={styles.orText}>OR</div>
        <div className={styles.googleBtnContainer}>
          <GoogleButton className={styles.googleBtn} type="dark" onClick={handleGoogleSignIn} />
        </div>
        <div className={styles.signupBox}>
          <p className={styles.signupText}>Don't have an account? <Link to="/signup" className={styles.signupLink}>Sign up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
