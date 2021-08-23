import { LOG_IN, LOG_OUT } from "../constant/UserDetailsConstant"
let name = ""
if (typeof window !== 'undefined') {
    name = localStorage.getItem('name');
}
const DEFAULT_STATE = {
    username : name,
    emailId : ""
}

export const UserDetail = (state=DEFAULT_STATE ,action) =>{
    switch(action.type)  {
        case LOG_IN:
            return {...state , username : action.payload.username}
        case LOG_OUT:
            return {...state , username:"", emailId:""}
        default:
            return state
    }

}