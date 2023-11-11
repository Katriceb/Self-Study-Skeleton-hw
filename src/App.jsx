import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import productList from './data'

function App() {

  console.log(productList); 
//update the return of App.js

return ( 
  <div> 
  <h1> Hi there! </h1> 
  <ul> {productList.map(item => <li>{item.itemName}</li>)} 
  </ul> 
  </div> 
)}
export default App;
