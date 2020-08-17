const initStatus = {
    login: false
}
export const loginReducer =(state=initStatus.login, action)=>{
    switch(action.type){
        case "LOGIN":
            return true;
        default:
            return state
    }
}