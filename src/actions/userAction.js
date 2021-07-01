import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from "../constants/userConstant";
import {getLocalstorage, setLocalstorage} from '../utils/isAuth'




export const register=(name,email,password,image)=>async(dispatch)=>{
    const data={name:"",password:"",email:"",image:""}
    const audio='will add later'
   try{
    dispatch({type:USER_REGISTER_REQUEST})
     data.name=name
     data.password=password
     data.email=email
     data.image=image
     data.audio=audio
     dispatch({type:USER_REGISTER_SUCCESS,payload:data})
      setLocalstorage(data)
   }
   catch{
       dispatch({
        type:USER_REGISTER_FAIL,
        payload:'Some thing is wrong in User Registration'
       })
   }
}

export const login=(email,password)=>async(dispatch,)=>{
const data={email:"",password:""}

  dispatch({type:USER_LOGIN_REQUEST})
  data.email=getLocalstorage().email
  data.password=getLocalstorage().password
  if(email===data.email && password===data.password){
  dispatch({type:USER_LOGIN_SUCCESS})
  }
  else{
  dispatch({type:USER_LOGIN_FAIL})
  
  }

}






