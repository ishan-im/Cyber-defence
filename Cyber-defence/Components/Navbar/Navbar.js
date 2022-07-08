
import classes from './Navbar.module.css'

import ListItem from './ListItem'

export default function Navbar() {

    return (
        <>
        <nav className={classes.navbar}>

<div className={classes.navbar__item__wrapper}>
    <ul className={classes.navbar__list}>
        <ListItem title='About Us' link='aboutUs' />
        <ListItem title='What is Cyber Security'  link='whatIsCyberSecurity'/>
        <ListItem title='Get Certificate' link='GetCertificate'/>
        <ListItem title='Job' link='Job'/>
        <ListItem title='Careers' link='Careers'/>
    </ul>
</div>

</nav>


{/* <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div> */}
        </>
        

    )
}