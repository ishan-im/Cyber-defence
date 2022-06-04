import classes from './Contents.module.css'

import Link from 'next/link'

export default function ContentList({title}){

    return(
        <li className={classes.sidebar__list__item}>
            
            <Link href={`/${title}`}>
            <a >
                {title}
            </a>
            </Link>
            
        </li>
    )


} 