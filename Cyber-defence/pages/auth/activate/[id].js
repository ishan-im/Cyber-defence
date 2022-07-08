import { Fragment, useEffect ,useState } from "react"

import  Jwt  from "jsonwebtoken"

import axios from "axios"

import {showSuccessMessage,showErrorMessage} from '../../../Components/helpers/alert'



import { withRouter } from "next/router"

const ActivateAcount = ({router}) => {

    const [state,setState] = useState({

        name:'',
        token:'',
        buttonText:'Activate Account',
        success:'',
        error:''

    })

    const {name, token, buttonText,success,error} = state

    useEffect(()=>{

        let token = router.query.id

        console.log(token);

        if(token){

            const {name} = Jwt.decode(token)

            setState({
                ...state, name, token
            })
        }
    },[router])

    const clickSubmit = async e =>{

        e.preventDefault();

        console.log('activate account');

        setState({
            ...state, buttonText:'Activating'
        })
        
        try{

            const response = await axios.post(`http://localhost:8080/api/register/activate`,{token})

            console.log(response);
            
            console.log('account activate response:', response );
            
            setState({...state, name:'', token:'', buttonText:'Activated', success:response.data.message})

        }
        catch(error){

            console.log(error);

            setState({
                ...state, buttonText:'Activate Account', error: error.response.data
            })

        }

    }

    return (

            <Fragment>

                

                <div className="container p-5">
                
                   <h1>Hello {name}, reday to activate your account :')' </h1> 
                   <br/>
                   {success && showSuccessMessage(success)}
                   {error && showErrorMessage(error)}
                   <div className="mb-3 col-md-6 offset-md-5 form-group">
                   <button className="btn btn-outline-warning btn-block" onClick={clickSubmit}>{buttonText}</button>
                   </div>
                
                </div>
            </Fragment>)

}

export default withRouter(ActivateAcount)