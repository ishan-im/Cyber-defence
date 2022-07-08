import {isAuth, logOut, getCookie } from "../../Components/helpers/auth"

import axios from "axios"

import Link from 'next/link'
import Head from "next/head"
import { Fragment } from "react"



export const getServerSideProps = async ({req,res}) => {

    const token = getCookie('token', req)

    console.log(token);

    let user = null

    if(token){

        try {

            const response = await axios.get(`http://localhost:8080/api/admin`,{

                headers: {

                    authorization: `Bearer ${token}`,
                    contentType: 'application/json'

                }

        

            })

            user = response.data

            console.log(user);

        }catch(error){

            console.log(error);

            if(error.response.status === 401){


                user = null

            }

        }

        if(user === null){

            //redirect

            res.writeHead(302, {

                'Content-Type': 'text/plain',
                'Location': '/'

            });

            
            res.end('ok');

        }

        

    }

    return {props: {user}}
}




export default function Admin ({user}){



    const page = () =>{

        return (

            <div className="row d-flex justify-content-center">
        
        <div className="col-md-7">
            
            <div className="card p-4 py-4">

                
                <div className="text-center">

                <h4 className="my-2 mb-0">Hello Admin</h4>

                    <img src="https://via.placeholder.com/100x100.png?text=Cyber+Defence" width="100" className="rounded-circle mt-2"/>
                </div>
                
                <div className="text-center mt-3">
                    
                    <h5 className="mt-2 mb-0">{user.name}</h5>
                    <span>{user.role}</span>
                    
                    <div className="px-4 mt-1">
                        <p className="fonts">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        
                    </div>
                    
                    <div className="text-center m-3">

                    <span className="bg-secondary p-1 px-4 rounded text-white">Create Content</span>

                    </div>
                   
                    
                    <div className="buttons">

                        <Link href="/admin/create/blog">
                        <a  className="btn btn-primary m-2">
                            Create Blog
                        </a>
                        </Link>

                        <Link href="/admin/create/module">
                        <a  className="btn btn-primary m-2">
                            Create Module
                        </a>
                        </Link>

                        <Link href="/admin/create/blog">
                        <a  className="btn btn-primary m-2">
                            Create Newsletter
                        </a>
                        </Link>
                      
                        
                    </div>
                    
                    
                </div>
                
               
                
                
            </div>
            
        </div>
        
    </div>

        )
    }

    

    return (
        <Fragment>

            <Head>
                <title>Admin</title>

                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
                    crossOrigin="anonymous"
                />
            </Head>

        <div className="container p-3">

            
           {page()}

           
            <div className="text-center m-3">

            {
            isAuth() && <button className="btn btn-warning" onClick={logOut}>Log Out</button>
           }    

            </div>
        </div>

        

        </Fragment>
    )


}