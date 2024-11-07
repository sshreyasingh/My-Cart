import React from 'react'

export default function Product(props) {
  return (
    <div className="row">
     <div className="col-4">
       <h2>{props.product.name}<span className="badge text-bg-secondary">₹{props.product.price}</span></h2>
     </div>
     <div className="col-3">
     <button type="button" className="btn btn-outline-danger btn-sm" onClick={()=>{props.decrementQuantity(props.index)}}> - </button>
     <button type="button" className="btn btn-outline-secondary btn-sm">{props.product.quantity}</button>
     <button type="button" className="btn btn-outline-success btn-sm" onClick={()=>{props.incrementQuantity(props.index)}}> + </button>
     </div>
     <div className='col-2'>
     <p>₹{props.product.quantity * props.product.price}</p>
     </div>
     <div className='col-2'>
        <button className=' btn btn-danger' onClick={()=>
          {
            props.removeItem(props.index)
          }}>
          REMOVE
        </button>
     </div>
    </div>
  )
}
