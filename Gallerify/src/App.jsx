import { useState, useEffect } from "react";
import Card from "./component/card";
import Navbar from "./component/nabar";
import Spinner from "./component/spinner";




export default function App() {

  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true)

  useEffect(() => {
    getData();
  }, [])


  async function getData() {

    const response = await fetch("https://picsum.photos/v2/list?page=2&limit=50");
    const data = await response.json()
    setData(data);
    setloading(false)


  }






  return (
    <div className=" h-screen overflow-auto flex flex-col gap-y-8 relative bg-[url('https://images.pexels.com/photos/34393350/pexels-photo-34393350.jpeg')] bg-cover ">
      <div className="sticky top-0 p-0 z-50">
        <Navbar />
      </div>
      <div
        className=
        {`${loading == false
            ? "columns-2 md:columns-3 lg:columns-3"
            : "flex justify-center h-screen items-center "
          } gap-y-4 px-4`}
      >

        {loading ? <div className="flex flex-col justify-center items-center"><Spinner /> ; <h4 className="font-bold mt-0 p-0 text-gray-400 text-center">Data Fetching...</h4></div> : data.map((obj, idx) => {


          return (

            <>
              <Card Name={obj.author} Image={obj.url} Url={obj.download_url} key={idx} />
            </>
          )
        })}
      </div>


    </div>

  )
}
