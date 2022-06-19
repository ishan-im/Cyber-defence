import React, { Fragment } from 'react'
import { useState,useEffect } from 'react'
import  ReactDOM  from 'react-dom'
import classes from './Modal.module.css'
import { BsGoogle, BsFacebook } from 'react-icons/bs'

import {AiOutlineClose} from 'react-icons/ai'

import Link from 'next/link'




const Modal = ({show, onClose})=> {

    const [isBrowser, setIsBrowser] = useState(false)

    useEffect(()=>{

        setIsBrowser(true)

    },[])

    const handleClose = (e) =>{

        e.preventDefault();

        onClose();

    }


   

    const ModalOverLay = ()=>{

        return(

            <div className={classes.SignIn_backdrop}>
            <div className={classes.SignIn_container}>

            <div className={classes.btn}>
              <button onClick={handleClose} ><AiOutlineClose/></button>
            </div>

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
                    {/* <div className={classes.SignIn_form_input_checkbox}>
                        <input type="checkbox" name="" id="" />
                        <p>Subscribe to our weekly Newsletter</p>
                    </div> */}
                    <div className={classes.SignIn_form_input_btn}>
                        <button type="submit">Sign In</button>
                    </div>
                </form>
                <div className={classes.SignIn_others}>
                    <h5>Or</h5>
                    <h3>Sign in using</h3>
                    <div className={classes.SignIn_others_accounts}>
                        <BsGoogle />
                        <BsFacebook />
                    </div>
                
                </div>
                <h5 className={classes.sign__Up}>Didn't have an account? <Link href='/register'><a style={{"display":"inline-block", "color":"#1B73E9"}}>Sign Up!</a></Link></h5>
            </div>
         </div>
         </div>

        )
    }


    

    const modalOverlay = show ? (

             <ModalOverLay onClose={onClose}/>
    
    ) : null;

    
    if(isBrowser){

        return (ReactDOM.createPortal(modalOverlay, document.getElementById("modal-root")))

    }else{

        return null

    }


    
}


export default Modal
