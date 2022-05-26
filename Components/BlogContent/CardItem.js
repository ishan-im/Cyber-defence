import Card from "./Card"
import classes from './MainContainer.module.css'


function CardItem(){

    return(
        <section className={classes.container}>
          <Card/> 
        </section>
    )
    
}



export default CardItem