import { useContext } from "react";
import { UserContext } from "./App";

const Grandchild=()=>{
    let [counter,] = useContext(UserContext);
    return(
        <div>
            <h2>{`Count: ${counter}`}</h2>
        </div>
    )
}

export default Grandchild;