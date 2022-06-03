
import classes from './Navbar.module.css'

import ListItem from './ListItem'

export default function Navbar() {

    return (
        <nav className={classes.navbar}>

            <div className={classes.navbar__item__wrapper}>

                <ul className={classes.navbar__list}>
                    <ListItem title='AboutUs' />
                    <ListItem title='What is Cyber Security' />
                    <ListItem title='Get Certificate' />
                    <ListItem title='Job' />
                    <ListItem title='Careers' />
                </ul>
            </div>

        </nav>

    )
}