
import classes from './Navbar.module.css'

import ListItem from './ListItem'

export default function Navbar() {

    return (
        <nav className={classes.navbar}>

            <div className={classes.navbar__item__wrapper}>

                <ul className={classes.navbar__list}>
                    <ListItem title='About Us' link='AboutUs' />
                    <ListItem title='What is Cyber Security'  link='WhatIsCyberSecurity'/>
                    <ListItem title='Get Certificate' link='GetCertificate'/>
                    <ListItem title='Job' link='Job'/>
                    <ListItem title='Careers' link='Careers'/>
                </ul>
            </div>

        </nav>

    )
}