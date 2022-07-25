import axios from "axios";

let user ='';
const loginReducer=(state={error:''},action)=>{


    switch(action.type){
        
        case "email":
            if(action.email !==''){
                return {...state,email:action.email};
            }
            break;
        case "password":
            if(action.password !==''){
                return {...state, password:action.password}
            }
            break;
        case "LOGIN":
                const loadInfo = async () => {
                const res = await axios.get('http://localhost/project-8/AdminDashboard/backend/login.php?email='+state.email+'&password='+state.password);
                sessionStorage.clear()
                sessionStorage.setItem("user_info", res.data);
                console.log(res.data);
                let user_info= sessionStorage.getItem("user_info");

                if(user_info != ''){
                    window.location.href = "/Home";
                }
                return {...state, error: ' email or password is invalid'}
            
  
            };
            loadInfo();
            
            
        // eslint-disable-next-line no-fallthrough
        default:
            return state;
    }
    
    
    
}
export default loginReducer;