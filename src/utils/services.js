import axios from 'axios';

export const getHello = async () => {
    const result = await axios.get('http://jsonplaceholder.typicode.com/posts/1');
    const data = await result.data;
    console.log(data)
    return data;
};
