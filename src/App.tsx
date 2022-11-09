import './App.css';
import Card from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';
import {useState,useEffect} from 'react'
import axios from 'axios';

function App() {
  const [users, setUsers] = useState<IUser[]>([])
  useEffect (()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then(res=>setUsers(res.data))
  },[])
/*   const users:IUser[] =[
    {id:1, name: 'Илона', email:'ilonaverenich@tut.by',address:{city:'Minsk', street:'Ignatovskogo', zipcode:'222852'}},
    {id:2, name: 'Евгений', email:'evgenii@tut.by',address:{city:'Minsk', street:'Melnikaite', zipcode:'3r53'}}
  ] */
  return (
    <div className="App">
      <Card width={'100px'} heigth={'100px'}/>
      <UserList users={users}/>
   
    
    </div>
  );
}

export default App;
