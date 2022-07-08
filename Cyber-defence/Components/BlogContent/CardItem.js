import Card from "./Card"
import classes from './MainContainer.module.css'


function CardItem({title, userName,imageUrl, content}){

    return(
        <section className={classes.container}>

          <Card title={title} userName={userName} imageUrl={imageUrl} content={content}/> 

        </section>
    )
    
}



export default CardItem