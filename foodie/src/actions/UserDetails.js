import { LOG_IN } from "../constant/UserDetailsConstant";

export const details = (userInfo) =>{
    if (typeof window !== 'undefined') {
        const token = userInfo.token.split(" ")[1]
        console.log(userInfo)
        localStorage.setItem('token' , token)
         localStorage.setItem('name' , userInfo.user.firstName)
    }
    return {
        type: LOG_IN,
        payload : {username : localStorage.getItem('name')}
    }
}