import "../App.css"
function Header(){
  return(
    <>
    <div className="header">

      <img className="images" src="data:image/jpeg;base64,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" alt="" height={"80px"} width={"80px"} />

      
      <div className="options">
        <button className="but">Men</button>
        <button className="but">Women</button>
        <button className="but">Kids</button>
        <button className="but">Home and living</button>
        <button className="but">Beauty</button>
        <button className="but">Studio</button>

      </div>

      <input className="search" type="text" placeholder="Search for Products Brands and more" />

      <div className="profile">
        <button className="pro">Profile</button>
        <button className="pro">WishList</button>
        <button className="pro">Bag</button>
      </div>
      

    </div>
    </>
  )
}

export default Header;