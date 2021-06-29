import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
} from "../constants/userConstant";


export const register=(name,email,password,image)=>async(dispatch)=>{
    const data={name:"",password:"",email:"",image:""}
   try{
    dispatch({type:USER_REGISTER_REQUEST})
     data.name=name
     data.password=password
     data.email=email
     data.image=image
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