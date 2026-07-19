const Note = () => {




    return (
        <div>
            <div className="bg-[radial-gradient(circle,#f59e0b,#fcd34d,#d97706)] p-2">
                <h1 className="text-center mb-0 pb-0 text-white text-2xl font-extrabold font-serif">TASKY</h1>
                <p className="text-center mt-0 pt-0 text-[10px]">Your Daily Task Tracker</p>
            </div>

            <div className=" bg-[radial-gradient(circle,#2563EB,#00299a)] text-white min-h-screen lg:flex flex-wrap ">

                <form className=" lg:w-1/2  lg:border-r-amber-400 border-dashed lg:border-r-2 lg:min-h-screen p-6">
                    <div className="flex flex-col items-center gap-4 ">
                        <h2 className="text-amber-300 font-bold text-[14px] font-serif mb-0  ">PLOT YOUR TASK</h2>

                        <input type="text" placeholder="Enter Task Title" className="border-2 border-amber-300 rounded-b-sm px-3 py-2 w-full bg-white text-gray-800 " />

                        <textarea placeholder="Enter Task Detail" className="border-2 border-amber-300 rounded-b-sm px-3 py-2 w-full h-32 bg-white text-gray-800 "></textarea>
                        <button type="submit" className="bg-[radial-gradient(circle,#f59e0b,#fcd34d,#d97706)] border-2 text-white font-bold border-white rounded-b-sm px-2 py-1 active:scale-95 w-full">Plot Task</button>
                    </div>
                </form>
                <div className="lg:w-1/2 p-6">
                    <h2 className="text-amber-300 font-bold text-[14px] font-serif mb-0 text-center">NOTED TASKS</h2>
                    <span><img src="note.png" alt="note image" className="h-[250px] w-[170px]" /></span>
                </div>

            </div>
        </div>
    )
}

export default Note;