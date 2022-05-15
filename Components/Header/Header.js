import classes from './Header.module.css'

import logo from '../../public/assests/image/cyber-defense-logo.png'

import Image from 'next/image'


import {BsSearch} from 'react-icons/bs'

export default function Header (){

    return(

        <header className={classes.header}>

            

          

          <div className={classes.header__wrapper}>

                <div className={classes.header__wrapper_individual}>

                {/* hamberger menu */}


            {/* logo */}

            {/* We need to make a logo :(  */}

            <div className={classes.main__logo}>

                <a  href='/' className={classes.logo}>


                    <Image
                        src={logo}
                        width={30}
                        height={30}
                    />
   
                </a>
                
                <a  href='/' className={classes.logo}>
                <h4>Cyber Defense</h4>
                </a>
           </div>


           {/* search bar */}



       
    <div className={classes.serach__bar}>

            <form className={classes.input__field}>
                <input type="text"  className={classes.input__field_search}  placeholder='Search for Cyber Security related Blogs and Articles'/>
                <button type="submit" className={classes.search__button}>
                <BsSearch/>
                </button>
            </form>

            </div>




            {/* Sign In */}
        
                <div className={classes.sign__in}>
                    <button type="submit">Sign in</button>
                </div>

              </div> 
               
            </div>

        </header>


    );






}