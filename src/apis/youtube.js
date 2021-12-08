import axios from 'axios'

const KEY = 'AIzaSyCgWEx2nkm7zYnpkY9SaTG-MpcVwqfR6W4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    },
})