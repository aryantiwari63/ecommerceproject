// import React, { useEffect, useState } from 'react';

// const CategoryPage = ({ category }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch(`/products/${category}`);
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.log('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, [category]);

//   return (
//     <div>
//             <div>
//         {products.map((product) => (
//           <div key={product._id}>
//             <h2>{product.name}</h2>
//             <p>{product.description}</p>
//             <p>${product.price}</p>
//             <img src={product.imageUrl} alt={product.name} width="200" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryPage;
import React, { useState, useEffect } from 'react';

function ProductList({ category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/products/${category}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    if (category) {
      fetchProducts();
    }
  }, [category]);

  return (  
    <div className='mt-24'>
      <h1 className='text-xl'>Products in {category}</h1>
      {products.length > 0 ? (
        
          <div className='grid md:grid-cols-3 gap-5'>
          {products.map((product) => (
            <div  key={product.id} className="card h-85  rounded-sm border-black border-1 p-3">
              <div className='h-3/6'>
              <img src={product.imageUrl} alt="productimage" className='h-full w-full'/>
            
            </div>
             <div className='h-3/6'>
              <p >{product.name}</p>
              <p className='text-red-500'>₹{product.price}</p>
              <button className='w-full h-10 text-sky-700 hover:bg-sky-700  hover:text-white mx-2'>Add to card</button>
            </div>
    
            </div>
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}

export default ProductList;
