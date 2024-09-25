import React from 'react'
import CloseButton from './CloseButton';

const RegisterModal = (props) => {
    const { open, setLoginOpen, setSignupOpen } = props;
    if (!open) return null;

    const switchLogin = (event) => {
        setSignupOpen(false)
        setLoginOpen(true)
    }

    return (
        <div className='overlay'>
            <div className='modal'>
                <CloseButton onClick={(event) => { setLoginOpen(false) }} />
                <h2>Register for an account</h2>
                {/* Register form goes here */}
                <form>
                    <label>
                        Email
                        <br />
                        <input type='email' />
                    </label>
                    <label>
                        Password
                        <br />
                        <input type='password' />
                    </label>
                    <label>
                        Confirm Password
                        <br />
                        <input type='password' />
                    </label>
                    <button className='login-button' type='submit'>
                        Register
                    </button>
                </form>
                <button className='register-button' type='submit' onClick={switchLogin}>
                    Already have an account? Log in
                </button>
            </div>
        </div>
    );
};

export default RegisterModal