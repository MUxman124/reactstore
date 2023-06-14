import axios from 'axios';
const url = "https://fakestoreapiserver.reactbd.com/products"
// const url = 'https://fakestoreapi.com/products';

const Product = async () => {
    const response = await axios.get(url);
    return response.data;
}

export default Product