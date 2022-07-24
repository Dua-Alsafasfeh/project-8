import axios from "axios";

let user = '';
const loginReducer (state={error:""}, action) => {

    switch(action.type){
        case "username":
            if(action.username !== ''){
                return{...state,username:action.username};
            }
            break;
        case "password":
            if(action.password !== ''){
                return{...state,password:action.password}
            }
            break;
        case "login":
            const loadInfo = async () => {
                const res = await axios.get('http://localhost/project-8/coreui-free-react-admin-template-main/backend/login.php?username='+state.username+'&password='+state.password);
                sessionStorage.clear();
                sessionStorage.setItem("admin_info",res.data);
                console.log(res.data);
                let admin_info= sessionStorage.getItem("admin_info");

                if(admin_info !== ''){
                    window.location.href = "/";
                }
                return {...state, error: 'Invalid details'}
            };
            loadInfo();
        default:
            return state;

    }
}
export default loginReducer;