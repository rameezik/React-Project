import { useState } from "react";

export default function App(){

  const [data, setData] = useState([]);

  async function getData(){

    const response = await fetch("https://picsum.photos/v2/list?page=2&limit=50");
    const data = await response.json()
    console.log(data);
    setData(data);
  }



  return(
    <div className="bg-black h-full p-2 flex flex-wrap gap-2">
    <button className="bg-green-700 text-amber-50 active:scale-95 cursor-pointer" onClick={()=>{
      getData();
    }}>Get Data</button>

    {data.map(
      (obj ,idx)=>{



        return(
          <div className="  rounded-xl bg-amber-200 h-40 w-60" key={idx}>
           <a className="cursor-pointer" href={obj.url}><img className="object-contain  w-full" src={obj.download_url} alt="image" /></a>
            
          </div>
        )
            }
    )}
    
    </div>
  
  )
}