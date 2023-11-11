import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import products from './data'

function App() {
  const [productList, setProductList] = useState(products);

 //const [value, setValue] = useState("");
  //console.log(products); 
//update the return of App.js
const [form, setForm] = useState({
  itemName: "",
  price: 0,
  description: "Describe this item",
)};
const [isHiring,setIsHiring]=useState(true);
const handleChange = event => {
  setForm({ ...form, [event.target.name]: event.target.value })
  }
  const handleSubmit = event =>{
    event.preventDefault();
    // do what you want with the form data
    console.log('form in submit')
    console.log(form);
    const newProduct =  form;
    setProductList([newProduct, ...productList]);
    setForm({
      //const [form, setForm] = useState({
        
        itemName: "",
        price: 0,
        description: "Describe this item",
    })
  }
//return ( 
  //<div> <h1> Big Time Shopping </h1> 
 // <form>
 // <input type ="text" value={value}/> </form>
//  <ul> {productList.map(item => <li>{item.itemName} {item.price}</li>)}
//   </ul> 
//   </div> ) 
return (
  <div>
  
  <h1 onClick={toggleHiring}> Big Time Shopping </h1> 
  {isHiring ? <h2>Yes, we are hiring </h2>: <h2>Sorry, try again tomorrow</h2>}

  <form onSubmit={handleSubmit}>
      <input
          type="text"
          value={form.itemNamew}
          onChange={handleChange}
          name="itemName"
          placeholder="write name here"
      />
     <input
          type="number"
          value={form.price}
          onChange={handleChange}
          name="price"
          placeholder="write price here"
       />
      <input
          type="description"
          value={form.description}
          onChange={handleChange}
          name="description"
           placeholder="describe the product"
      />
      <input type ="submit" value="Submit Form"/>
      </form>
      <div>
       <h2>Preview our new item</h2> <h3>{form.itemName}</h3> 
       <h4>{form.price}</h4> 
       <h5>{form.description}</h5>
       </div>
       </div>
      



)

//return ( 
 // <div> 
 // <h1> Hi there! </h1> 
 // <ul> {productList.map(item => <li>{item.itemName}</li>)} 
 // </ul> 
  //</div> 
//)}
export default App;
