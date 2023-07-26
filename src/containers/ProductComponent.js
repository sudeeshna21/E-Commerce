import React from 'react'
import { useSelector } from "react-redux";
import './ProductComponent.css';
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom'

const ProductComponent = () => {
    const products = useSelector((state)=>state.allProducts.products);
    
    
            return (
                <>
                <div className='cri-brands-cards'>
                {products.map((product, index)=>{
                    const {id, title, image, price, category} = product;
                    return(
                        <Link to={`/product/${id}`} key={id}>
                        <Card className='card'>
                            <CardContent>
                            <img className='image' src={image} alt={title}/>
                            <div className="header">{title}</div>
                            <div className="price">$ {price}</div>
                            <div className="meta">{category}</div>
                            </CardContent>
                        </Card>
                        </Link>
                    )
                })}
                </div>
                </>
            )
}

export default ProductComponent