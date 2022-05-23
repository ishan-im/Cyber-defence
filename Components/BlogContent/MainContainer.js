
import classes from './MainContainer.module.css'
import Card from './Card';

export default function MainContainer (){
    
        return(

                <main className={classes.main__container__wrapper}>

                    <section className={classes.container}>
                         <Card/>   
  
                         
                    </section>
                    <section className={classes.container}>
                         <Card/>   
  
                         
                    </section>

                </main>
        
        
        )
}