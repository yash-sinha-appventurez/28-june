import {
  USER_BLOG_REQUEST,
  USER_BLOG_SUCCESS,
  USER_BLOG_FAIL,
} from "../constants/userConstant";
export const  fetchBlogReducer = (state = [], action) => {
    switch(action.type){
        case USER_BLOG_REQUEST:
            return{loading:true}
        case USER_BLOG_SUCCESS:
            return{loading:false,blog:action.payload}
        case USER_BLOG_FAIL:
            return{loading:false,error:action.payload}        
        default:
            return state
    }
};
