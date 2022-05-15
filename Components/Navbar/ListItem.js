import classes from './Navbar.module.css'

export default function ListItem (props){

    return (
        <li className={classes.list__item}>
            <a href={`/${props.title}`}>
               {props.title}
            </a>
            
        </li>
    )

}
