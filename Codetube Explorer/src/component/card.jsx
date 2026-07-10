 import  "./card.css"
 import {Star} from "lucide-react"
 export default function Card(){






    return(
    <>
    <div className="card">
        <div className="head">
            <h2>WEB DEVELOPMENT</h2>
            <img src="/images/codewithharry.jpg" alt="codewithharry" />
           <button>
           <h4>5</h4> <Star size={12} fill="gold" color="gold" />
           </button>
        </div>

        <div className="center">


        </div>


        <div className="foot">

        </div>

    </div>
    
    
    </>
    )
}

