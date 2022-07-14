import { useState, createContext } from 'react';
import './App.css';
import Parent from './Parent';

export const UserContext = createContext(); 
function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">  
        <UserContext.Provider value={[counter,setCounter]}>
          <h2>Parent</h2>
          <Parent/>
        </UserContext.Provider>
    </div>
  );
}

export default App;
