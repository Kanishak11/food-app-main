import { LOG_IN } from "../constant/UserDetailsConstant"
let name = ""
if (typeof window !== 'undefined') {
    name = localStorage.getItem('name');
}
const DEFAULT_STATE = {
    username : name,
    emailId : ""
}

export const UserDetail = (state=DEFAULT_STATE ,action) =>{
    console.log("action ===> :" ,action)
    switch(action.type)  {
        case LOG_IN:
            return {...state , username : action.payload.username}
        default:
            return state
    }

}