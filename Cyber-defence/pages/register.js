const { Fragment, useState } = require("react")

import Head from 'next/head'

import classes from '../styles/register.module.css'

import axios from 'axios'

import {showSuccessMessage, showErrorMessage} from '../Components/helpers/alert'


const Register = () => {

    const [state, setState] = useState({

        name: "Ishan",
        email: "ishanmondal713127@gmail.com",
        password: "12345678",
        error: "",
        buttonText: "Sign UP",
        success: "",

      });


    const { name, email, password, error, buttonText, success } = state;  
    

    const handleChange = (name) => (e) => {
        setState({
          ...state,
          [name]: e.target.value,
          error: "",
          success: "",
          buttonText: "Sign UP",
        });
      };

    


    
    
    
    
    
    const handleSubmit = async (e) =>{

        e.preventDefault();
    
        setState({
          ...state,
          buttonText: 'Signing Up'
        })
        try{
    
          const response = await axios.post(`http://localhost:8080/api/register`,{
    
            name:name,
            email:email,
            password:password
    
          })
    
          setState({
    
            ...state,
            name: "",
            email: "",
            password: "",
            error: "",
            buttonText: "Submitted",
            success: response.data.message
    
    
          });
    
          console.log(response.data);
    
    
        }catch(error){
    
          setState({
    
            ...state,
             buttonText: "Sign UP",
             error: error.response.data
    
         })
    
        }
    
      }  

      

      const registrationForm = () =>{


        <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Your Name
          </label>
          <input
            type="name"
            value={name}
            onChange={handleChange("name")}
            className="form-control"
            placeholder="Full Name"
            id="exampleInputName"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            value={email}
            onChange={handleChange("email")}
            className="form-control"
            placeholder="name@email.com"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            value={password}
            onChange={handleChange("password")}
            type="password"
            className="form-control"
            placeholder="min 6 characters long"
            id="exampleInputPassword1"
          />
        </div>
        {/* <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Subscribe to our weekly Newsletter!
          </label>
        </div> */}
        <button type="submit" className="btn btn-primary">
          {buttonText}
        </button>
      </form>

      }





    return (
      <Fragment>

        <Head>
        <title>Sign up!</title>

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossOrigin="anonymous"
        />
       </Head>
       

        <div className={classes.container}>

          <h2> Welcome to the World of Cyber Security</h2>

          {success && showSuccessMessage(success)}
          {error && showErrorMessage(error)}

          <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Your Name
          </label>
          <input
            type="name"
            value={name}
            onChange={handleChange("name")}
            className="form-control"
            placeholder="Full Name"
            id="exampleInputName"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            value={email}
            onChange={handleChange("email")}
            className="form-control"
            placeholder="name@email.com"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            value={password}
            onChange={handleChange("password")}
            type="password"
            className="form-control"
            placeholder="min 6 characters long"
            id="exampleInputPassword1"
          />
        </div>
        {/* <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Subscribe to our weekly Newsletter!
          </label>
        </div> */}
        <button type="submit" className="btn btn-primary">
          {buttonText}
        </button>
      </form>

         
        </div>

        
      </Fragment>
    );

}


export default Register