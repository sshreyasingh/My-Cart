import React from 'react';
import Product from './Product';

export default function ProductList(props, i) {
  return (
    props.productList.length>0?
    props.productList.map((product,i)=>{
    return <Product product={product} key={i} 
    incrementQuantity={props.incrementQuantity} index={i} 
    decrementQuantity={props.decrementQuantity}
    removeItem={props.removeItem}/>
    })
    :<h1>No Item in your Cart!</h1>
  )
}
