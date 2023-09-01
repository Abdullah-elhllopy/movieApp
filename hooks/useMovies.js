import { useEffect, useState } from 'react';
import { fetchTopRatedMovies, fetchTrendingMovies, fetchUpcomingMovies , fetchPopularMovies } from '../api/moviedb';
export function useMovies() {
    const [trending, setTrending] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [popular, setPopular] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getTrendingMovies();
        getUpcomingMovies();
        getTopRatedMovies();
        getPopularMovies()
        
    }, []);
    const getPopularMovies = async () => {
        const data = await fetchPopularMovies();
        if (data && data.results) {
            setPopular(data.results);
            setLoading(false);
        }
    }
    const getTrendingMovies = async () => {
        const data = await fetchTrendingMovies();
        if (data && data.results) {
            setTrending(data.results);
            setLoading(false);
        }
    }
    const getUpcomingMovies = async () => {
        const data = await fetchUpcomingMovies();
        if (data && data.results) setUpcoming(data.results);
    }
    const getTopRatedMovies = async () => {
        const data = await fetchTopRatedMovies();
        if (data && data.results) setTopRated(data.results);
    }
    
    return { loading, upcoming, topRated, trending ,popular }
}