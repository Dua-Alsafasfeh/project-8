import React from 'react';
import { email, password, login } from '../actions/index'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

function Login() {
    const dispatch = useDispatch()
    const errorLog=useSelector(state=>state.login);
    const Fun = (e) => {
        e.preventDafault();
        dispatch(login());
    }
    return (
        <>
            <div>
                <form onSubmit={(e) => Fun(e)}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={(e) => dispatch(email(e.target.value))} />
                    <br />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={(e) => dispatch(password(e.target.value))} />
                    <br />
                    <span>{errorLog.error}</span>
                    <br />
                    <input type="submit" value="Login"/>
                </form>
            </div>
        </>
    )
}
export default Login
