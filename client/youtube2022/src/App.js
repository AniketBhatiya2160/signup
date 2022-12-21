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
import { ToastContainer } from "react-toastify";
import Details from "./utils/Details";
import Card from "./utils/Card";
import CardDetails from "./utils/CardDetails";

function App() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={!currentUser ? <Login /> : <Navigate replace to="/" />}
          />
          <Route
            path="/"
            element={!currentUser ? <Card /> : <Navigate replace to="/" />}
          />
          <Route
            path="/registration"
            element={!currentUser ? <Register /> : <Navigate replace to="/" />}
          />
          <Route
            path="/alldetails/:r_id"
            element={
              !currentUser ? <CardDetails /> : <Navigate replace to="/" />
            }
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
          <Route
            path="/exdetails/:r_id"
            element={currentUser ? <Details /> : <Navigate replace to="/" />}
          />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
