import { useForm } from "react-hook-form";
import { signup } from "../../api/authAPI";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { authenticate } from "../../authenticate";

const Signup = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        // call API đăng ký tài khoản
        
        signup(data)
            .then((response) => {
                // authenticate(response.data.user);
                toast.success("Đăng ký thành công");

                navigate('/signin');
            })
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
                Đăng ký
              </h3>
              <Link to="/" className="auth-form__heading-img">
                <img src="./assets/img/x.png" alt="" />
              </Link>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} method="post">
            <div className="auth-form__group">
                <input type="text" className="auth-form__input" placeholder="Nhập name" {...register("name")}/>
                {/* <span class="auth-form__input-error">Email của bạn đã tồn tại</span> */}
              </div>
              <div className="auth-form__group">
                <input type="text" className="auth-form__input" placeholder="Nhập email" {...register("email")}/>
                {/* <span class="auth-form__input-error">Email của bạn đã tồn tại</span> */}
              </div>
              <div className="auth-form__group">
                <input type="password" className="auth-form__input" placeholder="Nhập password" {...register("password")}/>
                {/* <span class="auth-form__input-error">Email của bạn đã tồn tại</span> */}
              </div>
              <div className="auth-form__group">
                <input type="password" className="auth-form__input" placeholder="Nhập lại password" {...register("c_password")}/>
                {/* <span class="auth-form__input-error">Email của bạn đã tồn tại</span> */}
              </div>
              <div className="auth-form__group auth-form__group-btn">
                <button className="btn btn--primary btn--register">
                  Đăng ký
                </button>
              </div>
            </form>
            <div className="auth-form__or">
              <hr />
              <p>Hoặc</p>
            </div>
            <div className="auth-form__socials">
              <a href className="btn btn-width-icon btn-facebook">
                <i className="fab fa-facebook" />
                Facebook
              </a>
              <a href className="btn btn-width-icon btn-google">
                <i className="fab fa-google" />
                Google
              </a>
            </div>
            <div className="auth-form__aside">
              <p className="auth-form__policy-text">
                Bằng việc đăng kí, bạn đã đồng ý
                <a href className="auth-form__text-link">
                  Điều khoản dịch vụ 
                </a>
                &amp;
                <a href className="auth-form__text-link">
                  Chính sách bảo mật
                </a>
              </p>                   
            </div>
            <div className="auth-form__footer">
              <h4 className="auth-form__policy-h4">
                Bạn đã có tài khoản?
                <Link to="/signin" className=" ">
                  Đăng nhập
                </Link>
              </h4>
            </div>
          </div>
        </div>
        
      </div>
        // <form onSubmit={handleSubmit(onSubmit)}>
        //     <h2>Đăng ký</h2>
        //     <div>
        //         <input
        //             type="email"
        //             {...register("email")}
        //             placeholder="Email của bạn"
        //         />
        //     </div>
        //     <div>
        //         <input
        //             type="password"
        //             {...register("password")}
        //             placeholder="Mật khẩu"
        //         />
        //     </div>
        //     <button>Đăng ký</button>
        // </form>
    );
};

export default Signup;
