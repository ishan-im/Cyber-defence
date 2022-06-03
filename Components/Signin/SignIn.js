import React from 'react'
import classes from './SignIn.module.css'
import { BsGoogle, BsFacebook } from 'react-icons/bs'
export default function SignIn() {
    return (
        <div className={classes.SignIn_parentContainer}>
            <div className={classes.SignIn_container}>
                <div className={classes.SignIn_header}>
                    <h1>Sign In</h1>
                </div>
                <div className={classes.SignIn_form}>
                    <form>
                        <div className={classes.SignIn_form_input}>
                            <label>Email</label>
                            <input type="email" placeholder="Enter your Email" />
                        </div>
                        <div className={classes.SignIn_form_input}>
                            <label>Password</label>
                            <input type="password" placeholder="Enter password (Min 6 characters long)" />
                        </div>
                        <div className={classes.SignIn_form_input_checkbox}>
                            <input type="checkbox" name="" id="" />
                            <p>Subscribe to our weekly Newsletter</p>
                        </div>
                        <div className={classes.SignIn_form_input_btn}>
                            <button type="submit">Sign In</button>
                        </div>
                    </form>
                    <div className={classes.SignIn_others}>
                        <h3>Or</h3>
                        <h3>Sign in using</h3>
                        <div className={classes.SignIn_others_accounts}>
                            <BsGoogle />
                            <BsFacebook />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
