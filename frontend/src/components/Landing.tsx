import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './componentsCss/landing.css';
import Login from './Login';
import SignUp from './SignUp';
// import SignUp from './SignUp';

const Landing = () => {
    const [modalBool, setModalBool] = useState(false);
    const [loginBool, setLoginBool] = useState(false);
    // if (localStorage.getItem('id') !== null) return <Redirect to="/home" />;
    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'black',
                    height: '47.1em'
                }}
            >
                <div
                    className="landing"
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        margin: '1em'
                    }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                        alt="login_logo"
                    />
                    <div className="half">
                        <h1>Welcome to Farmgistic</h1>
                        <h2>A Place to Sell Crops</h2>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginTop: '4em'
                            }}
                        >
                            <button
                                className="btn"
                                onClick={() => setModalBool(true)}
                                id="sign_up"
                            >
                                Sign up
                            </button>
                            <SignUp show={modalBool} />
                            <button
                                onClick={() => setLoginBool(true)}
                                className="btn"
                                id="login"
                            >
                                Log in
                            </button>
                            <Login show={loginBool} />
                        </div>
                    </div>
                </div>
                <div className="landing_footer">
                    <a href="google.com">Contact us</a>
                    <a href="google.com">&copy;2021 Farmgistic</a>
                </div>
            </div>
        </div>
    );
};
export default Landing;
