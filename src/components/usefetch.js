const { useState, useEffect } = require("react")

function Usefetch(){
    const usefetch=(url)=>{
        const[data,setdata]=useState(null);
        useEffect(()=>{
            fetch(url)
            .then((res)=>res.json())
            .then((data)=>setdata(data))
        })
    }
    return(
        <div>
            
        </div>
    )
}