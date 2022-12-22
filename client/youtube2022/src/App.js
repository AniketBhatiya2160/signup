import React from "react";

import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
// import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./app.css";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
// import Sellcar from "./pages/Sellcar";
// import Allcar from "./pages/Allcar";
// import Upadate from "./pages/Upadate";
import Cardetails from "./pages/Cardetails";
import { ToastContainer } from "react-toastify";
import Details from "./utils/Details";
// import Card from "./utils/Card";
import CardDetails from "./utils/CardDetails";


const LazyHome = React.lazy(() => import("./pages/Home"));
const LazySellcar = React.lazy(() => import("./pages/Sellcar"));
const LazyAllcar = React.lazy(() => import("./pages/Allcar"));
const LazyCard = React.lazy(() => import("./utils/Card"));

const LazyUpadate = React.lazy(() => import("./pages/Upadate"));

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
            element={
              !currentUser ? (
                <React.Suspense fallback="Loading....Please wait for a while...">
                  <LazyCard />
                </React.Suspense>
              ) : (
                <Navigate replace to="/" />
              )
            }
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
            element={
              currentUser ? (
                <React.Suspense fallback="Loading....Please wait for a while...">
                  <LazyHome />
                </React.Suspense>
              ) : (
                <Navigate replace to="/" />
              )
            }
          />
          <Route
            path="/sellcar"
            element={
              currentUser ? (
                <React.Suspense fallback="Loading....Please wait for a while...">
                  <LazySellcar />
                </React.Suspense>
              ) : (
                <Navigate replace to="/" />
              )
            }
          />
          <Route
            path="/allcar"
            element={
              currentUser ? (
                <React.Suspense fallback="Loading....Please wait for a while...">
                  <LazyAllcar />
                </React.Suspense>
              ) : (
                <Navigate replace to="/" />
              )
            }
          />
          <Route
            path="/upadatecar/:r_id"
            element={
              currentUser ? (
                <React.Suspense fallback="Loading....Please wait for a while...">
                  <LazyUpadate />
                </React.Suspense>
              ) : (
                <Navigate replace to="/" />
              )
            }
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
