const Note = ()=>{




    return(
        <div>
            <div className="bg-[radial-gradient(circle,#f59e0b,#fcd34d,#d97706)] p-2">
                <h1 className="text-center mb-0 pb-0 text-white text-2xl font-extrabold font-serif">TASKY</h1>
                <p className="text-center mt-0 pt-0 text-[10px]">Your Daily Task Tracker</p>
            </div>
        
        <div className=" bg-[radial-gradient(circle,#2563EB,#00299a)] text-white min-h-screen flex ">
            
            <form className=" lg:w-1/2 p-6 lg:border-r-amber-400 lg:border-dashed border-r-2 min-h-screen ">
              <div className="flex flex-col items-center gap-4">
                  <h2 className="text-amber-300 font-bold text-[14px] font-serif mb-0 ">PLOT YOUR TASK</h2>
                <input type="text" placeholder="Enter Task Title" className="border-2 border-amber-300 rounded-b-sm px-3 py-1 w-80" />
                <textarea placeholder="Enter Task Detail" className="border-2 border-amber-300 rounded-b-sm px-3 py-1 w-80 "></textarea>
                <button type="submit" className="bg-amber-300 border-2 text-[#0832a5] border-gray-300 rounded-2xl px-2 py-1 active:scale-80">Plot Task</button>
              </div>
             </form>
             <div className="lg:w-1/2">
             <h2 className="text-amber-300 font-bold text-[14px] font-serif mb-0 p-6 text-center">NOTED TASKS</h2>
                <img src="note.png" alt="note image" className="h-[250px] w-[170px]" />
             </div>
            
        </div>
        </div>
    )
}

export default Note;