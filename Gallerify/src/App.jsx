import { useState, useEffect } from "react";
import Card from "./component/card";

export default function App(){

  const [data, setData] = useState([]);


  
  async function getData(){
    
    const response = await fetch("https://picsum.photos/v2/list?page=2&limit=50");
    const data = await response.json()
    console.log(data);
    setData(data);
  }
  let loading = <h2 className="text-gray-400 font-semibold absolute top-1/2 text-xl left-[45%]">NO DATA AVAILABLE</h2>
  if(data.length>0){
    loading = data.map((obj, idx)=>{

      
      return(
            
           <>
              <Card Name={obj.author} Image={obj.url} Url={obj.download_url} key={idx}/>
          </>
      )
    })
   
  }
   
  
  
  return(
    <div className="bg-black h-screen p-8 overflow-auto ">
    <button className="bg-green-700 mb-3 p-2 rounded-xl text-amber-50 active:scale-95 cursor-pointer" onClick={()=>{
      getData();
    }}>Get Data</button>
    <div className="flex flex-wrap gap-x-4 gap-y-8 justify-start ">
      {loading}
    </div>

    
    </div>
  
  )
}