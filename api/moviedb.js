// import axios from "axios";
import axios from "axios";
import { apiKey } from "../constants";


// endpoints
const apiBaseUrl = 'https://api.themoviedb.org/3';
const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`;
const upcomingMoviesEndpoint = `${apiBaseUrl}/movie/upcoming?api_key=${apiKey}`;
const topRatedMoviesEndpoint = `${apiBaseUrl}/movie/top_rated?api_key=${apiKey}`;
const popularMoviesEndpoint = `${apiBaseUrl}/movie/popular?api_key=${apiKey}`;
// functions to get images of different widths, (show images using these to improve the loading times)
export const image500 = posterPath=> posterPath? 'https://image.tmdb.org/t/p/w500'+posterPath : null;
export const image342 = posterPath=> posterPath? 'https://image.tmdb.org/t/p/w342'+posterPath : null;
export const image185 = posterPath=> posterPath? 'https://image.tmdb.org/t/p/w185'+posterPath : null;
export const image180 = posterPath=> posterPath? 'https://image.tmdb.org/t/p/original/'+posterPath : null;

// fallback images 
export const fallbackMoviePoster = 'https://img.myloview.com/stickers/white-laptop-screen-with-hd-video-technology-icon-isolated-on-grey-background-abstract-circle-random-dots-vector-illustration-400-176057922.jpg';
export const fallbackPersonImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUiF-YGjavA63_Au8jQj7zxnFxS_Ay9xc6pxleMqCxH92SzeNSjBTwZ0l61E4B3KTS7o&usqp=CAU';

const apiCall = async (endpoint, params)=>{
    const options = {
        method: 'GET',
        url: endpoint,
        params: params? params: {}
    };

    try{
        const response = await axios.request(options);
        return response.data;
    }catch(error){
        console.log('error: ',error);
        return {};
    }
}

// home screen apis
export const fetchTrendingMovies = ()=>{
    return apiCall(trendingMoviesEndpoint);
}
export const fetchUpcomingMovies = ()=>{
    return apiCall(upcomingMoviesEndpoint);
}
export const fetchTopRatedMovies = ()=>{
    return apiCall(topRatedMoviesEndpoint);
}
export const fetchPopularMovies = ()=>{
    return apiCall(popularMoviesEndpoint);
}

