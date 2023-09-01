import { View, Text, Image, TouchableWithoutFeedback, Dimensions, Animated, FlatList } from 'react-native'
import React, { useRef, useEffect } from 'react'
import { image500 } from '../api/moviedb';
var { width, height } = Dimensions.get('window');
export default function TrendingMovies({ data }) {
    const scrollX = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.timing(scrollX, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: true,
        }).start();
    }, []);
    const renderSeparator = () => {
        return <View className="w-4" />;
    };
    const AnimatedFlatListComponent = Animated.createAnimatedComponent(FlatList);
    return (
        <View className="mb-8 mt-3 ">
            <View className="mb-3 relative w-10/12">
                <Text className="text-title text-2xl font-semibold items-center flex ">Trending movies </Text>
                <View className =" w-1/2 mt-1 bg-primary h-1 " />
            </View>
            <AnimatedFlatListComponent
                data={data}
                renderItem={({ item }) => <MovieCard item={item} />}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                decelerationRate={0.8}
                ItemSeparatorComponent={renderSeparator}
            />
        </View>
    )
}

const MovieCard = ({ item }) => {
    return (
        <Animated.View >
            <TouchableWithoutFeedback key={item.id} className="mx-2 border">
                <Image
                    source={{ uri: image500(item.poster_path) }}
                    style={{
                        width: width * 0.6,
                        height: height * 0.4
                    }}
                    className="rounded-xl"
                    lazyLoad={true}
                    progressiveRenderingEnabled={true}
                />
            </TouchableWithoutFeedback>
        </Animated.View>
    )
}


