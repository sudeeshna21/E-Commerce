import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { setProducts } from '../redux/actions/productActions';


const ProductListing = () => {
    const products = useSelector((state)=>state);
    const dispatch = useDispatch()

    useEffect(()=>{
        fetchProducts()
    }, [])

    const fetchProducts = async()=>{
        const response = await axios
                .get('https://fakestoreapi.com/products')
                .catch((err)=>{
                    console.log("err:", err)
                })
                dispatch(setProducts(response.data))

    }


  return (
    <div className="ui grid container">
        <ProductComponent/>
    </div>
  )
}

export default ProductListing