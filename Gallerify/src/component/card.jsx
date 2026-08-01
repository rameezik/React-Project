import Spinner from "./spinner"
import { useState } from "react"



export default function Card(props){
      
  const [load, setloading] = useState(true) 
      

    return(

   <div className="h-[250px] w-[200px] p-0 relative">
    
    {load && (
    <div className="absolute inset-0 flex justify-center items-center z-10">
      <Spinner height={2} />
    </div>
  )}
      
            <a className="cursor-pointer h-full w-full text-white visited:text-red-500 " href={props.Image} target="_blank">
            <img className={`${load ? "opacity-0" : "opacity-100"} object-cover rounded-xl h-[90%] w-full`} 
            src={props.Url} alt="image" 
            onLoad={()=>{console.log("imageloaded"); setloading(false)}}
            onError={()=>{
                console.log(props.Image, "===error");
                setloading(false)
            }} />
            
            <h2 className="ml-1   font-semibold font-mono ">{props.Name}</h2> 
            </a>
        </div>
    )
}