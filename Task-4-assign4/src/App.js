import { createContext } from 'react';
import './App.css';
import Dashboard from './Dashboard';

export const MainContext = createContext();
function App() {

  const data = {title:'Context API', username:'Rohit', activeProfileId:'1'}
  
  return (
    <MainContext.Provider value={data}>
        <h2>App</h2>
        <h4>Title : {data.title}</h4>
        <h4>Username : {data.username}</h4>
        <h4>Active Profile Id : {data.activeProfileId}</h4>
        <Dashboard/>
    </MainContext.Provider>
  );
}

export default App;
