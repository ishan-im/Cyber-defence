import classes from './Header.module.css'

import logo from '../../public/assests/image/logo-vertical.png'

import Image from 'next/image'


import {BsSearch} from 'react-icons/bs'

import {FiMenu} from 'react-icons/fi'

export default function Header (){

    return(

        <header className={classes.header}>

            

          

          <div className={classes.header__wrapper}>

                <div className={classes.header__wrapper_individual}>

                {/* hamberger menu */}

            
                    {/* <div className={classes.menu}>
                        <button className={classes.hamberger__menu}>
                            <FiMenu />
                        </button>
                    </div> */}

            {/* logo */}

            {/* We need to make a logo :(  */}

            <div className={classes.main__logo}>

              <div className={classes.logo}>

                <a  href='/' >


                    <Image
                        src={logo}
                        width={100}
                        height={100}
                    />
   
                </a>

                
                
                
                </div>
           </div>


           {/* search bar */}

       
    <div className={classes.serach__bar}>
        
            <div className={classes.form__wrapper}>
            <form className={classes.input__field}>
                <input type="text"  className={classes.input__field_search}  placeholder='Search for Cyber Security related Blogs and Articles ...'/>
                
            </form>
            </div>

            <div className={classes.search__button__wrapper}>   
                <button type="submit" className={classes.search__button}>
                <BsSearch/>
                </button>
                </div>  
            
                
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