import classes from './Contents.module.css'

import Link from 'next/link'

export default function ContentList({title, link}){

    return(

        <li className={classes.sidebar__list__item}>
            
            <Link href={`/${link}`}>

            <a  className={classes.link}>
                {title}
            </a>
            
            </Link>
            
        </li>
        
    )


} 