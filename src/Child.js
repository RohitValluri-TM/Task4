import { useContext } from "react";
import { UserContext } from "./App";
import Grandchild from "./GrandChild";

const Child=()=>{
    let [counter,setCounter] = useContext(UserContext);
    return(
        <div>
            
           <button onClick={()=>{
            if(counter<=9){
                setCounter(counter+1)
            }
           }}>Increment</button>
           <h2>GrandChild</h2>
          <Grandchild />
        </div>
    )
}

export default Child;