import classes from "./card.module.css";
import Image from "next/image";
import logo from "../../public/assests/image/logo-vertical.png";
import user from "../../public/assests/image/user.png";
import content from "../../public/assests/image/cyber.jpg";
import { FcNext} from "react-icons/fc";

import {BiLike, BiDislike} from 'react-icons/bi'

import {GoBookmark} from 'react-icons/go'

const parse = require("html-react-parser");

import renderHTML from 'react-render-html';

export default function Card({ title, imageUrl, content, userName}) {

  return (

    <article  className={classes.article}>

      <div className={classes.article__profileImage}>

        <img
          src='https://via.placeholder.com/100x100.png?text=Cyber+Defence'
          style={{ height: "50px", width: "50px", borderRadius: "50%" }}
          
        />

      </div>

      <div className={classes.article__userName}>
        <h3>{userName}</h3>
      </div>

      <div className={classes.article__headLine}>
        <h2>{title}</h2>
      </div>

      <div className={classes.article__wrapper}>

        <div className={classes.paragraph__wrapper}>
      {/* <div className={classes.article__paragraph}></div> */}

      {parse(content.substring(0, 400))}
      <div className={classes.article__readMorebtn}>
        <a>
          Read More 
            
            <FcNext/><FcNext/>
           
        </a>
      </div>

      </div>


      <div className={classes.article__contentImage}>
        <img src={imageUrl} style={{ height: "150px", width: "250px" }} alt={title}/>
      </div>

      </div>

    <div className={classes.icons}>
      <div>
      <BiLike size='1.4rem'/> <BiDislike size='1.4rem'/>
      </div>
      <div className={classes.bookmark}>
        <GoBookmark size='1.4rem'/>
      </div>
    </div>
      
    </article>
    
  );
}
