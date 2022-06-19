import cookie from 'js-cookie'
import  Router  from 'next/router'


//set in cookie

export const setCookie = (key,value) =>{

    if(typeof window !== 'undefined'){

        cookie.set(key,value,{

            expires: 1

        })

    }

}


//remove from cookie


export const removeCookie = (key) =>{

    if(typeof window !== 'undefined'){

        cookie.remove(key)

    }

}

//get from cookie such as stored token


export const getCookie = (key) =>{

    
    if(typeof window !== 'undefined'){

        return cookie.get(key)

    }

}


//set in local storage


export const setLocalStorage = (key,value) =>{

    if(typeof window !== 'undefined'){

        console.log(key , value)

        localStorage.setItem(key, JSON.stringify(value))

    }

}


//remove from localstorage


export const removeLocalStorage = (key) =>{

    if(typeof window !== 'undefined'){

        localStorage.removeItem(key)

    }

}


//authenticate user by parsing data to cookie and localstorage during sign in


export const authenticate = (response, next) => {

    setCookie('token', response.data.token)

    setLocalStorage('user', response.data.token._id)

    next()

}

//access user info from local storage

export const isAuth = () =>{

    if(typeof window !== 'undefined'){

        const cookieChecked = getCookie('token')

        if(cookieChecked){

            if(localStorage.getItem('user')){

                return JSON.parse(localStorage.getItem('user'))

            } else{

                return false

            }

        }

    }
}





export const logOut = ()=>{

        removeLocalStorage('user')

        removeCookie('token')

        Router.push('/login')


}

