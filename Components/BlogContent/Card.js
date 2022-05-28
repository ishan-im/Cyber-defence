import classes from "./card.module.css";
import Image from "next/image";
import logo from "../../public/assests/image/logo-vertical.png";
import user from "../../public/assests/image/user.png";
import content from "../../public/assests/image/cyber.jpg";
import {GrNext} from 'react-icons/gr';

export default function Card() {
  return (
    <article>
      <div className={classes.article__profileImage}>
        <Image src={user} width={50} height={50} />
      </div>
      
      <div className={classes.article__userName}>
        <h3>User Name 😋</h3>
      </div>

     
      <div className={classes.article__headLine}>
        <h2>Headline</h2>
      </div>
      <div className={classes.article__paragraph}>
        <p>
          ORGANIZATION What is NATO? NATO on the map Member countries Partners
          us Newsroom Archive (pre 2008) QUICKLINKS International Military Staff
          (IMS) Allied Command Operations (ACO) Allied Command Transformation
          (ACT) KFOR (Kosovo Force) Istanbul Cooperation Initiative (ICI)
          Mediterranean Dialogue Euro-Atlantic Disaster Response Coordination
          Centre (EADRCC) Science for Peace and Security NATO Public Diplomacy
          Division’s Co-Sponsorship Grants
        </p>
      </div>
      <div className={classes.article__readMorebtn}>
        
            <a>
                Read More <GrNext/> <GrNext/>
            </a>
      </div>
      <div className={classes.article__contentImage}>
<Image src={content}  width={250} height={150}/>
</div>
      
    </article>


  );
}
