
import axios from 'axios';

let datas = [];
let datas1 = [];

const generateRandomRating = () => Math.floor(Math.random() * 5) + 1;

const fetchDataAndStoreInDatas = async () => {
  try {
  
    const response = await axios.get('http://localhost:4000/api/product/get'); // for all product 

    const data = response.data;

    datas = data.map(item => ({
      id: item._id,
      title: item.name,
      originalPrice: item.price,
      salePrice: item.price * 0.7, 
      description: item.description,
      rating: generateRandomRating(),
      src: item.image,
    }));

    console.log('Data fetched and stored in datas:', datas);
  } catch (error) {
    console.error('Error fetching and storing data in datas:', error);
  }
};


const fetchDataAndStoreInDatas1 = async () => {
  try {
    const response = await axios.get('http://localhost:4000/api/product/men');// api for men only 

    const data1 = response.data;

    datas1 = data1.map(item => ({
      id: item._id,
      title: item.name,
      originalPrice: item.price,
      salePrice: item.price * 0.7, 
      rating: generateRandomRating(),
      src: item.image,
    }));

    console.log('Data fetched and stored in datas1:', datas1);
  } catch (error) {
    console.error('Error fetching and storing data in datas1:', error);
  }
};

fetchDataAndStoreInDatas();

fetchDataAndStoreInDatas1();

export { datas, datas1 };
