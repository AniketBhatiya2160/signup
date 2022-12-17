import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialValues = {
  username: "",
  email: "",
  password: "",
  confirm_password: "",
};

const Register = () => {
  // const [inputs, setInputs] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  // });

  // const [err, setError] = useState(null);

  const navigate = useNavigate();

  // const handleChange = (e) => {
  //   setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // }; //dk

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: async (values, action) => {
        try {
          await axios.post("http://10.0.1.205:8800/api/auth/register", values);
          navigate("/");
        } catch (err) {
          toast.error(err.response.data);
        }

        action.resetForm();
      },
    });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post("http://localhost:8800/api/auth/register", inputs);
  //     navigate("/");
  //   } catch (err) {
  //     setError(err.response.data);
  //   }
  // };

  return (
    <div className="auth">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <div className="mb-3">
            <input
              className="form-control"
              name="username"
              type="text"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter Name"
            />
            {errors.username && touched.username ? (
              <p className="form-error">{errors.username}</p>
            ) : null}
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              placeholder="Enter Email"
            />
            {errors.email && touched.email ? (
              <p className="form-error">{errors.email}</p>
            ) : null}
          </div>

          <div className="mb-3">
            <input
              className="form-control"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              type="password"
              placeholder="Enter Password"
            />
            {errors.password && touched.password ? (
              <p className="form-error">{errors.password}</p>
            ) : null}
          </div>

          <div className="mb-3">
            <input
              className="form-control"
              name="confirm_password"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
              type="password"
              placeholder="Enter confrim Password"
            />
            {errors.confirm_password && touched.password ? (
              <p className="form-error">{errors.confirm_password}</p>
            ) : null}
          </div>

          <button type="submit" className="btn btn-primary">
            Sign up
          </button>
          {/* {err && <p>{err}</p>} */}
          <span>
            For login click here <Link to="/">Login</Link>
          </span>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
