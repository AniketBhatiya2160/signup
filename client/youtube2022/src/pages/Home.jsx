import React, { useContext } from "react";
import Header from "../components/Header";

// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <Header />
      <div className="bg">
        <div className="wel">
          <p>
            Welcome {currentUser?.username} !Here you can sell your car with
            filling simple form.
          </p>
        </div>
      </div>
      {/* <div className="home">
        <div className="row d-flex justify-content-center">
          <div className="col-md-7">
            <div className="card p-3 py-4">
              <div className="text-center">
                <img
                  src="https://i.imgur.com/bDLhJiP.jpg"
                  width="100"
                  className="rounded-circle"
                  alt="profile pic"
                />
              </div>

              <div className="text-center mt-3">
                <h5 className="mt-2 mb-0">
                  Welcome {currentUser?.username} .here you can sell your car
                </h5>
                <span>Email:{currentUser?.email}</span>

                {currentUser && (
                    <div className="buttons">
                      <button
                        onClick={logout}
                        className="btn btn-outline-primary px-4"
                      >
                        Logout
                      </button>
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
