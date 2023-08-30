import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BackgroundAnimate from "./BackgroundAnimate";
import InputShortener from "./InputShortener";
import LinkResult from "./LinkResult";
import { auth } from "../../firebase.js";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/UserAuthContext";

function Home(props) {
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
    <>
    {/* <div className="container">
      <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
        {user && user.email}
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div> */}

      <h2>{userName ? `Welcome - ${userName}` : "Login please"}</h2>

      <InputShortener setInputValue={setInputValue} />
      <LinkResult inputValue={inputValue} />
      <BackgroundAnimate />
    {/* </div> */}
    </>
  );
}

export default Home;
