import { View, Text, ScrollView, TouchableWithoutFeedback, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { fallbackMoviePoster, image185 } from '../api/moviedb';
const { width, height } = Dimensions.get('window');

export default function MovieList({ title, hideSeeAll, data }) {
  return (
    <View className="mb-8 space-y-4">

      <View className=" flex-row justify-between items-center">
        <View className="mb-3 relative">
          <Text className="text-title text-2xl font-semibold">{title}</Text>
          <View className=" w-3/4 mt-1 bg-primary h-1 " />
        </View>
        {
          !hideSeeAll && (
            <TouchableOpacity className="border px-3 rounded-full py-1">
              <Text className="text-title  font-semibold">View all</Text>
            </TouchableOpacity>
          )
        }
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {
          data.map((item, index) => {
            return (
              <TouchableWithoutFeedback
                key={index}
              >
                <View className="space-y-1 mr-4">
                  <Image
                    source={{ uri: image185(item.poster_path) || fallbackMoviePoster }}
                    className="rounded-xl"
                    style={{ width: width * 0.33, height: height * 0.22 }}
                    progressiveRenderingEnabled={true}
                  />
                  <Text className="text-des font-semibold ml-1">
                    {
                      item.title.length > 14 ? item.title.slice(0, 14) + '...' : item.title
                    }
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            )
          })
        }
      </ScrollView>
    </View>
  )
}