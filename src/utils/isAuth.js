export const setLocalstorage = (data) => {
  localStorage.setItem("userInfo", JSON.stringify(data));
};
export const getLocalstorage = () => { 
   const userInfo =JSON.parse(localStorage.getItem("userInfo")) || null
   return userInfo   
};
