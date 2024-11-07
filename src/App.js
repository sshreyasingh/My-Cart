// import logo from './logo.svg';
// import './App.css';
// import Navbar from './components/navbar';
// import ProductList from './components/ProductList';
// import React,{useState} from 'react';

// function App() {
//   const productList=[
//     {
//       price:20000,
//       name:"Redmi note 6A",
//       quantity:0,
//     },
//     {
//       price:80000,
//       name:"Samsung note 2",
//       quantity:0,
//     }
//   ]
//   let [ProductList, setProductList]= useState(productList)

//   function incrementQuantity(index){
//     let newProductList=[...productList]
//     newProductList[index].quantity++
//     setProductList(newProductList);
//   }

//   return (
//     <>
//     <Navbar/>
//     <main className="container mt-5">
//     <ProductList productList={productList} incrementQuantity={incrementQuantity}/>
//     </main>
//     </>
//   );
// }

// export default App;
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import ProductList from './components/ProductList';
import React, { useState } from 'react';
import Footer from './components/Footer';

function App() {
  const initialProductList = [
    {
      price: 70000,
      name: "Redmi note 6A ",
      quantity: 0,
    },
    {
      price: 80000,
      name: "Samsung note 2 ",
      quantity: 0,
    },
    {
      price: 95000,
      name: "Realme Pro Max ",
      quantity: 0,
    }
  ];

  let [products, setProducts] = useState(initialProductList);
  let [totalAmount, setTotalAmount] = useState(0);


  function incrementQuantity(index) {
    let newProductList = [...products];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount)
    setProducts(newProductList);
  }

  function decrementQuantity(index) {
    let newProductList = [...products];
    let newTotalAmount = totalAmount;
    if(newProductList[index].quantity >0) {
    newProductList[index].quantity-- ; 
    newTotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProducts(newProductList);
  };

  const resetQuantity=()=>{
    let newProductList = [...products];
    newProductList.map((products)=>{
      products.quantity=0
    })
    setProducts(newProductList);
    setTotalAmount(0);
  }

  const removeItem=(index)=>{
    let newProductList = [...products];
    let newTotalAmount = totalAmount;
    setTotalAmount(newTotalAmount);
    newTotalAmount -= newProductList[index].quantity*newProductList[index].price;
    newProductList.splice(index,1);
    setProducts(newProductList);
    setTotalAmount(newTotalAmount);
  };

  return (
    <>
      <Navbar/>
      <main className="container mt-5">
        <ProductList productList={products}
        incrementQuantity={incrementQuantity} 
        decrementQuantity={decrementQuantity}
        removeItem={removeItem}  />
        
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
    </>
  );
}

export default App;
