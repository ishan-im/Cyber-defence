import Link from "next/link";

import { useState } from "react";

import axios from "axios";
import { Fragment } from "react";


export async function getServerSideProps({req,query}) {

   

    const response = await axios.post(`http://localhost:8080/api/content/${query.slug}`)

    console.log('from [content] :',response);

    const {data} = response

    const {module} = data

    // const totalLinks = Object.keys(data).length

    // console.log(totalLinks);

    return {

      props: {module}

    }
  }




export default function Content ({module}){
    return (
        
            <div>
                {JSON.stringify({module})}
            </div>
       
    )
}