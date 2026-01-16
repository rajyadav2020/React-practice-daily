export default function Component({Name,Price,imageURL})
{
  return (

    <div style={{display:"flex",marginLeft:"400px"}}>
    <img src={imageURL} style={{height:"100px",margin:"20px",border:"2px",borderColor:"black",borderStyle:"solid"}}  alt="" />

    <div style={{height:"100px",width:"500px",border:"2px",borderColor:"black",borderStyle:"solid",backgroundColor:"gray",marginTop:"19px"}}>
      <h2 >{Name}</h2>
      <h2>{Price}</h2>

    </div>
    
    </div>
  )
}