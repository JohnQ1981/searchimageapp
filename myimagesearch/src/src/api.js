import axios from 'axios';
const searchImages = async (term)=>{
    const response =await axios.get('https://api.unsplash.com/search/photos',{
    headers:{
        Authorization: 'Client-ID XjPXJ2hHm54KILO4NhmCdSO8Oao2CjtRUTJ5Tgw8gwk'
    },
    params: {
        query: term,
    }
    });
    console.log(response.data.results);
    return response.data.results;
};
export default searchImages;