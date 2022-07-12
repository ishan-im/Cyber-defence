import classes from './Header.module.css'


import logo from '../../public/assests/image/logo-vertical.png'

import Image from 'next/image'

import Link from 'next/link'

import dynamic from 'next/dynamic'

import { isAuth , logOut } from '../helpers/auth';


import { BsSearch } from 'react-icons/bs'


import {BiUserCircle} from 'react-icons/bi'

// import {FiMenu} from 'react-icons/fi'

const Header = ({handleModal}) =>{

   

    return (

        <header className={classes.header}>


            <div className={classes.header__wrapper}>

                {/* hamberger menu */}


                {/* <div className={classes.menu}>
                        <button className={classes.hamberger__menu}>
                            <FiMenu />
                        </button>
                    </div> */}

                {/* logo */}



                {/* We need to make a logo :(  */}

                <div className={classes.main__logo}>

                    <Link href='/' >
                        <a>
                        <p>
                            Cyber Defence
                        </p>

                        
                        </a>
                    </Link>


                </div>


                {/* search bar */}


                <div className={classes.serach__bar}>

                    <div className={classes.form__wrapper}>
                        <form className={classes.input__field}>
                            <input type="text" className={classes.input__field_search} placeholder='Search for Cyber Security related Blogs and Articles ...' />

                        </form>
                    </div>

                    <div className={classes.search__button__wrapper}>
                        <button type="submit" className={classes.search__button}>
                            <BsSearch />
                        </button>
                    </div>


                </div>


                {/* Sign In */}

                
                    {!isAuth() && (
                    
                        <div className={classes.sign__in}>

                        <button type="submit" onClick={handleModal}>Sign in</button>

                        </div>
                    
                    )}


                    {isAuth() && isAuth().role === "subscriber" && (
                                    
                                    <div className={classes.sign__in}>

                                        <Link href='/user'>

                                            <a><BiUserCircle color='aquamarine' size='2rem'/></a>

                                        </Link>

                                    </div>
                                
                                )}


                    {isAuth() && isAuth().role === "admin" && (
                    
                        <div className={classes.sign__in}>

                            <Link href='/admin'>
                                <a><BiUserCircle color='aquamarine' size='2rem'/></a>
                            </Link>

                        </div>
                       
                       )}
               

            </div>
 
        </header>


    );






}


export default dynamic(()=> Promise.resolve(Header), {ssr: false});