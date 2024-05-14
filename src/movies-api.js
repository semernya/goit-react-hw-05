import axios from "axios"

axios.defaults.baseURL = 'https://api.themoviedb.org/3/'

const options = {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYTM2M2QwZDM0YjhjNmRmOTljM2VhNTNmMDEwMmJlNiIsInN1YiI6IjY2NDI2Zjg5MzIzOTQyOTdiZjhlNDRkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ci6KG8PjOB0r42io3tUQXMaHpnMlEzn873suC1B2mSQ'
    }
};

export const getTrendingMovies = async () => {
    const response = await axios.get('trending/movie/day?language=en-US', options);
    console.log(response.data.results);
    return response.data.results;
}
