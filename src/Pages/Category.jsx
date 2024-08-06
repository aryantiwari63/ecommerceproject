

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function ProductList({ category }) {
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const navigate = useNavigate();

//   const productpagefun = (productid) => {
//     navigate(`/productpage/${productid}`);
//   };

//   const addToCart = async (productId, quantity) => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.post(
//         'http://localhost:5000/api/addtocart',
//         { productId, quantity },
//         {
//           headers: {
//             'Authorization': `${token}`
//           }
//         }
//       );
//       console.log('Cart updated:', response.data);
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//     }
//   };

//   const handleAddToCart = (productid, event) => {
//     event.stopPropagation();
//     addToCart(productid, 1);
//   };

//   const handleSearch = () => {
//     const filtered = products.filter(product =>
//       product.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredProducts(filtered);
//   };

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch(`http://localhost:5000/api/products/${category}`);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setProducts(data);
//         setFilteredProducts(data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     if (category) {
//       fetchProducts();
//     }
//   }, [category]);

//   useEffect(() => {
//     handleSearch(); 
//   }, [searchTerm, products]);

  

//   const [currentPage, setCurrentPage] = useState(1);
//   const jobsPerPage = 5;


//   const indexOfLastJob = currentPage * jobsPerPage;
//   const indexOfFirstJob = indexOfLastJob - jobsPerPage;
//   const currentJobs = filteredProducts.slice(indexOfFirstJob, indexOfLastJob);

 
//   const totalPages = Math.ceil(filteredProducts.length / jobsPerPage);


//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };






//   return (
//     <div className='mt-28'>
//       <div className='flex items-center mb-2 flex justify-center'>
//         <input
//           type='text'
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className='p-2 border rounded-2xl'
//           placeholder='Search products'
//         />
//         <button onClick={handleSearch} className='ml-2 w-20 p-2 bg-blue-500 text-white rounded-2xl'>
//           Search
//         </button>
//       </div>
//       <h1 className='text-xl'>Products in {category}</h1>
//       {filteredProducts.length > 0 ? (
//         <div className='grid md:grid-cols-3 gap-5'>
//           {filteredProducts.map((product) => (
//             <div key={product._id} className="card h-85 rounded-sm border-black border-1 p-3" onClick={() => { productpagefun(product._id) }}>
//               <div className='h-3/6'>
//                 <img src={product.imageUrl} alt="productimage" className='h-full w-full' />
//               </div>
//               <div className='h-3/6'>
//                 <p>{product.name}</p>
//                 <p className='text-red-500'>₹{product.price}</p>
//                 <button className='w-full h-10 text-sky-700 hover:bg-sky-700 hover:text-white mx-2' onClick={(event) => { handleAddToCart(product._id, event) }}>Add to cart</button>
//               </div>
//             </div>
//           ))}
//              <button className="pagecontrol" onClick={handlePrevPage}>{currentPage}</button>
//              <button className="pagecontrol" onClick={handleNextPage}>{currentPage + 1}</button>
//         </div>
     
//       ) : (
//         <p>No products found.</p>
//       )}
//     </div>
//   );
// }

// export default ProductList;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ProductList({ category }) {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  const productpagefun = (productid) => {
    navigate(`/productpage/${productid}`);
  };

  const addToCart = async (productId, quantity) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:5000/api/addtocart',
        { productId, quantity },
        {
          headers: {
            'Authorization': `${token}`
          }
        }
      );
      console.log('Cart updated:', response.data);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const handleAddToCart = (productid, event) => {
    event.stopPropagation();
    addToCart(productid, 1);
  };

  const handleSearch = () => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/products/${category}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    if (category) {
      fetchProducts();
    }
  }, [category]);

  useEffect(() => {
    handleSearch();
  }, [searchTerm, products]);

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredProducts.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(filteredProducts.length / jobsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='mt-28'>
      <div className='flex items-center mb-2 justify-center'>
        <input
          type='text'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='p-2 border rounded-2xl'
          placeholder='Search products'
        />
        <button onClick={handleSearch} className='ml-2 w-20 p-2 bg-blue-500 text-white rounded-2xl'>
          Search
        </button>
      </div>
      <h1 className='text-xl'>Products in {category}</h1>
      {currentJobs.length > 0 ? (
        <div>
          <div className='grid md:grid-cols-3 gap-5'>
            {currentJobs.map((product) => (
              <div key={product._id} className="card h-85 rounded-sm border-black border-1 p-3" onClick={() => { productpagefun(product._id) }}>
                <div className='h-3/6'>
                  <img src={product.imageUrl} alt="productimage" className='h-full w-full' />
                </div>
                <div className='h-3/6'>
                  <p>{product.name}</p>
                  <p className='text-red-500'>₹{product.price}</p>
                  <button className='w-full h-10 text-sky-700 hover:bg-sky-700 hover:text-white mx-2' onClick={(event) => { handleAddToCart(product._id, event) }}>Add to cart</button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4 gap-10">
            <button 
              className='p-2 h-10 w-10 bg-black text-white rounded-full '
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              {currentPage}
            </button>
          
            <button 
              className='p-2 h-10 w-10 bg-black text-white  rounded-full '
              onClick={handleNextPage}
              disabled={currentPage === totalPages}

            >
              {currentPage + 1}
            </button>
          </div>
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}

export default ProductList;
