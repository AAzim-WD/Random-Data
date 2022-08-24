
import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import User from './components/User/User';

function App() {
  const [users, setUsers] = useState([]);
  const [carts, setCart] = useState([]);
  const maleMember = users.filter(user => user.gender === 'male');
  const addedMe = (name) => {
       const newCarts = [...carts, name]
       setCart(newCarts); 
  }

  useEffect(() => {
        fetch("https://randomuser.me/api/?results=500")
        .then(res => res.json())
        .then(data => setUsers(data.results))
        .catch(err => console.log(err));
  },[]);

  return (
    <div className="App">
      
      <div>
      <ul>
         {
          maleMember.map(user => <User user={user} addedMe={addedMe}></User>)
         }
      </ul>   
      </div>    
      <div className="fixed">
        
        {
          carts.map(cart => <Cart cart={cart}></Cart>)
        }
    
       </div>   
    </div>
  );
}

export default App;
