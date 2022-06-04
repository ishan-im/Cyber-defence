// I have used framer motion here

import Head from "next/head";
import Image from "next/image";
import imageOne from "../public/assests/image/clip-art-1.png";
import imagetwo from "../public/assests/image/clip-art-2.png";
import imagethree from "../public/assests/image/clip-art-3.png";
import React from "react";
import {motion} from 'framer-motion';

function About() {
  let myStyle = {
    color: "green",
  };
// let headStyle = {
//   color:"white",  
//   backgroundColor: "black",
//   borderRadius: "15px",
//   width: "30%",
//   padding: "15px",
  
// }

  return (
    <React.Fragment>
      <Head>
        <title>About Us</title>

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossOrigin="anonymous"
        />
      </Head>
      
      <motion.h1 className="container my-5 mx-5 display-1"
      whileHover={{
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255,255,255)",
        originX: 0,
        color: 'purple',

      }}
      transition={{
        type: 'spring',
        stiffness: 300,
      }}
      >About Us</motion.h1>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossOrigin="anonymous"
      ></script>

      <figure className="text-center my-5">
        <motion.blockquote  className="blockquote" style={myStyle}
        // initial={{opacity: 0}}
        // animate={{color: '#ff2994' , opacity: 1}}
        whileHover={{
          scale: 1.01,
          color: 'purple',
          originX: 0,
  
        }}
        >
          <p>A well-known quote, contained in a blockquote element.</p>
        </motion.blockquote>
        <figcaption className="blockquote-footer my-3">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>
      </figure>

      <motion.div  className="clipArtOne rounded float-start mx-5"
      initial={{y : -250}}
      animate={{y : -10}}

      whileHover={{
        scale: 1.06,
        originX: 0,
        

      }}
      >
        <Image src={imageOne} alt="Picture of the author" />
      </motion.div>
      <div className="about mx-5">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsa
          fugit expedita? Eos vero, harum reiciendis officia aliquid sequi
          aliquam odio iure maiores a quam labore, laboriosam excepturi!
          Consequuntur mollitia eaque expedita nihil ullam laborum labore
          deleniti dolore. Culpa, necessitatibus esse! Possimus error sed qui
          nesciunt sapiente perferendis dolor recusandae! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Adipisci quaerat labore aspernatur
          sunt vero. Nesciunt, laudantium tenetur temporibus dolore, quia
          perferendis similique quis neque eum dicta assumenda iusto minus
          eveniet numquam minima ipsum vitae dolorem tempora, repudiandae
          consequatur quo ab deleniti laborum quisquam? Vel officia ipsum, eum
          ea unde dignissimos, provident eligendi, corrupti molestiae deserunt
          dolorem voluptatum incidunt nobis ipsam?
        </p>
      </div>
      <div className="container">
        <h2>Contributers Demo-1</h2>
      </div>
      <motion.div className="clipArttwo rounded float-end"
      initial={{x : 250}}
      animate={{x : 0}}
      whileHover={{
        scale: 1.06,
        originY: 0,
        

      }}
      >
        <Image src={imagetwo} alt="Picture of the author" />
      </motion.div>
      <div className="about mx-5">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsa
          fugit expedita? Eos vero, harum reiciendis officia aliquid sequi
          aliquam odio iure maiores a quam labore, laboriosam excepturi!
          Consequuntur mollitia eaque expedita nihil ullam laborum labore
          deleniti dolore. Culpa, necessitatibus esse! Possimus error sed qui
          nesciunt sapiente perferendis dolor recusandae! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Adipisci quaerat labore aspernatur
          sunt vero. Nesciunt, laudantium tenetur temporibus dolore, quia
          perferendis similique quis neque eum dicta assumenda iusto minus
          eveniet numquam minima ipsum vitae dolorem tempora, repudiandae
          consequatur quo ab deleniti laborum quisquam? Vel officia ipsum, eum
          ea unde dignissimos, provident eligendi, corrupti molestiae deserunt
          dolorem voluptatum incidunt nobis ipsam?
        </p>
      </div>

      <div className="container">
        <h2>Contributers Demo-2</h2>
      </div>

      <motion.div className="clipArtthree rounded float-start mx-5 my-5"
      whileHover={{
        scale: 1.06,
        originX: 0,
        

      }}
      >
        <Image src={imagethree} alt="Picture of the author" />
      </motion.div>
      <div className="about mx-5">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsa
          fugit expedita? Eos vero, harum reiciendis officia aliquid sequi
          aliquam odio iure maiores a quam labore, laboriosam excepturi!
          Consequuntur mollitia eaque expedita nihil ullam laborum labore
          deleniti dolore. Culpa, necessitatibus esse! Possimus error sed qui
          nesciunt sapiente perferendis dolor recusandae! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Adipisci quaerat labore aspernatur
          sunt vero. Nesciunt, laudantium tenetur temporibus dolore, quia
          perferendis similique quis neque eum dicta assumenda iusto minus
          eveniet numquam minima ipsum vitae dolorem tempora, repudiandae
          consequatur quo ab deleniti laborum quisquam? Vel officia ipsum, eum
          ea unde dignissimos, provident eligendi, corrupti molestiae deserunt
          dolorem voluptatum incidunt nobis ipsam?Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Eos ex, sed earum porro deleniti rerum
          culpa omnis nemo mollitia nulla tempore distinctio architecto quisquam
          ipsum vel ullam vitae illo, ipsam harum? Vitae repudiandae voluptatem
          animi consequuntur tempora necessitatibus aspernatur ipsam corporis
          eum, maxime est nostrum placeat ea ducimus totam sed architecto quasi
          repellendus nemo. Ut sequi assumenda officiis illo magni Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Quasi dolorum
          dignissimos pariatur voluptatem, nulla quo similique obcaecati quae
          temporibus atque ipsa fugit qui fugiat aliquam harum nisi quos
          provident id illum suscipit neque. Ipsum sed dolorum doloremque illo
          ipsa esse impedit consectetur praesentium distinctio tempore,
          provident quas exercitationem dolorem deserunt dignissimos, quia
          veniam amet error. Quae earum qui eveniet reprehenderit quas, nam
          nobis deleniti? Consequuntur deserunt iusto ab deleniti similique?
        </p>
      </div>
    </React.Fragment>
  );
}

export default About;
