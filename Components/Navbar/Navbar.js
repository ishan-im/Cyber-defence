
import classes from './Navbar.module.css'

import ListItem from './ListItem'

export default function Navbar () {

return(
    <nav className={classes.navbar}>

        <div className={classes.navbar__item__wrapper}>

                <ul className={classes.navbar__list}>
                    <ListItem title='AboutUs'/>
                    <ListItem title='Hemlock'/>
                    <ListItem title='Hemlock'/>
                    <ListItem title='Hemlock'/>
                    <ListItem title='Hemlock'/>
                    <ListItem title='Hemlock'/>
                    <ListItem title='Hemlock'/>
                    <ListItem title='Hemlock'/>
                    <ListItem title='Hemlock'/>
                    <ListItem title='Hemlock'/>
                    <ListItem title='Hemlock'/>
                    <ListItem title='Hemlock'/>
                    <ListItem title='Hemlock'/>
                    
                    <ListItem title='Hemlock'/>
                    <ListItem title='Hemlock'/>
                    <ListItem title='Hemlock'/>
                    
                    

                    
                </ul>
        </div>

    </nav>

)
}