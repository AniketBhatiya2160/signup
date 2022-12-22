import * as Yup from "yup";

export const signUpSchema = Yup.object({
  username: Yup.string().min(4).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});

export const sellSchema = Yup.object({
  c_name: Yup.string().min(3).max(25).required("Please enter car  make"),
  model: Yup.string().required("Please enter model name"),
  date: Yup.date().max(new Date()).required("Please enter date before today "),
  s_price: Yup.string().required("please enter sell price"),
  miles: Yup.number()
    .typeError("please enter number")
    .positive()
    .required("please enter mile covered by car"),
  // car_n: Yup.string().required("enter registration number"),
  img: Yup.mixed().test(
    "required",
    "Please upload a atleast one pic",
    (value) => {
      return value != null;
    }
  ),
  car_n: Yup.string().required("please enter registration number"),
});

// export const upadateSchema = Yup.object({
//   c_name: Yup.string().min(3).max(25).required("Please enter car  make"),
//   model: Yup.string().required("Please enter model name"),
//   date: Yup.date().max(new Date()).required("Please enter date before today "),
//   s_price: Yup.string().required("please enter sell price"),
//   miles: Yup.number()
//     .typeError("please enter number")
//     .positive()
//     .required("please enter mile covered by car"),
//   // car_n: Yup.string().required("enter registration number"),
//   img: Yup.mixed().test(
//     "required",
//     "Please upload a atleast one pic",
//     (value) => {
//       return value != null;
//     }
//   ),
// });
