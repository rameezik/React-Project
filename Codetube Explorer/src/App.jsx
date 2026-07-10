import Card from "./component/card"


function  App (){

const techChannels = [
  {
    name: "CodeWithHarry",
    speciality: "Full Stack Web Development",
    field: "Programming Education",
    founder: "CodeWithHarry",
    since: 2018,
    subscribers: "7.5M+",
    youtube: "Code With Harry",
    youtubeLink: "https://www.youtube.com/@CodeWithHarry",
    profilePic: "https://tse2.mm.bing.net/th/id/OIP.JjSqRRaG2w1COjpqaQ9lNAAAAA?r=0&pid=Api&h=220&P=0",
    rating: 5.0,
  },
  {
    name: "Sheriyans Coding School",
    speciality: "Frontend Development & UI/UX",
    field: "Programming Education",
    founder: "Sheriyans Coding",
    since: 2018,
    subscribers: "3.5M+",
    youtube: "Sheriyans Coding School",
    youtubeLink: "hhttps://www.youtube.com/@sheryians",
    profilePic: "https://tse4.mm.bing.net/th/id/OIP.N-_XxMwC7s1h9gjI850TkAHaGm?r=0&pid=Api&h=220&P=0",
    rating: 4.9,
  },
  {
    name: "Apna College",
    speciality: "DSA & Full Stack Development",
    field: "Programming Education",
    founder: "Apna College",
    since: 2020,
    subscribers: "7M+",
    youtube: "Apna College",
    youtubeLink: "https://www.youtube.com/@ApnaCollegeOfficial",
    profilePic: "https://tse2.mm.bing.net/th/id/OIP.JgF7CJUpFafA7g8fgfKSAwHaHa?r=0&pid=Api&h=220&P=0",
    rating: 4.9,
  },
  {
    name: "Hitesh Choudhary",
    speciality: "JavaScript, DevOps & AI",
    field: "Software Development",
    founder: "Hitesh Choudhary",
    since: 2016,
    subscribers: "1.6M+",
    youtube: "Hitesh Choudhary",
    youtubeLink: "https://www.youtube.com/@HiteshCodeLab",
    profilePic: "https://tse3.mm.bing.net/th/id/OIP.rxJSZs7Dmon7vkrim8CKZQHaHa?r=0&pid=Api&h=220&P=0",
    rating: 5.0,
  },
  {
    name: "Traversy Media",
    speciality: "Modern Web Development",
    field: "Web Development",
    founder: "Traversy Media",
    since: 2009,
    subscribers: "2.5M+",
    youtube: "Traversy Media",
    youtubeLink: "https://www.youtube.com/@TraversyMedia",
    profilePic: "https://tse4.mm.bing.net/th/id/OIP.Mq-ya2jQqVLtNRsDYW4MgwAAAA?r=0&pid=Api&h=220&P=0",
    rating: 5.0,
  },
  {
    name: "The Net Ninja",
    speciality: "Frontend & Backend Development",
    field: "Programming Tutorials",
    founder: "The Net Ninja",
    since: 2015,
    subscribers: "1.8M+",
    youtube: "The Net Ninja",
    youtubeLink: "https://www.youtube.com/@NetNinja",
    profilePic: "https://tse3.mm.bing.net/th/id/OIP.Mh0zRczB1HBJd_QpNF9S7QHaHX?r=0&pid=Api&h=220&P=0",
    rating: 5.0,
  },
  {
    name: "Programming with Mosh",
    speciality: "Software Engineering",
    field: "Programming Education",
    founder: "Prog with Mosh",
    since: 2014,
    subscribers: "4.6M+",
    youtube: "Programming with Mosh",
    youtubeLink: "https://www.youtube.com/@programmingwithmosh",
    profilePic: "https://tse2.mm.bing.net/th/id/OIP.KnIpERErT3GnU5MlBpQPnAHaHa?r=0&pid=Api&h=220&P=0",
    rating: 5.0,
  },
  {
    name: "Free Code Camp",
    speciality: "Programming, AI & Data Science",
    field: "Non-Profit Education",
    founder: "freeCodeCamp",
    since: 2014,
    subscribers: "11M+",
    youtube: "freeCodeCamp.org",
    youtubeLink: "https://www.youtube.com/@freecodecamp",
    profilePic: "https://tse2.mm.bing.net/th/id/OIP.8322NvljMRC_u3wsGwMPMQHaHa?r=0&pid=Api&h=220&P=0",
    rating: 5.0,
  },
  {
    name: "Fireship",
    speciality: "JavaScript, Firebase & Web Development",
    field: "Web Development",
    founder: "Fireship",
    since: 2017,
    subscribers: "4M+",
    youtube: "Fireship",
    youtubeLink: "https://www.youtube.com/@Fireship",
    profilePic: "https://tse2.mm.bing.net/th/id/OIP.YEZC77Ep163oEoG7sHjzXQAAAA?r=0&pid=Api&h=220&P=0",
    rating: 4.9,
  },
  {
    name: "Kevin Powell",
    speciality: "CSS & Responsive Design",
    field: "Frontend Development",
    founder: "Kevin Powell",
    since: 2018,
    subscribers: "1.2M+",
    youtube: "Kevin Powell",
    youtubeLink: "https://www.youtube.com/@KevinPowell",
    profilePic: "https://tse4.mm.bing.net/th/id/OIP.JMTRD0NzSR5mIrxaNIrPYgHaHa?r=0&pid=Api&h=220&P=0",
    rating: 5.0,
  },
  {
    name: "Web Dev Simplified",
    speciality: "React & JavaScript",
    field: "Web Development",
    founder: "Web Dev Simplified",
    since: 2017,
    subscribers: "1.8M+",
    youtube: "Web Dev Simplified",
    youtubeLink: "https://www.youtube.com/@WebDevSimplified",
    profilePic: "https://tse4.mm.bing.net/th/id/OIP.Qnx6k-U42hNWO3IBaFcymwHaHa?r=0&pid=Api&h=220&P=0",
    rating: 4.9,
  },
  {
    name: "Academind",
    speciality: "React, Angular & Node.js",
    field: "Programming Education",
    founder: "Academind",
    since: 2016,
    subscribers: "1M+",
    youtube: "Academind",
    youtubeLink: "https://www.youtube.com/@Academind",
    profilePic: "https://tse4.mm.bing.net/th/id/OIP.rq4J2IbBTZTMB6qI4AAbuwHaHk?r=0&pid=Api&h=220&P=0",
    rating: 4.8,
  },
  {
    name: "Tech With Tim",
    speciality: "Python, AI & Machine Learning",
    field: "Programming Tutorials",
    founder: "Tech With Tim",
    since: 2018,
    subscribers: "2M+",
    youtube: "Tech With Tim",
    youtubeLink: "https://www.youtube.com/@TechWithTim",
    profilePic: "https://tse2.mm.bing.net/th/id/OIP.MqGs1rpIw1LhW3j3Zxc4PgHaHa?r=0&pid=Api&h=220&P=0",
    rating: 4.8,
  },
  {
    name: "SuperSimpleDev",
    speciality: "JavaScript & React",
    field: "Frontend Development",
    founder: "SuperSimpleDev",
    since: 2020,
    subscribers: "2M+",
    youtube: "SuperSimpleDev",
    youtubeLink: "https://www.youtube.com/@SuperSimpleDev",
    profilePic: "https://tse4.mm.bing.net/th/id/OIP.6y0zxGfxrJJ_x59IBO1O1gHaHa?r=0&pid=Api&h=220&P=0",
    rating: 4.9,
  },
  {
    name: "Bro Code",
    speciality: "Programming Fundamentals",
    field: "Programming Tutorials",
    founder: "Bro Code",
    since: 2020,
    subscribers: "3M+",
    youtube: "Bro Code",
    youtubeLink: "https://www.youtube.com/@BroCodez",
    profilePic: "https://tse4.mm.bing.net/th/id/OIP.-g0ISFAKt78YJscOUbJkAwHaHa?r=0&pid=Api&h=220&P=0",
    rating: 4.8,
  },
];


  return(  
    <>
    <div className="Main">
  <h1 className="Title">CODETUBE EXPLORER</h1>
  <p className="Caption">
    Discover the Best Programming Creators to Level Up Your Coding Skills!
  </p>
</div>
    <div className="parent">
      {techChannels.map((elem, idx) => {
        return(
          <div key={idx}>
          <Card Name={elem.name} Rating={elem.rating} Speciality={elem.speciality} Field={elem.field} Founder={elem.founder} Pic={elem.profilePic} Date={elem.since} Link={elem.youtubeLink} Subs={elem.subscribers}/>
          </div>
        )
      })}

      
    </div>

    </>
    
  )
}


export default App;