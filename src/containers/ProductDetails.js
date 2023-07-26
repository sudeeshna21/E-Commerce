import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import {selectedProduct, removeSelectedProduct} from '../redux/actions/productActions'
import './ProductComponent.css'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'

const ProductDetails = () => {
    const product = useSelector((state)=>state.product)
    const { image, title, price, category, description } = product;
    const { productId } = useParams()
    const dispatch = useDispatch()


    useEffect(()=>{
        if(productId && productId!== ""){
            fetchProductDetail();
        }
        return()=>{
            dispatch(removeSelectedProduct())
        }
    }, [productId])

    const fetchProductDetail = async()=>{
        const response = await axios
                            .get(`https://fakestoreapi.com/products/${productId}`)
                            .catch(err=>console.log(err))
        dispatch(selectedProduct(response.data))
    }


    return (
        <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className='product-flex'>
            <div>
                <img className="image-details" src={image} />
            </div>
            <div className='details-div'>
                <Typography className='title'>{title}</Typography>
                <Typography className='item-price'>${price}</Typography>
                <Typography className='item-category'>{category}</Typography>
                <Typography className='description'>{description}</Typography>
                <Button 
                variant= 'contained'
                className='add-cart'>Add to Cart</Button>
            </div>
        </div>
      )}
    </div>
    )
}

export default ProductDetails