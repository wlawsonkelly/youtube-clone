import axios from 'axios';

const KEY = 'AIzaSyDQcDy9oW3pu9CY-rS2wGcNr4rQqwJIrNM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: "snippet",
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
});