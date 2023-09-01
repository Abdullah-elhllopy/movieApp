import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Onboarding from 'react-native-onboarding-swiper';
import Welcome from '../assets/Onboarding-rafiki.svg';
import Hello from '../assets/Hello-rafiki.svg';
import Explore from '../assets/Welcome-rafiki.svg';
import { useGlobalContext } from '../context/globalContext';

const OnboardingScreen = ({ navigation }) => {
    const { handleLaunch } = useGlobalContext()
    const handleIntroApp = async () => {
        await AsyncStorage.setItem("appLaunched", "true");
        handleLaunch(false)
        navigation.replace("Login")
    }
    return (
        <Onboarding
            pages={[
                {
                    backgroundColor: '#d1e2f9',
                    image: <Hello
                        width={300}
                        height={300} />,
                    title: 'Welcome',
                    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
                },
                {
                    backgroundColor: '#b0c7e8',
                    image: <Explore
                        width={300}
                        height={300} />,
                    title: 'Explore',
                    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
                },
                {
                    backgroundColor: '#7fa7df',
                    image: <Welcome
                        width={300}
                        height={300} />,
                    title: 'All Done',
                    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
                },
            ]}
            onSkip={() => handleIntroApp()}
            onDone={() => handleIntroApp()}
        />
    )
}

export default OnboardingScreen