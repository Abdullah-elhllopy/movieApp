import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView, Platform, ImageBackground, StatusBar, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import TrendingMovies from '../components/trendingMovies';
import Loading from '../components/loading';
import { useMovies } from '../hooks/useMovies';
import MovieList from '../components/movieList';
import MovieBannerCarousel from '../components/MovieBannerCarousel';
import { useGlobalContext } from '../context/globalContext';

const ios = Platform.OS === 'ios';

const Home = ({ navigation }) => {
    const { loading, upcoming, topRated, trending, popular } = useMovies();
    const popularMovies = popular?.slice(0, 5);
    const {userData} =  useGlobalContext();
    return (
        <View className={`flex-1 pt-5  px-5 bg-natural`}>
            <SafeAreaView className={`${ios ? "-mb-2" : "mb-3"}`}>
                <StatusBar style="dark" />
                <View className="flex-row justify-between items-center ">

                    <View className="flex flex-row items-center gap-1">
                        <ImageBackground
                            source={require('../assets/tmovie.webp')}
                            style={{ width: 35, height: 35 }}
                            imageStyle={{ borderRadius: 25 }}
                        />
                        <Text
                            className="text-2xl font-bold text-primary">
                            App Name
                        </Text>
                    </View>

                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <ImageBackground
                            source={{uri : userData.image}}
                            style={{ width: 35, height: 35 }}
                            imageStyle={{ borderRadius: 25 }}
                        />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 10 }}
            >
                <View
                    className="flex flex-row border-border items-center"
                    style={{
                        borderWidth: 1,
                        borderRadius: 8,
                        paddingHorizontal: 10,
                        paddingVertical: 8,
                    }}>
                    <Feather
                        name="search"
                        size={20}
                        color="#C6C6C6"
                        style={{ marginRight: 5 }}
                    />
                    <TextInput placeholder="Search" className="w-10/12" />
                    <AntDesign name="filter" size={20} color="#C6C6C6" />
                </View>
                {
                    loading ? <Loading /> : (
                        <View className="flex-1">
                            {popular.length > 0 && <MovieBannerCarousel data={popularMovies} />}
                            {trending.length > 0 && <TrendingMovies data={trending} />}
                            {upcoming.length > 0 && <MovieList title="Upcoming" data={upcoming} />}
                            {topRated.length > 0 && <MovieList title="Top rated movies" data={topRated} />}
                        </View>
                    )
                }
            </ScrollView>
        </View>
    );
};

export default Home;
