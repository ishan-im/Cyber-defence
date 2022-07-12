import Link from "next/link";

import { useState } from "react";

import axios from "axios";
import { Fragment } from "react";

import parse from 'html-react-parser'

import parser from 'react-render-html'

import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import Contents from "../Components/Contents/Contents";
import classes from "../styles/Home.module.css";

import Head from "next/head";


import { BootstrapHead } from "../Components/head/head";


export async function getServerSideProps({req,query}) {


  console.log('from [slug] ',query);

    const response = await axios.post(`http://localhost:8080/api/content/${query.content}`)

    console.log('from [content] :', response);

    

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

      <Fragment>

          <BootstrapHead/>
          
            <div className="container  p-4">

                <h1>{module.title}</h1>
                <p>Posted By {module.postedBy.name}</p>

                <img src={module.image.url} alt={module.slug} p-2/>

                <article>
                  {parse(module.content)}
                </article>
            </div>

      </Fragment>
       
    )
}