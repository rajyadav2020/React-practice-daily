import { useEffect, useState } from "react"

function Body(){

  const [Profile,setProfile] = useState([]);
  const [numberofprofile,setnumberofprofile] = useState("");
  const [name,setname] = useState("");

  async function generateprofile(count){
    const ran = Math.floor(1+Math.random()*10000)
    const res = await fetch(`https://api.github.com/users?per_page=${count}`)
    const data = await res.json();
    setProfile(data);
  }

  useEffect(()=>{
    generateprofile(10);
  } ,[])
  return(
    <>
    <div className="but">

      <input className="input" type="string" placeholder="search here" value={numberofprofile} onChange={ (e)=>setnumberofprofile(e.target.value)} />
      <button onClick={()=>generateprofile(Number(numberofprofile))}>Search profiles</button>
{/* 
      <input type="text" name="" id="" placeholder="search here" value={namesearch} onChange={ (e)=>setname(e.target.value)} />
      <button onClick={()}>Search here</button> */}

    <div className="profile">
      {
        Profile.map((value)=>{
          return (<div className="cards" key={value.id}>
            <img src={value.avatar_url} alt="" />
            <h2>{value.login}</h2>
            <a href={value.html_url}>Profile</a>
          </div>)
        } )
      }
    </div>
    </div>



    </>
  )
}

export default Body