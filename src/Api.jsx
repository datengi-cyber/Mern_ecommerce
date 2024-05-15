// // Import Axios
// import axios from 'axios';

// // Initialize the datas array
// let datas = [];
// let datas1 = []; // Initialize datas1 array

// // Function to generate random rating from 1 to 5
// const generateRandomRating = () => Math.floor(Math.random() * 5) + 1;

// // Function to fetch data from the first API endpoint and store in datas array
// const fetchDataAndStoreInDatas = async () => {
//   try {
//     // Make a GET request to the first API endpoint using Axios
//     const response = await axios.get('http://localhost:4000/api/product/get');

//     // Extract data from the response
//     const data = response.data;

//     // Convert data to the desired format and generate random rating
//     datas = data.map(item => ({
//       id: item._id,
//       title: item.name,
//       originalPrice: item.price,
//       salePrice: null,
//       description: item.description,
//       rating: generateRandomRating(),
//       src: item.image,
//     }));

//     console.log('Data fetched and stored in datas:', datas);
//   } catch (error) {
//     console.error('Error fetching and storing data in datas:', error);
//   }
// };

// // Function to fetch data from the second API endpoint and store in datas1 array
// // Function to fetch data from the second API endpoint and store in datas1 array
// const fetchDataAndStoreInDatas1 = async () => {
//   try {
//     // Make a GET request to the second API endpoint using Axios
//     const response = await axios.get('http://localhost:4000/api/product/men');

//     // Extract data from the response
//     const data1 = response.data; // Update to response.data instead of response.data1

//     // Convert data to the desired format and generate random rating
//     datas1 = data1.map(item => ({
//       id: item._id,
//       title: item.name,
//       originalPrice: item.price,
//       salePrice: null,
//       rating: generateRandomRating(),
//       src: item.image,
//     }));

//     console.log('Data fetched and stored in datas1:', datas1);
//   } catch (error) {
//     console.error('Error fetching and storing data in datas1:', error);
//   }
// };


// // Call the fetchDataAndStoreInDatas function to fetch data from the first API and store in datas
// fetchDataAndStoreInDatas();

// // Call the fetchDataAndStoreInDatas1 function to fetch data from the second API and store in datas1
// fetchDataAndStoreInDatas1();

// // Export the datas and datas1 arrays
// export { datas, datas1 };


// Import Axios
import axios from 'axios';

// Initialize the datas array
let datas = [];
let datas1 = [];

// Function to generate random rating from 1 to 5
const generateRandomRating = () => Math.floor(Math.random() * 5) + 1;

// Function to fetch data from the first API endpoint and store in datas array
const fetchDataAndStoreInDatas = async () => {
  try {
    // Make a GET request to the first API endpoint using Axios
    const response = await axios.get('http://localhost:4000/api/product/get');

    // Extract data from the response
    const data = response.data;

    // Convert data to the desired format and generate random rating
    datas = data.map(item => ({
      id: item._id,
      title: item.name,
      originalPrice: item.price,
      salePrice: item.price * 0.7, // 30% discount
      description: item.description,
      rating: generateRandomRating(),
      src: item.image,
    }));

    console.log('Data fetched and stored in datas:', datas);
  } catch (error) {
    console.error('Error fetching and storing data in datas:', error);
  }
};

// Function to fetch data from the second API endpoint and store in datas1 array
const fetchDataAndStoreInDatas1 = async () => {
  try {
    // Make a GET request to the second API endpoint using Axios
    const response = await axios.get('http://localhost:4000/api/product/men');

    // Extract data from the response
    const data1 = response.data;

    // Convert data to the desired format and generate random rating
    datas1 = data1.map(item => ({
      id: item._id,
      title: item.name,
      originalPrice: item.price,
      salePrice: item.price * 0.7, // 30% discount
      rating: generateRandomRating(),
      src: item.image,
    }));

    console.log('Data fetched and stored in datas1:', datas1);
  } catch (error) {
    console.error('Error fetching and storing data in datas1:', error);
  }
};

// Call the fetchDataAndStoreInDatas function to fetch data from the first API and store in datas
fetchDataAndStoreInDatas();

// Call the fetchDataAndStoreInDatas1 function to fetch data from the second API and store in datas1
fetchDataAndStoreInDatas1();

// Export the datas and datas1 arrays
export { datas, datas1 };
