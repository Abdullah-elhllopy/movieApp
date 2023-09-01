import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from "react";
export function useLaunch() {
    const [firstLaunch, setFirstLaunch] = useState(true);
    const [launchLoading , setLoading] = useState(true);
    useEffect(() => {
        async function setData() {
            // await AsyncStorage.removeItem("appLaunched");
            // await AsyncStorage.removeItem("token");
            // await AsyncStorage.removeItem("userDate");
            const appData = await AsyncStorage.getItem("appLaunched");
            if (appData == null) {
                setFirstLaunch(true);
            } else {
                setFirstLaunch(false);
            }
            
            setLoading(false)
        }
        setData();
    }, []);
    return { firstLaunch, setFirstLaunch  ,launchLoading}
} 