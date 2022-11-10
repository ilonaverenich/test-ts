import './App.css';
import Card from './components/Card';
import UserList from './components/UserList';
import { ITodo, IUser } from './types/types';
import {useState,useEffect} from 'react'
import axios from 'axios';
import List from './components/List';
import UserItem from './components/UserItem';
import TodoItem from './components/TodoItem';
import EventsExample from './components/EventsExample'

function App() {
  const [users, setUsers] = useState<IUser[]>([])
  const [todo, setTodo] = useState<ITodo[]>([])
  useEffect (()=>{
    axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users').then(res=>setUsers(res.data));
  
  },[])  
  useEffect (()=>{
    axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res=>setTodo(res.data));
    console.log(todo)
  },[])
/*   const users:IUser[] =[
    {id:1, name: 'Илона', email:'ilonaverenich@tut.by',address:{city:'Minsk', street:'Ignatovskogo', zipcode:'222852'}},
    {id:2, name: 'Евгений', email:'evgenii@tut.by',address:{city:'Minsk', street:'Melnikaite', zipcode:'3r53'}}
  ] */
  return (
    <div className="App">
      <Card width={'100px'} heigth={'100px'}/>
      {/* <UserList users={users}/> */}
      <List items={users} renderItem={(user:IUser)=><UserItem user={user} key={user.id}/>}/>
      {/* <List items={todo} renderItem={(todo:ITodo)=><TodoItem todo={todo} key={todo.id}/>}/> */}
      <EventsExample/>
   
    
    </div>
  );
}

export default App;
