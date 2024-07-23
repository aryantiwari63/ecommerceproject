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
    <div>
      <h1>Products in {category}</h1>
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}

export default ProductList;
