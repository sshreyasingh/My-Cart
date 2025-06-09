import React from 'react';

class Navbar extends React.Component {
    render() { 
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      // <h2>My Cart</h2>
        <h2 style={{ 
  color: "white", 
  textAlign: 'center', 
  fontSize: '2rem', 
  fontWeight: 'bold', 
  marginBottom: '20px',
  fontStyle: 'italic',
  fontFamily: `Oswald`  
}}>
  My Cart Aisle
</h2>    
    </a>
    <a className="navbar-brand" href="#">
    <h1 className="display-3">Welcome to My Cart Aisle</h1>
    </a>
  </div>
</nav>

        );
    }
}

 
export default Navbar;
