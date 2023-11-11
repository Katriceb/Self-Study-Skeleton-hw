import React from 'react'

function controlled() {
    //const [value, setValue] = useState("");
    const[form,setForm] =useState ({
        itemNamoe:"",
        price:0,
        description:"Describe this item",
    
    })
}
    const handleChange = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
        }
        handleSubmit = event =>{
        event.preventDefault() 
        console.log('you prevented the default'); 
        console.log(form); 
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
        <h2>Controlled will go here</h2>
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

        




export default controlled;