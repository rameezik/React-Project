import { useState, useEffect } from "react";
import Card from "./component/card";
import Navbar from "./component/nabar";
import Spinner from "./component/spinner";




export default function App(){

  const [data, setData] = useState([]);

  useEffect(()=>{
    getData();
  },[])

  
  async function getData(){
    
    const response = await fetch("https://picsum.photos/v2/list?page=2&limit=50");
    const data = await response.json()
    setData(data);
  }
  let loading = <Spinner className=""/>
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
    <div className="bg-black h-screen p-4 overflow-auto flex flex-col gap-y-8">
      <Navbar/>
   
    <div className="flex flex-wrap gap-x-4 gap-y-8 justify-evenly ">
      {loading}
    </div>

    
    </div>
  
  )
}