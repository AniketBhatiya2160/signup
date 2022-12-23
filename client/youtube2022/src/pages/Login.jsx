import { useFormik } from "formik";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { loginSchema } from "../schemas/app";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Oheader from "../components/Oheader";

const initialValues = {
  username: "",
  password: "",
};

const Login = () => {
  // const [inputs, setInputs] = useState({
  //   username: "",
  //   password: "",
  // });

  // const [err, setError] = useState(null);

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  // const notify = () => toast("Wow so easy!");

  // const handleChange = (e) => {
  //   setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // }; //dk

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  // try {
  //   await login(inputs);
  //   navigate("/home");
  // } catch (err) {
  //   setError(err.response.data);
  // }
  // };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: async (values, action) => {
        try {
          await login(values);
          navigate("/home");
        } catch (err) {
          toast.error(err.response.data);
        }

        action.resetForm();
      },
    });
  return (
    <div>
      <Oheader />
      <div className="auth">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="form-group mb-3 ">
              <input
                className="form-control"
                name="username"
                onChange={handleChange}
                value={values.username}
                onBlur={handleBlur}
                type="text"
                placeholder="Enter username"
              />
              {errors.username && touched.username ? (
                <p className="form-error">{errors.username}</p>
              ) : null}
            </div>
            <div className="form-group  mb-3 ">

              <input
                className="form-control"
                onChange={handleChange}
                value={values.password}
                onBlur={handleBlur}
                name="password"
                type="password"
                placeholder="Enter Password"
              />

              
              {errors.password && touched.password ? (
                <p className="form-error">{errors.password}</p>
              ) : null}
            </div>
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
            {/* {errors && <p>{errors}</p>} */}
            <span>
              For registration click here{" "}
              <Link to="/registration">Register</Link>
            </span>
          </form>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
