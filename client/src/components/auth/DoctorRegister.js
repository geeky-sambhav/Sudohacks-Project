import React, { useState, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/authDoctor";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const DoctorRegister = ({ setAlert, register, isDoctorAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;
  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Password do not match", "danger");
    } else {
      register({ name, email, password });
    }
  };
  if (isDoctorAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="style.css" />
        <title />
        <style
          dangerouslySetInnerHTML={{
            __html:
              'body{\n      margin: 0;\n      padding: 0;\n      bgcolor:#e0e0e0 no-repeat center;\n      background-size: cover;\n      height: 100vh;\n      \n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      font-family: "Open Sans",sans-serif;\n      color: #fff;\n      cursor: pointer;\n    }\n    \n    .content p{\n      width: 700px;\n      line-height: 26px;\n      font-size: 18px;\n      text-align: justify;\n    }\n    \n    .cursor{\n      position: fixed;\n      width: 25px;\n      height: 25px;\n      border: 1px solid #c6c6c6;\n      border-radius: 50%;\n      left: 0;\n      top: 0;\n      pointer-events: none;\n      transform: translate(-50%, -50%);\n      transition: .1s;\n    }\n    \n    .cursor2{\n      position: fixed;\n      width: 4px;\n      height: 4px;\n      background-color: #c6c6c6;\n      border-radius: 50%;\n      left: 0;\n      top: 0;\n      pointer-events: none;\n      transform: translate(-50%, -50%);\n      transition: .15s;\n    }\n    \n    .content:hover ~ .cursor{\n      transform: translate(-50%, -50%) scale(1.5);\n      background-color: #c6c6c6;\n      opacity: .5;\n    }\n    \n    .content:hover ~ .cursor2{\n      opacity: 0;\n    }',
          }}
        />
        <div className="content">
          <h1>Cursor Follow on MouseMove</h1>
        </div>
        <div className="cursor" />
        <div className="cursor2" />
      </>

      <section id="common">
        <div className="container">
          <div className="common-form">
            <div className="form-side">
              <div className="heading-common">
                <h1>
                  <strong>Doctor</strong>
                  <i className="fas fa-user-md"></i>
                </h1>
              </div>
              <form onSubmit={(e) => onSubmit(e)}>
                <div className="form-group">
                  <label className="label" for="exampleInputEmail1">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email address."
                    name="email"
                    value={email}
                    onChange={(e) => onChange(e)}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    This site uses{" "}
                    <a
                      href="https://en.gravatar.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Gravatar{" "}
                    </a>{" "}
                    so if you want a profile image, use a Gravatar email
                  </small>
                </div>
                <div className="form-group">
                  <label className="label" for="exampleInputEmail1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your full name."
                    name="name"
                    value={name}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label className="label" for="exampleInputPassword1">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password."
                    name="password"
                    value={password}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label className="label" for="exampleInputPassword1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password again."
                    name="password2"
                    value={password2}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <input type="submit" className="btn btn-info" value="Sign Up" />
              </form>
            </div>
            <div className="img-side">
              <img
                className="register-user"
                src={require("../../img/newDoctor1.svg")}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

DoctorRegister.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isDoctorAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isDoctorAuthenticated: state.authDoctor.isDoctorAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(DoctorRegister);
