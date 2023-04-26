import axios from 'axios';

const searchImages = async (query) => {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
        headers: { Authorization: 'Client-ID NuP3mD7he8t_Y2s2JOnS_6H7CUjA4aSD4PmXi7vMqeE' },
        params: { query: query },
    });
    
    return response;
};

export default searchImages