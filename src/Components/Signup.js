import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import styles from "./Login.module.css"; // Import the CSS module

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h2 className={styles.heading}>Sign Up</h2>
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
              Sign Up
            </Button>
          </div>
        </Form>
        <div className={styles.orText}>OR</div>
        <div className={styles.signupBox}>
          <p className={styles.signupText}>
            Already have an account? <Link to="/" className={styles.signupLink}>Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
