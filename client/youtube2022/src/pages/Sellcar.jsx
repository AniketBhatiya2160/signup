import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { AuthContext } from "../context/authContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import { sellSchema } from "../schemas";

const Sellcar = () => {
  const { currentUser } = useContext(AuthContext);

  const initialValues = {
    c_name: "",
    model: "",
    date: "",
    miles: "",
    s_price: "",
    img: "",
    id: currentUser.id,
    car_n: "",
  };

  // const upload = async (e) => {
  //   try {
  //     console.log(img);
  //     const formData = new FormData();

  //     Array.from(img).map((item) => {
  //       formData.append("img", item);
  //     });
  //     const res = await axios.post("http://10.0.1.205:8800/uploads", formData);
  //     return res.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const navigate = useNavigate();

  const {
    values,
    errors,
    touched,
    setFieldValue,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: sellSchema,
    onSubmit: async (values, action) => {
      const upload = async (e) => {
        try {
          const formData = new FormData();

          Array.from(values.img).map((item) => {
            formData.append("img", item);
          });

          console.log("aniket");
          const res = await axios.post(
            "http://10.0.1.205:8800/uploads",
            formData
          );
          return res.data;
        } catch (error) {
          console.log(error);
        }
      };

      const imgUrl = await upload();
      console.log(imgUrl);
      let arr1 = [];
      imgUrl.map((img) => {
        arr1.push(img.filename);
      });
      console.log(arr1);
      let img2 = JSON.stringify(arr1);
      console.log(img2);
      values.img = img2;
                
      try {
        console.log("aniket");
        await axios.post("http://10.0.1.205:8800/api/cars/addcar", values, {
          headers: { authorization: `Bearer ${currentUser.token}` },
        });
        toast.success("successfully added car");
        navigate("/home");
      } catch (err) {
        toast.error(err.response.data);
      }
    },
  });

  return (
    <div>
      <Header />
      <div className="auth">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <h1>Add car to sell</h1>
            <div className="mb-3">
              <input
                className="form-control"
                id="avee"
                name="c_name"
                type="text"
                value={values.c_name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="car make"
              />
              {errors.c_name && touched.c_name ? (
                <p className="form-error">{errors.c_name}</p>
              ) : null}
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                name="model"
                value={values.model}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                placeholder="model name"
              />
              {errors.model && touched.model ? (
                <p className="form-error">{errors.model}</p>
              ) : null}
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                name="date"
                value={values.date}
                type="date"
                onChange={handleChange}
                onBlur={handleBlur}
                data-date-format="dd/mm/yyyy"
                placeholder="enter date"
              />
              {errors.date && touched.date ? (
                <p className="form-error">{errors.date}</p>
              ) : null}
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                name="miles"
                value={values.miles}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                placeholder="enter miles"
              />

              {errors.miles && touched.miles ? (
                <p className="form-error">{errors.miles}</p>
              ) : null}
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                name="img"
                type="file"
                multiple
                //onChange={(e) => setImg(e.target.files)}

                onChange={(e) => setFieldValue("img", e.currentTarget.files)}
                placeholder="enter img"
                accept="image/x-png,image/gif,image/jpeg"
              />
              {errors.img && touched.img ? (
                <p className="form-error">{errors.img}</p>
              ) : null}
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                name="s_price"
                value={values.s_price}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                placeholder="enter selling price"
              />

              {errors.s_price && touched.s_price ? (
                <p className="form-error">{errors.s_price}</p>
              ) : null}
            </div>

            <div className="mb-3">
              <input
                className="form-control"
                name="car_n"
                type="text"
                value={values.car_n}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="enter car registration  number"
              />
              {errors.car_n && touched.car_n ? (
                <p className="form-error">{errors.car_n}</p>
              ) : null}
            </div>
            <br></br>
            <button type="submit" className="btn btn-primary">
              submit
            </button>
          </form>
        </div>
      </div>
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
    </div>
  );
};

export default Sellcar;
