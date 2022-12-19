import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./app.css";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import Sellcar from "./pages/Sellcar";
import Allcar from "./pages/Allcar";
import Upadate from "./pages/Upadate";
import Cardetails from "./pages/Cardetails";

function App() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={!currentUser ? <Login /> : <Navigate replace to="/" />}
          />
          <Route
            path="/registration"
            element={!currentUser ? <Register /> : <Navigate replace to="/" />}
          />
          <Route
            path="/home"
            element={currentUser ? <Home /> : <Navigate replace to="/" />}
          />
          <Route
            path="/sellcar"
            element={currentUser ? <Sellcar /> : <Navigate replace to="/" />}
          />
          <Route
            path="/allcar"
            element={currentUser ? <Allcar /> : <Navigate replace to="/" />}
          />
          <Route
            path="/upadatecar/:r_id"
            element={currentUser ? <Upadate /> : <Navigate replace to="/" />}
          />
          <Route
            path="/cardetails/:r_id"
            element={currentUser ? <Cardetails /> : <Navigate replace to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
