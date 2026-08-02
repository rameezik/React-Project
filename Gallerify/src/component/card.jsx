import Spinner from "./spinner"
import { useState } from "react"



export default function Card({ Image, Url, Name }, key) {

  const [load, setloading] = useState(true)



  return (

    <div key={key} className=" p-2 relative mb-4">



      {load && (
        <div className="absolute inset-0 flex justify-center items-center z-10">
          <Spinner />
        </div>
      )}

      <a className="cursor-pointer h-full w-full text-white visited:text-red-500 " 
      href={Image} target="_blank">
        <img 

         className={`${load ? "opacity-0" : "opacity-100"} object-cover rounded-xl border-2 border-[#062223]`}

          src={Url} alt="image"

          onLoad={() => 
            { console.log("imageloaded"); setloading(false) }
          }
          
          onError={() => {
            setloading(false)
          }} />

        <h2 className="ml-1   font-semibold font-mono ">{Name}</h2>

      </a>

    </div>
  )
}