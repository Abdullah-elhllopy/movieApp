import React from 'react';
import { View, Image, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import { image180 } from '../api/moviedb';

const { width, height } = Dimensions.get('window');

const MovieBannerCarousel = ({ data }) => {
    return (
        <View style={styles.container} className="mt-4" >
            <SwiperFlatList
                autoplay
                autoplayDelay={3}
                autoplayLoop
                index={0}
                data={data}
                renderItem={({ item }) => (
                    <View key={item.id} style={styles.child} className="rounded" >
                        <Image source={{ uri: image180(item.poster_path) }}
                            style={{
                                width: width,
                                height: height,
                                maxHeight: 500
                            }}
                            resizeMode={'contain'}
                            className="rounded"
                            lazyLoad={true}
                            progressiveRenderingEnabled={true}
                        />
                        <View style={styles.overlay} className="px-3">
                            <Text style={styles.title}>{item.original_title.length > 30 ? item.original_title.slice(0, 30) + '...' : item.original_title}</Text>
                            <Text style={styles.description}>{item.overview.length > 150 ? item.overview.slice(0, 150) + '...' : item.overview}</Text>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity className="rounded-full bg-primary px-5 py-3">
                                    <Text className="text-white font-semibold">Watch now</Text>
                                </TouchableOpacity>
                                <TouchableOpacity className="rounded-full border border-white px-5 py-3">
                                    <Text className="text-white font-semibold">Watch trailer</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                )}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: { height: 500, width: width },
    child: { width: width },
    text: { fontSize: width * 0.5, textAlign: 'center' },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
        textAlign: 'left'
    },
    description: {
        fontSize: 12,
        color: 'white',
        marginBottom: 10,
        width: width * .8
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
    },
});

export default MovieBannerCarousel;