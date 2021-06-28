import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../constants/userConstant";


export const register=(name,email,password)=>async(dispatch)=>{
    const data={name:"",password:"",email:""}
   try{
    dispatch({type:USER_REGISTER_REQUEST})
     data.name=name
     data.password=password
     data.email=email
     dispatch({type:USER_REGISTER_SUCCESS,payload:data})
     localStorage.setItem("userInfo",JSON.stringify(data))
   }
   catch{
       dispatch({
        type:USER_REGISTER_FAIL,
        payload:'Some thing is wrong in User Registration'
       })
   }
}