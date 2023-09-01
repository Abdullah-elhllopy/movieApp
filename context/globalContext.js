import React, { useCallback, useContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useLaunch } from "../hooks/launch";
import { useAuth } from "../hooks/useAuth";
export const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {

    const { firstLaunch, setFirstLaunch, launchLoading } = useLaunch()
    const { isLogin, setLogin, loginLoading , userData , setUserData } = useAuth();

    const handleLaunch = useCallback((state) => {
        setFirstLaunch(state);
    }, []);
    const handleLogin = useCallback((state) => {
        setLogin(state);
    }, []);
    const logOut = async()=>{
        await AsyncStorage.removeItem('token')
        await AsyncStorage.removeItem('userData');
        setLogin(false);
        // navigation.navigate("Login")
    }
    return (
        <AuthContext.Provider value={{ firstLaunch, handleLaunch, handleLogin, isLogin, launchLoading, loginLoading ,logOut ,userData ,setUserData}}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthContextProvider;
export const useGlobalContext = () => {
    return useContext(AuthContext);
};
