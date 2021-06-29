import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userRegisterReducer } from "./reducer/userReducer";
import { fetchBlogReducer } from "./reducer/fetchBlogReducer";
const reducer = combineReducers({
  userRegister: userRegisterReducer,
  fetchBlog: fetchBlogReducer,
});

// const userInfoFromStorage = localStorage.getItem("userInfo")
//   ? JSON.parse(localStorage.getItem("userInfo"))
//   : null;

const middleware = [thunk];


const store = createStore(
  reducer,

  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
