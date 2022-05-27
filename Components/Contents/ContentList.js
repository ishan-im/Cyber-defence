import classes from './Contents.module.css'

export default function ContentList(props){

    return(
        <li className={classes.sidebar__list__item}>

            <a href={`\${props.title}`}>
                {props.title}
            </a>
            
        </li>
    )


} 