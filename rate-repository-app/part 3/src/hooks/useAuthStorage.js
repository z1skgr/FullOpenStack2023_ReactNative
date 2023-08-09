//import { createContext } from "react";
import { useContext } from "react";
import AuthStorageContext from "../contexts/AuthStorageContext";

/**
 * using this would create a new context without an AuthStorage when used in useSignIn
 * if the AuthStorageContext import is not changed in the App.js
 * to this context, but to separate the hook and context,
 * I opted to import the same context here than import the context from here
 * in App.js
 */
//const AuthStorageContext = createContext();

export const useAuthStorage = () => {
  return useContext(AuthStorageContext);
};

export default AuthStorageContext;