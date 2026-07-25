import { useState } from "react";

const Note = () => {

    const [title, setTitle] = useState("")
    const [details, setDetails] = useState("")
    const [task, settask] = useState([])


    
    const submitHandler = (e)=>{
        e.preventDefault();
        const copyTask = [...task];
        copyTask.push({title, details});
        settask(copyTask)
        setTitle("")
        setDetails("") 
    }

    const removeHandler = (id)=>{
        let updatedtask = [...task];
        updatedtask.splice(id,1);
        settask(updatedtask)

    }

    return (
        <>
            <div className="bg-[radial-gradient(circle,#f59e0b,#fcd34d,#d97706)] p-2">
                <h1 className="text-center mb-0 pb-0 text-white text-2xl font-extrabold font-serif">TASKY</h1>
                <p className="text-center mt-0 pt-0 text-[10px] font-semibold">Your Daily Task Tracker</p>
            </div>

            <div className=" bg-[radial-gradient(circle,#2563EB,#00299a)] text-white min-h-screen lg:flex flex-wrap ">

                <form onSubmit={(e)=>{
                    submitHandler(e);
                }} className=" lg:w-1/2  lg:border-r-amber-400 border-dashed lg:border-r-2 lg:min-h-screen p-6"
                >
                    <div className="flex flex-col items-center gap-4 ">
                        <h2 className="text-amber-300 font-bold text-[16px] font-serif mb-0  ">PLOT YOUR TASK</h2>

                        <input onChange = {(e)=>{
                           const  title = e.target.value
                            setTitle(title)
                        }} value={title} type="text" placeholder="Enter Task Title" className="border-2 border-amber-300 rounded-b-sm px-3 py-2 w-full bg-white sm:text-[12px] lg:text-[16px] text-gray-600 font-bold " />

                        <textarea onChange={(e)=>{
                            const details = e.target.value;
                            setDetails(details)
                        }} 
                        value={details}
                        placeholder="Enter Task Detail" className="border-2 border-amber-300 rounded-b-sm px-3 py-2 w-full h-32 bg-white lg:text-[16px] text-gray-600 font-semibold "></textarea>
                        <button type="submit" className="bg-[radial-gradient(circle,#f59e0b,#fcd34d,#d97706)] border-2 text-white font-bold border-white rounded-b-sm px-2 py-1 active:scale-95 w-full">Plot Task</button>
                    </div>
                </form>
                <div className="lg:w-1/2 px-3 py-6">
                  <h2 className="text-amber-300 font-bold text-[16px] font-serif m-0 p-0 text-center">TO DO TASKS</h2>
                <div className=" flex not-lg:gap-2 not-lg:justify-center lg:gap-x-12 lg:gap-y-0 p-0 ml-0 flex-wrap lg:justify-start">

                {task.map((elem, idx)=>{
                    console.log(elem)

                    return (
                        <div key={idx} 
                         className=" bg-[url('/nt.png')] bg-cover bg-center m-0 h-[200px] w-[170px] p-4 flex flex-col gap-1 items-start overflow-hidden text-xs relative ">
                            <h2 className="w-[51%] overflow-hidden  text-[17px] p-0  font-bold absolute top-11.5 left-11 text-blue-500">{elem.title.toUpperCase()}</h2>
                            <p className="w-[57%] wrap-break-word m-0 p-0 leading-6 line-clamp-3 absolute top-17 left-11 text-gray-800 text-[1.1em] font-semibold">{elem.details}</p>
                            <button className="bg-red-500 text-amber-300 px-2 py-0.5 font-bold absolute bottom-7  rounded-3xl left-[43px]  active:scale-95 border-2 border-black" onClick={(e)=>{
                                const id= e.target.value.idx;
                                removeHandler(id)
                            }}>Remove Task</button>
                        </div>
                    )
                }



                )}
                </div>
                </div>

            </div>
        </>
    )
}

export default Note;