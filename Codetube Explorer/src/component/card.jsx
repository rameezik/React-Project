import "./card.css"
import { Star, Users, Crown } from "lucide-react";
export default function Card(props) {






    return (
        <>
            <div className="card">
                <div className="head">
                    <h2>{props.Speciality}</h2>
                </div>

                <button className="button">
                    <span>{props.Rating} </span>  <Star size={15} fill="gold" color="gold" padding={0} />
                </button>

                <img className="img" src={props.Pic} alt="codewithharry" />


                <div className="center">
                    <h3>{props.Name}</h3>
                    <h5>{props.Field}</h5>

                    <div className="stats">

                        <div className="stat-item">
                            <Star size={18} fill="gold" color="gold" />
                            <div className="text">
                                <h4>{props.Subs}</h4>
                                <p>Subscribers</p>
                            </div>
                        </div>

                        <div className="stat-item">
                            <Crown size={18} color="#A855F7" />
                            <div className="text">
                                <h4>{props.Founder}</h4>
                                <p>Since {props.Date}</p>
                            </div>
                        </div>

                    </div>



                </div>


                <div className="foot">
                    <button onClick={() => window.open(props.Link, "_blank")}>
  GO TO YOUTUBE
</button>
                </div>

            </div>


        </>
    )
}

