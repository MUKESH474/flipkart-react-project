import { useCallback, useState } from "react";

function ParentComponent(){
    const[count,setcount]= useState(0);

    const handleclick=useCallback(()=>{
        setcount(count+1)
    },[count])
    return(
        <ChildComponent onclicl={handleclick}/>
    )

}
function ChildComponent({oclcick}){
    return(
        <button onClick={oclcick} >Click me</button>
    )
}
export default ParentComponent