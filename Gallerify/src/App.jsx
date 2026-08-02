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
  let loading = <Spinner />
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
    <div className=" h-screen overflow-auto flex flex-col gap-y-8 relative bg-[url('https://images.pexels.com/photos/34393350/pexels-photo-34393350.jpeg')] bg-cover ">
     <div className="sticky top-0 p-0 z-50">
      <Navbar />
     </div>
   
    <div className="columns-2 md:columns-3 lg:columns-3 gap-y-4 px-4 ">
      {loading}
    </div>

    
    </div>
  
  )
}