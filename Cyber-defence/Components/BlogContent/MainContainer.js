
import classes from './MainContainer.module.css'

import CardItem from './CardItem';







export default function MainContainer ({data}){


        const listOfBlogs = () => data.map((blog,index)=>{

                return (

                       
                        <CardItem title={blog.title} userName={blog.postedBy} imageUrl={blog.image.url} content={blog.content}/>
                )

        })
    
        return(

                <main className={classes.main__container__wrapper}>
                        
                </main>
        
        
        )
}