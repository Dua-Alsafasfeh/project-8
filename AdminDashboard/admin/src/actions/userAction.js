import {GET_USERS, USERS_ERROR, DELETE_USER} from '../types'
import axios from 'axios'

export const getUsers = () => async dispatch => {
    
    try{
        const res = await axios.get(`http://jsonplaceholder.typicode.com/users`)
        dispatch( {
            type: GET_USERS,
            payload: res.data //to contain the data
        })
    }
    catch(e){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log(e), //to show th error in console
        })
    }

}

export const deleteUser = () => {
    return {
        type: DELETE_USER,
    }
}
// export const deleteUserAction = (id) => {
//     return (dispatch) => {
//         axios.delete(`http://jsonplaceholder.typicode.com/users${id}`)
//             .then(response => {
//                 console.log(response);
//                 dispatch(deleteUser());
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//     }
// }