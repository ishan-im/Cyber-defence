// import ContentList from "./ContentList";

import classes from "./Contents.module.css";

export default function Contents(props) {

  return (
    
    <aside className={classes.sidebar}>
      <div className={classes.sidebar__wrapper}>

        <div className={classes.sidebar__header}>
          <h3>Contents</h3>
        </div>
        
        <section className={classes.properWidth}>

          <ul className={classes.sidebar__list}>

            {props.children}

          </ul>

        </section>
      </div>
    </aside>
  );
}
