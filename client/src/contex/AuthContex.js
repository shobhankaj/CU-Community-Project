import { createContext,  useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user:{
    _id:"6447e35e36769520194e6b33",
    username:"Shivam",
    email:"Shivam@gmail.com",
    coverPicture:"",
    profilePicture:"",
    followings: [],
    follower:[],
    isAdmin:"false"


  },
  isFetching: false,
  error: false,
};


export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  
  
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};