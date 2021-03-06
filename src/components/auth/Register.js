import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import "../../css/Register.css";
import Swal from 'sweetalert2';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [status, setStatus] = useState(0);
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passworErr, setPasswordErr] = useState(false);
  const [passworConfirmationErr, setPasswordConfirmationErr] = useState(false);
  const [msgErr, setMsgErr] = useState('');

  useEffect(() => {
    validate();
  }, [name, email, password, password_confirmation]);

  const validateEmail = new RegExp("^[a-z0-9]+@gmail([\.])com$");

  const validatePassword = new RegExp(
    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[!@$^%()])[A-Za-][a-zA-Z0-9!@$%^&()]{6,}$"
  );
  const validdateName = new RegExp("^[a-zA-Z0-9]{1,20}$");

  const validate = () => {
    if (name !== "" && !validdateName.test(name)) {
      setNameErr(true);
    } else {
      setNameErr(false);
    }
    if (email !== "" && !validateEmail.test(email)) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
    if (password !== "" && !validatePassword.test(password)) {
      setPasswordErr(true);
    } else {
      setPasswordErr(false);
    }
    if (password_confirmation !== "" && password_confirmation !== password) {
      setPasswordConfirmationErr(true);
    } else {
      setPasswordConfirmationErr(false);
    }
  };

  const data = {
    name,
    email,
    password,
    password_confirmation,
    role: 0
  };
  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/auth/signup", data)
      .then((res) => {
        console.log(res);
        setStatus(1);
        Swal.fire({
          icon: 'success',
          text: '????ng k?? th??nh c??ng!',
        })
      })
      .catch((err) => {
        setStatus(err.response.status);
        setMsgErr(err.response.data.message);
      });
  };

  let Errmsg;

  if (status === 1) {
    return <Redirect to={"/user/login"} />;
  } else if (status === 400 && msgErr === 'ER002') {
    Errmsg = "Email ???? t???n t???i";
  } else if (status === 400 && msgErr === 'ER003') {
    Errmsg = "T??n ng?????i d??ng ???? t???n t???i";
  } else if (status === 401) {
    Errmsg = "Email kh??ng kh??? d???ng"
  } else if (status === 423) {
    Errmsg = "T??i kho???n ???? b??? kh??a"
  } else {
    Errmsg = "";
  }

  return (
    <div className="register">
      <div className="register-header">
        <h2 className="text-center w-100 font-weight-bold">????ng k??</h2>
      </div>
      <p className="err mb-1 text-center" style={{ color: "red" }}>
        {Errmsg}
      </p>
      <div className="register-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="form-group my-2">
            <label>
              Email:
              <input
                type="email"
                placeholder="Enter email"
                className="form-control"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {emailErr ? (
                <span style={{ color: "red" }}>Email sai ?????nh d???ng</span>
              ) : (
                ""
              )}
            </label>
          </div>
          <div className="form-group my-2">
            <label>
              T??n ng?????i d??ng:
              <input
                type="text"
                placeholder="Enter name"
                className="form-control"
                name="name"
                id="name"
                onChange={(e) => setName(e.target.value)}
                required
              />
              {nameErr ? (
                <span style={{ color: "red" }}>T??n sai ?????nh d???ng</span>
              ) : (
                ""
              )}
            </label>
          </div>
          <div className="form-group my-2">
            <label>
              M???t kh???u:
              <input
                type="password"
                placeholder="Enter password"
                className="form-control"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {passworErr ? (
                <span style={{ color: "red" }}>M???t kh???u sai ?????nh d???ng (g???m ??t nh???t 1 ch??? hoa, ch??? th?????ng, s??? v?? k?? t??? ?????c bi???t !@$^%())</span>
              ) : (
                ""
              )}
            </label>
          </div>
          <div className="form-group my-2">
            <label>
              Nh???p l???i m???t kh???u:
              <input
                type="password"
                placeholder="Enter password confirmation"
                className="form-control"
                name="password-confirmation"
                id="password-confirmation"
                onChange={(e) => setPassword_confirmation(e.target.value)}
                required
              />
              {passworConfirmationErr ? (
                <span style={{ color: "red" }}>M???y kh???u kh??ng kh???p</span>
              ) : (
                ""
              )}
            </label>
          </div>
          <div className="form-group my-2 form-check">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
                required
              />
              <p>
                T??i ???? ?????c v?? ?????ng ?? c??c ??i???u ki???n
                <Link to="/"> Th???a thu???n s??? d???ng</Link>.
              </p>
            </label>
          </div>
          <div className="form-group my-2">
            <button type="submit" className="btn btn-danger btn-block btn-lg">
              ????ng k??
            </button>
          </div>
        </form>
      </div>
      <div className="register-footer">
        <p>
          B???n ???? c?? t??i kho???n r???i? <Link to="/user/login">????ng nh???p</Link>.
        </p>
      </div>
    </div>
  );
};

export default Register;
