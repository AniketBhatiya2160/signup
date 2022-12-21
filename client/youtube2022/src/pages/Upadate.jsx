import axios from "axios";
import { useFormik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import { AuthContext } from "../context/authContext";
import { sellSchema } from "../schemas";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Upadate = () => {
  const { currentUser } = useContext(AuthContext);
  const params = useParams();
  const { r_id } = params;
  const state = useLocation().state[0];
  const [pics, setPics] = useState(JSON.parse(state.img));

  const initialValues = {
    c_name: state?.c_name,
    model: state?.model,
    date: state?.date.slice(0, 10),
    miles: state?.miles,
    s_price: state?.s_price,
    img: state?.img,
    id: currentUser.id,
    car_n: state?.car_n,
  };

  // const params = useParams();
  // console.log(state);

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
    onSubmit: async (values) => {
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
      console.log("vinay");
      console.log(arr1);
      let img2;
      arr1.length > 0 ? (img2 = JSON.stringify(arr1)) : (img2 = state.img);
      values.img = img2;
      try {
        // console.log("aniket");
        await axios.put(
          `http://10.0.1.205:8800/api/cars/upadatecar/${r_id}`,
          values,
          { headers: { authorization: `Bearer ${currentUser.token}` } }
        );
        // toast.success("upadated successfully");

        navigate("/home");
      } catch (error) {
        toast.error(error);
      }

      // action.resetForm();
    },
  });

  const removeImage = (e) => {
    console.log(e);
    // console.log("dsjdhsd", setPics);

    const filteredData = pics?.filter((item) => item !== e);
    setPics(filteredData);
    // console.log(oldState);
    // oldState.filter((item) => item !== e);
  };

  useEffect(() => {
    setPics(pics);
  }, []);

  console.log(pics);
  return (
    <div>
      <div>
        <Header />
        <div className="auth">
          <div className="form">
            <form onSubmit={handleSubmit}>
              <h1>Upadate car details</h1>
              <div className="mb-3">
                <input
                  className="form-control"
                  id="avee"
                  name="c_name"
                  type="text"
                  value={values.c_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="car make  "
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

                {errors.s_price && touched.s_price ? (
                  <p className="form-error">{errors.s_price}</p>
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

                {pics?.length > 0
                  ? Array.from(pics).map((e) => (
                      <div className="thumb">
                        <div key={e}>
                          <img
                            className="d-block w-100"
                            src={`../uploads/${e}`}
                           
                            alt="car?.p_name"
                            style={{ width: "100px" }}
                          />
                          <button className="imgbtn"  onClick={() => removeImage(e)}> delete</button>
                        </div>
                      </div>
                    ))
                  : null}

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
                Upadate
              </button>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Upadate;
