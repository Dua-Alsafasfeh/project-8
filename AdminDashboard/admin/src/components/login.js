
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { emailORUsername, login, password } from "../actions/loginAction";
import '../style/login.css'


function Login() {
    const dispatch = useDispatch();

    const errorLog = useSelector(state => state.login);
    const Fun = (e) => {
        e.preventDefault();
        dispatch(login());
    }

    return (

        <>
        <div class="full-screen-container">
      <div class="login-container">
        <h3 class="login-title">Welcome</h3>
        <form onSubmit={(e) => Fun(e)}>
          <div class="input-group">
            <label>Email</label>
            <input 
            type="email"
            id="email"
            onChange={(e)=>dispatch(emailORUsername(e.target.value))} />
          </div>
          <div class="input-group">
            <label>Password</label>
            <input 
            type="password"
            onChange={(e)=>dispatch(password(e.target.value))} />
          </div>
          <button type="submit" class="login-button">Sign In</button>
        </form>
      </div>
    </div>
        </>
        // <section className="vh-100">
        //     <div className="container-fluid h-custom">
        //         <div className="row d-flex justify-content-center align-items-center h-100">
        //             <div className="col-md-9 col-lg-6 col-xl-5">
        //                 <img
        //                     src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
        //                     className="img-fluid"
        //                     alt="Sample image"
        //                 />
        //             </div>
        //             <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        //                 <form onSubmit={(e) => Fun(e)}>

        //                     <div className="divider d-flex align-items-center my-4">
        //                         <h1 className="text-center fw-bold mx-3 mb-0">Login</h1>
        //                     </div>
        //                     {/* Email input */}
        //                     <div className="form-outline mb-4">
        //                         <label className="form-label" htmlFor="form3Example3">
        //                             Email address
        //                         </label>
        //                         <input
        //                             type="email"
        //                             id="form3Example3"
        //                             className="form-control form-control-lg"
        //                             placeholder="Enter a valid email address"
        //                             onChange={(e) => dispatch(emailORUsername(e.target.value))}
        //                         />
        //                     </div>
        //                     {/* Password input */}
        //                     <div className="form-outline mb-3">
        //                         <label className="form-label" htmlFor="form3Example4">
        //                             Password
        //                         </label>
        //                         <input
        //                             type="password"
        //                             id="form3Example4"
        //                             className="form-control form-control-lg"
        //                             placeholder="Enter password"
        //                             onChange={(e) => dispatch(password(e.target.value))}
        //                         />
        //                     </div>
        //                     <div className="d-flex justify-content-between align-items-center">
        //                         {/* Checkbox */}
        //                         <div className="form-check mb-0">
        //                             <input
        //                                 className="form-check-input me-2"
        //                                 type="checkbox"
        //                                 defaultValue=""
        //                                 id="form2Example3"
        //                             />
        //                             <label className="form-check-label" htmlFor="form2Example3">
        //                                 Remember me
        //                             </label>
        //                         </div>
        //                         <a href="#!" className="text-body">
        //                             Forgot password?
        //                         </a>
        //                     </div>
        //                     <div className="text-center text-lg-start mt-4 pt-2">
        //                         <input
        //                             defaultValue="Login"
        //                             type="submit"
        //                             className="btn btn-primary btn-lg"
        //                             style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
        //                         />

        //                         <p className="small fw-bold mt-2 pt-1 mb-0">
        //                             Don't have an account?{" "}
        //                             <a href="#!" className="link-danger ">
        //                                 Register
        //                             </a>
        //                         </p>
        //                     </div>
        //                 </form>
        //             </div>
        //         </div>
        //     </div>


        // </section>

    )

}

export default Login;