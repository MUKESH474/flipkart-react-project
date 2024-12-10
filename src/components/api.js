const { useState, useEffect } = require("react")

function Api(){
    const[data,setdata]=useState(null)
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/category/jewelery")
        .then(res=>res.json())
        .then(data=>setdata(data))
        .catch(error=>console.log(error))
    },[])
    return(
        <div>
            {data? (<ul> {data.map((item)=>(<div key={item}></div>))}</ul>):(<p>data</p>)}
        </div>
    )
}
export default Api