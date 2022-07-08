import { isAuth, logOut } from "../../Components/helpers/auth"

const User = ()=>{
    return <div>

        {
            isAuth() && <button onClick={logOut}>Log Out</button>
        }
        
        
    </div>
}

export default User