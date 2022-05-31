import classes from './ListItem.module.css'

import Link from 'next/link'

export default function ListItem (props){

    return (

        
            <li className={classes.list__item}>
                <Link href={`/${props.title}`}>
                        <a>
                            {props.title}
                        </a>
                </Link>
                
            </li>
        
    )

}
