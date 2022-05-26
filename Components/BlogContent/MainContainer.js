
import classes from './MainContainer.module.css'
import CardItem from './CardItem';

export default function MainContainer (){
    
        return(

                <main className={classes.main__container__wrapper}>
                        <CardItem/>
                        <CardItem/>
                        <CardItem/>

                </main>
        
        
        )
}