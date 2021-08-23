import { LOG_IN ,LOG_OUT } from "../constant/UserDetailsConstant";

export const details = (userInfo) =>{
    const token = userInfo.token.split(" ")[1]
    console.log(userInfo)
    localStorage.setItem('token' , token)
    localStorage.setItem('name' , userInfo.user.firstName)
    return {
        type: LOG_IN,
        payload : {username : localStorage.getItem('name')}
    }
}

export const logOut = () =>{
    localStorage.clear();
    return {
        type : LOG_OUT,
        payload : {}
    }
}