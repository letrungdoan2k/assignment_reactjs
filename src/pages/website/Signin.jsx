import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { signin, signup } from "../../api/authAPI";
import { authenticate } from "../../authenticate";
import { useState } from "react";


const Signin = () => {
  const [error, setError] = useState("");

  const provider = new GoogleAuthProvider();

  const googleSignin = () => {
    signInWithPopup(auth, provider);
  };

  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    try {
      signin(data)
        .then((response) => {
          // Lưu thông tin vào localStorage
          if (response.data.error != "Unauthorised") {
            authenticate(response.data);
              navigate('/admin');
            // if (response.data.user.role_id === 1) {
            //   navigate('/admin');
            // } else {
            //   navigate('/');
            // }
          } else{
            setError("Sai Email/Password")
          }
        })
    } catch (error) {
      console.log('Error', error);
    }

  };


  return (
    <div className="modal">
      <div className="modal__overlay">
      </div>

      <div className="modal__body">
        {/* form login */}
        <div className="auth-form">
          <div className="auth-form__header">
            <h3 className="auth-form__heading">
              Đăng nhập
            </h3>
            <Link to="/" className="auth-form__heading-img">
              <img src="./assets/img/x.png" alt="" />
            </Link>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="auth-form__group">
              <span class="auth-form__input-error">{error}</span>
              <input type="text" className="auth-form__input" placeholder="Nhập email" {...register("email", { required: true })} />
              {errors.email && <span class="auth-form__input-error">Hãy nhập email</span>}
              {/* <span class="auth-form__input-error">Email của bạn đã tồn tại</span> */}
            </div>
            <div className="auth-form__group">
              <input type="password" className="auth-form__input" placeholder="Nhập password" {...register("password", { required: true })} />
              {errors.password && <span class="auth-form__input-error">Hãy nhập password</span>}
              {/* <span class="auth-form__input-error">Email của bạn đã tồn tại</span> */}
            </div>
            <div className="auth-form__group auth-form__group-btn">
              <a className="auth-form-forget-password">Quên mật khẩu</a>
              <button className="btn btn--primary btn-login" type="submit">
                Đăng nhập
              </button>
            </div>
          </form>
          <div className="auth-form__or">
            <hr />
            <p>Hoặc</p>
          </div>
          <div className="auth-form__socials">
            <button to="" className="btn btn-width-icon btn-facebook">
              <i className="fab fa-facebook" />
              Facebook
            </button>
            {/* <button onClick={googleSignin} className="btn btn-width-icon btn-google"> */}
            <button className="btn btn-width-icon btn-google">
              <i className="fab fa-google" />
              Google
            </button>
          </div>
          <div className="auth-form__footer">
            <h4 className="auth-form__policy-h4">
              Bạn chưa có tài khoản?
              <Link to="/signup" className=" ">
                Đăng ký
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signin;
