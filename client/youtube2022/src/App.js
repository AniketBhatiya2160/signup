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
            element={!currentUser ? <Register /> : <Home />}
          />
          <Route path="/home" element={currentUser ? <Home /> : <Login />} />
          <Route
            path="/sellcar"
            element={currentUser ? <Sellcar /> : <Login />}
          />
          <Route
            path="/allcar"
            element={currentUser ? <Allcar /> : <Login />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
