import React, { useEffect, useCallback }from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent.js';
import { setProducts }  from '../redux/actions/productsActions';



const ProductListing = () => {
    const products = useSelector((state) => state.allProducts.products || []);
   const dispatch = useDispatch();
   const fetchProducts = useCallback(async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
                       .catch(error => console.log("Error", error));
    dispatch(setProducts(response?.data || []));
}, [dispatch]);


   useEffect(()=> {
    fetchProducts();

   }, [fetchProducts]);
   console.log("Products :", products)

    return (
        <div className="ui grid container">
           <ProductComponent products={products} />  {/* ✅ Pass products as prop */}
        </div>
    );
};

export default ProductListing;
