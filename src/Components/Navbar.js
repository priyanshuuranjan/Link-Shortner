import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import "./Navbar.css";
import { auth } from "../firebase.js";

const Navbar = () => {
  function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('active');
  }

  const [userName, setUserName] = useState("");
  const [inputValue, setInputValue] = useState("");
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="navbar">
      <div>
        <a href="#"></a>
      </div>
      <div class="dropdown">
        <a onClick={toggleDropdown}>{userName ? ` ${userName}` : "" }</a>
        <div className="dropdown-content">
          <a href="#">Profile</a>
          <a onClick={handleLogout}>Logout</a>
        </div>
      </div>
    </div>

    // <div
    //   classNameNameName="p-4 box mt-3 text-center"
    //   style={{ backgroundColor: "#f8f9fa", borderRadius: "5px" }}
    // >
    //   <h4 style={{ margin: 0 }}>Hello, Welcome</h4>
    //   <p style={{ margin: 0 }}>{user && user.email}</p>
    // </div>
    // <div classNameNameNameName="d-grid gap-2 mt-3">
    //   <Button variant="primary" onClick={handleLogout}>
    //     Log out
    //   </Button>
    // </div>
  );
};

export default Navbar;
