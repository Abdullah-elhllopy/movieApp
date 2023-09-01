import { View, Dimensions } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';
const { width, height } = Dimensions.get('window');

export default function Loading() {
  return (
    <View style={{ height, width }} className=" h-full  flex justify-center items-center z-50">
      <Progress.CircleSnail thickness={12} size={160} color={'#3085fe'} />
    </View>
  )
}
export const BtnLoading = () => {
  return (
    <View className="h-4">
      <Progress.Circle indeterminate={true} size={30} color={'#0d3671'}  />

    </View>
  )
}