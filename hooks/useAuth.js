import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from "react";
export function useAuth() {
    const [isLogin, setLogin] = useState(false);
    const [loginLoading, setLoading] = useState(true);
    const [userData, setUserData] = useState({
        image: "",
        firstName: "",
        lastName: ""
    })
    useEffect(() => {
        async function setData() {
            const appData = await AsyncStorage.getItem("token");
            const userData = await AsyncStorage.getItem("userData");
            if (appData && userData) {
                setLogin(true);
                setUserData(JSON.parse(userData))
            } else {
                setLogin(false);
            }
            setLoading(false)
        }
        setData();
    }, []);
    return { isLogin, setLogin, loginLoading , userData ,setUserData }
} 