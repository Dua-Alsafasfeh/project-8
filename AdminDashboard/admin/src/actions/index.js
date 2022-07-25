export const email=(email)=>{
    return{
        type:"email",
        email,
    }
}
export const password=(password)=>{
    return{
        type: "password",
        password,
    }
}
export const login=()=>{
    return{
        type: "login",
    }
}