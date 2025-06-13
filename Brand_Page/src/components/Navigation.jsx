const Navigation=()=>{
      return (
        <nav>
          <div className="nav_container">
            <div className="img_container">
              <img src="/images/nike.webp" alt="" />
            </div>

            <div>
              <ul className="middlenav">
                <li>HOME</li>
                <li>LOCATION</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
              </ul>
            </div>

            <div className="rightnav">
              <button>Login</button>
            </div>
          </div>
        </nav>
      );
}

export default Navigation