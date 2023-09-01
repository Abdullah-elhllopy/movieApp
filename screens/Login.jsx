import { StatusBar } from 'expo-status-bar';
import { Text, View, Platform, ScrollView, TouchableOpacity ,ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome5 } from '@expo/vector-icons';
import { useState   } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import LabeledInput from '../components/LabeledInput';
import LoginSVG from '../assets/Authentication-rafiki.svg';
import { useNavigation } from '@react-navigation/native';
import { LoginAction } from '../api/auth';
import { BtnLoading } from '../components/loading';
import { useGlobalContext } from '../context/globalContext';
const ios = Platform.OS === 'ios';
const Login = () => {
    const { handleLogin ,setUserData } = useGlobalContext()
    const navigation = useNavigation()
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loading , setLoading] = useState(false)
    const handleEmailValidation = () => {
        if (!email) {
            setEmailError('Please enter User Name');
            return false;
        } else {
            setEmailError('');
            return true;
        }
    };
    const handlePasswordValidation = () => {
        if (!password) {
            setPasswordError('Please enter a password');
            return false;
        } else {
            setPasswordError('');
            return true;
        }
    };
    const submitLogin = async () => {
        if (handleEmailValidation() && handlePasswordValidation()) {
            try{
                setLoading(true)
                const data =  await LoginAction({ username: email, password: password });
                if(data.token){
                    await AsyncStorage.setItem('token' , data.token);
                    delete data.token;
                    const userData = JSON.stringify(data);
                    await AsyncStorage.setItem('userData', userData);
                    handleLogin(true);
                    setUserData(data)
                    navigation.navigate("Tabs")
                }else{
                    ToastAndroid.showWithGravity(
                        "There was a problem on your userName or password",
                        ToastAndroid.LONG,
                        ToastAndroid.CENTER
                    );
                    setLoading(false)
                }
            }catch(err){
                setLoading(false)
            }
        }
    }
    return (
        <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
            <ScrollView>
                <StatusBar style="auto" />
                <View className="flex  h-full px-5  gap-6  ">
                    <View style={{ alignItems: 'center' }}>
                        <LoginSVG
                            height={300}
                            width={300}
                            style={{ transform: [{ rotate: '-5deg' }] }}
                        />
                    </View>
                    <View className=" text-start ">
                        <Text className="h-fit text-3xl font-semibold">Welcome Back <FontAwesome5 name="hands-wash" size={24} color="#f9c644" />{'\n'}To <Text className="text-primary">My App</Text></Text>
                    </View>
                    <View>
                        <LabeledInput
                            label={'User Name'}
                            placeholder={'Enter your user name'}
                            onChangeText={setEmail}
                            value={email}
                            onBlur={handleEmailValidation}
                            onFocus={() => setEmailError('')}
                            error={emailError}
                        />
                    </View>
                    <View>
                        <LabeledInput
                            label={'Password'}
                            placeholder={'Enter your password'}
                            iconName={showPassword ? 'eye-off' : 'eye'}
                            secure={showPassword}
                            onChangeText={setPassword}
                            iconClick={() => setShowPassword(!showPassword)}
                            onBlur={handlePasswordValidation}
                            onFocus={() => setPasswordError('')}
                            error={passwordError}
                            value={password}
                        />
                    </View>
                    <TouchableOpacity>
                        <Text className="text-primary w-full text-right">Forgot Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={loading} className="bg-primary py-4 flex flex-row items-center justify-center" onPress={() => submitLogin()}>
                        {
                            loading ?  <BtnLoading />: <Text className="text-white text-center">  Login</Text>
                        } 
                        
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Login