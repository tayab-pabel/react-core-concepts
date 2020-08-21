import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const developers = ["Pabel", "Hridoy", "Yeasfi", "Rabbi", "Ayon"]

  const products = [
    {name: "Photoshop", price: "$25"},
    {name: "Illustrator", price: "$50"},
    {name: "After Effects", price: "$75"},
    {name: "After Encoder", price: "$100"},
    {name: "Adobe XD", price: "$150"},
  ]

  return (
    <div className="App">
      <header className="App-header">
       <div>
         <Counter></Counter>
         <Users></Users>
         <ul>
           {
             developers.map(developer => <li>{developer}</li>)
           }
  
         </ul>
        {
          products.map(pb => <Product product= {pb}></Product>)
        }
        
       </div>
      </header>
    </div>
  );

}

function Counter(){

  const [count, setCount] = useState(10);
  
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )

}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])

  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
  
}

function Product(props){
  
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    color: '#2C2C2C',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '300px',
    float: 'left'
  }

  return (
    <div style={productStyle}>
      <h3>{props.product.name}</h3>
      <h5>{props.product.price}</h5>
      <button>Buy Now</button>
    </div>
  )
  
}

export default App;
