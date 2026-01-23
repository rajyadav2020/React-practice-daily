function Mycomponent({name,description,allPhones,Price}){
  return(
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>Available phones:{allPhones.map(phone=>
        <span key={phone}>{phone}</span>
       ) } </p>
    </div>
  )
}

export  default Mycomponent;