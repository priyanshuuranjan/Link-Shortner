import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

const Navbar = () => {
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
  return (
    <>
      <nav className="navbar navbar-fixed-top navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              Toolbox
            </a>
          </div>

          <div className="nav navbar-header navbar-profile  pull-right">
            <ul className="nav">
              <li className="dropdown ">
                <a href="#" data-toggle="dropdown" className="dropdown-toggle">
                  <span className="glyphicon glyphicon-user"></span>
                  <b className="caret"></b>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/users/id" title="Profile">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a href="/logout" title="Logout">
                      Logout{" "}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        classNameName="p-4 box mt-3 text-center"
        style={{ backgroundColor: "#f8f9fa", borderRadius: "5px" }}
      >
        <h4 style={{ margin: 0 }}>Hello, Welcome</h4>
        <p style={{ margin: 0 }}>{user && user.email}</p>
      </div>
      <div classNameName="d-grid gap-2 mt-3">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Navbar;
