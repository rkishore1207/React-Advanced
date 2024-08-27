import { useEffect, useState } from 'react'
import { getUsers } from './FakeApi';
import { useDebounce } from './Hooks/useDebounce';

export interface User{
  id:number,
  name:string
}


function App() {

  const [name,setName] = useState<string>('');
  const [isLoading,setIsLoading] = useState<boolean>(false);
  const debouncedValue = useDebounce<string>(name);
  const [persons,setPersons] = useState<User[]>([]);

  useEffect(()=>{

    setIsLoading(true);

    setTimeout(()=>{
      const users = getUsers(debouncedValue);
      setIsLoading(false);
      setPersons(users);
    },500);
    
  },[debouncedValue]);

  return (
    <>
      <input type='text' value={name} onChange={(event)=>setName(event.target.value)}/>      
      {
        isLoading ? <div>Loading...</div> :
        persons.map((person:User)=>{
          return(
            <div key={person.id}>{person.name}</div>
          )
        })
      }
    </>
  )
}

export default App
