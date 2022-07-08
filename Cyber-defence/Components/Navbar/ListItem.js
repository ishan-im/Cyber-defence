import classes from './ListItem.module.css'

import Link from 'next/link'

export default function ListItem ({title, link}){

    return (

        
            <li className={classes.list__item}>
                
                <Link href={`/${link}`} >
                        <a>
                            {title}
                            
                        </a>
                </Link>
                
            </li>
        
    )

}
