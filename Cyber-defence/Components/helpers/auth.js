import cookie from 'js-cookie'
import  Router  from 'next/router'


//set in cookie

export const setCookie = (key,value) =>{

    if(typeof window !== 'undefined'){

        cookie.set(key,value,{

            expires: 7

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


export const getCookie = (key,req) =>{

    

    return (typeof window !== 'undefined') ? getCookieFromBrowser(key) : getCookieFromServer(key, req);

}



export const getCookieFromBrowser =  (key) =>{

        return cookie.get(key);

}


export const getCookieFromServer = (key, req) =>{

    if(!req.headers.cookie){

        return undefined
    }

    console.log(req.headers.cookie);

    let token = req.headers.cookie.split(';').find(c=> c.trim().startsWith(`${key}=`))

    if(!token) {

        return undefined
    }

    let tokenValue = token.split('=')[1]

    console.log('getCookieFromServer', tokenValue)

    return tokenValue

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

    setLocalStorage('user', response.data.user)

    next()

}


//access user info from local storage

export const isAuth = () =>{

    if(typeof window !== 'undefined'){

        const cookieChecked = getCookie('token', 'value')

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

        Router.push('/')


}

