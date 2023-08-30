import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
// import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import ProtectedRoute from "./Components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <Router>
          <Routes>
          
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Navbar/>
                  <Home />
                </ProtectedRoute>
              }
            />
           
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route path="/navbar" element={<Navbar />} /> */}
          </Routes>
        </Router>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;

