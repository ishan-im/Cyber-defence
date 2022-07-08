import React, { Fragment , useState , useEffect} from 'react'

import  ReactDOM  from 'react-dom'
import classes from './Modal.module.css'
import { BsGoogle, BsFacebook } from 'react-icons/bs'

import {AiOutlineClose} from 'react-icons/ai'

import axios from 'axios'

import Router from "next/router"

import Link from 'next/link'

import { authenticate, isAuth } from "../helpers/auth"



const Modal = ({show, onClose})=> {

    const [state, setState] = useState({
    
        email: "ishanmondal713127@gmail.com",
        password: "12345678",
        error: "",
        buttonText: "Log In",
        success: ""
    
      });

    const [isBrowser, setIsBrowser] = useState(false)

    useEffect(()=>{

        isAuth() && Router.push('/')
  
    },[])


    const { name, email, password, error, buttonText, success } = state;
    
    
    
    
    const handleChange = (name) => (e) => {

        setState({
    
          ...state,
          [name]: e.target.value,
          error: "",
          success: "",
          buttonText: "Log In"
    
        });
      };




      const handleSubmit = async (e) =>{

        e.preventDefault();
    
        setState({
    
          ...state,
          buttonText: 'Logging In'
    
        })
    
        try{
    
          const response = await axios.post(`http://localhost:8080/api/login`,{
    
            
            email:email,
            password:password
    
    
          })
    
         
    
          console.log(response);
    
          authenticate(response, ()=>(isAuth() && isAuth().role === 'admin' ? Router.push('/admin') : Router.push('/user')))
    
    
        }
        
        catch(error){
    
          setState({
    
            ...state,
             buttonText: "Log In"
    
         })
    
        }
    
      }



    useEffect(()=>{

        setIsBrowser(true)

    },[])

    const handleClose = (e) =>{

        e.preventDefault();

        onClose();

    }


   

    const ModalOverLay = ()=>{

        return (
          <div className={classes.SignIn_backdrop}>
            <div className={classes.SignIn_container}>
              <div className={classes.btn}>
                <button onClick={handleClose}>
                  <AiOutlineClose />
                </button>
              </div>

              <div className={classes.SignIn_header}>
                <h1>Sign In</h1>
              </div>

              <div className={classes.SignIn_form}>

                <form onSubmit={handleSubmit}>

                  <div className={classes.SignIn_form_input}>
                    <label>Email</label>
                    <input 
                     value={email} 
                     type="email"
                     placeholder="Enter your Email" 
                     onChange={handleChange("email")}
                     required
                     />

                  </div>
                  <div className={classes.SignIn_form_input}>
                    <label>Password</label>

                    <input
                      type="password"
                      placeholder="Enter password (Min 6 characters long)"
                      value={password}
                      onChange={handleChange("password")}
                      required
                    />
                  </div>
                  {/* <div className={classes.SignIn_form_input_checkbox}>
                        <input type="checkbox" name="" id="" />
                        <p>Subscribe to our weekly Newsletter</p>
                    </div> */}
                  <div className={classes.SignIn_form_input_btn}>
                    <button type="submit">{buttonText}</button>
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
                <h5 className={classes.sign__Up}>
                  Didn't have an account?{" "}
                  <Link href="/register">
                    <a style={{ display: "inline-block", color: "#1B73E9" }}>
                      Sign Up!
                    </a>
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        );
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
