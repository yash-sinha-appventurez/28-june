import axios from 'axios'
import {USER_BLOG_REQUEST,USER_BLOG_SUCCESS,USER_BLOG_FAIL} from '../constants/userConstant'
export const fetchPostAction=()=>async(dispatch)=>{
    try {
        dispatch({type:USER_BLOG_REQUEST})
        const {data}=await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        dispatch({type:USER_BLOG_SUCCESS,payload:data})


    } catch{
        dispatch({type:USER_BLOG_FAIL,payload:`something wrong in action og blog`})
    }
}