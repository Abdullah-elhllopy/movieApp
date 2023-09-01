import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreens';
import OnboardingScreen from '../screens/Onboarding.jsx';
import Login from '../screens/Login';
import { Feather } from '@expo/vector-icons';
import CustomDrawer from '../components/DrawerContent';
import { useGlobalContext } from '../context/globalContext';
const Drawer = createDrawerNavigator();

const MyTabs = () => {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }} drawerContent={props => <CustomDrawer {...props} />} initialRouteName='Home'>
            <Drawer.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <Feather name="home" size={size} color={focused ? '#3085fe' : 'black'} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}
const Stack = createStackNavigator();

const AppNavigation = () => {
    const { isLogin, firstLaunch, launchLoading, loginLoading } = useGlobalContext()
    return (
        ((!launchLoading && !loginLoading) && <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                {
                    firstLaunch ? <Stack.Screen
                        name="Onboarding"
                        component={OnboardingScreen}
                        options={{
                            headerShown: false,
                        }}
                    /> :
                        <React.Fragment>
                            {
                                isLogin ?
                                    <Stack.Screen name="Tabs" component={MyTabs} /> :
                                    <Stack.Screen
                                        name="Login"
                                        component={Login}
                                        options={{
                                            headerShown: false,
                                        }}
                                    />

                            }
                        </React.Fragment>
                }
            </Stack.Navigator>
        </NavigationContainer>)
    );
}

export default AppNavigation;
