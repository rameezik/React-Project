import { useState } from "react"
import { BeatLoader } from "react-spinners"



export default function Card({ Image, Url, Name }, key) {

  const [load, setloading] = useState(true)



  return (

    <div key={key} className=" p-2 relative mb-4">



      {load && (
        <div className="absolute inset-0 flex justify-center items-center z-10 flex-col bg-[rgb(146,146,146,0.6)] rounded-xl">
          <BeatLoader size={4}  color="#fff"/>
          <h6 className=" text-gray-400 text-[12px] text-center">Image Loading..</h6>
        </div>
      )}


         <a className="cursor-pointer h-full w-full text-white visited:text-red-500 " 
      href={Image} target="_blank">
        <img 

         className={`${load ? "opacity-0" : "opacity-100"} transition-opacity duration-500  object-cover rounded-xl border-2 border-[#062223]`}

          src={Url} alt="image"

          onLoad={() => 
            { setloading(false) }
          }
          
          onError={() => {
            setloading(false)
          }} />

         {load? <h2> </h2>:
         <h2 className=" ml-1 font-semibold font-mono " >{Name}</h2>}

        </a>
     
     

    </div>
  )
}