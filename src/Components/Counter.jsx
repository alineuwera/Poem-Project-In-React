import React,{useState} from "react";

export default function Counter(){
    const [count,setCount] = useState(0);
    return(
        <div>
            <h1 className="text-3xl my-5 font-bold">Counter is: {count}</h1> 
            <button className="bg-green-300 mx-4 px-4 py-1 rounded text-white" onClick={()=>{setCount(count+1)}}>Increase</button>
            <button className="bg-slate-700 mx-4 px-4 py-1 rounded text-white" onClick={()=>{setCount(count-1)}}>Decrease</button>
            <button className="bg-purple-500 px-4 py-1 rounded text-white" onClick={()=>{setCount(0)}}>Reset</button>
        </div>
    )
}