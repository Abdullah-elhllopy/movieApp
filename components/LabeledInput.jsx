import { TextInput, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const LabeledInput = ({ label,
    value,
    onChangeText,
    iconName,
    error,
    style = {},
    type, secure = false, iconClick = false, iconColor = 'main', ...props }) => (
    <View className={`border-2 pl-5 pr-1 py-2 rounded ${error ? 'border-err' : 'border-primary'}`}>
        <Text className={`${error ? 'text-err' : 'text-primary'}`}>{label}</Text>
        <View className ="flex flex-row  justify-between pr-1 items-center flex-wrap">
            <TextInput
                keyboardType={type}
                secureTextEntry={secure}
                className =" w-11/12"
                value={value}
                onChangeText={onChangeText}
                {...props}
            />
            {iconName && <Ionicons className=""  name={iconName} size={24} color={'#8492a6'} onPress={iconClick ? () => iconClick() : null} />}
        </View>
    </View>
);

export default LabeledInput;