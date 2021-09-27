import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Navbar(props) {
  let mystyle={
  
    color:props.mode==='dark'?'white':'#042743',
    backgroundColor:props.mode ==='dark'?'#2c2c70':'#dddddd',
    
  }
    return (
        
      <div  style={mystyle}>
      <nav className={` navbar navbar-expand-lg   navbar-${props.mode} -${props.mode} `} >
  <div className="container-fluid" >
    <Link className="navbar-brand" to="/TextForm">Blog-TextUtils</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/TextForm">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About US</Link>    
        </li>
       
    
       
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>    
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>  
  </div>
    </div>
  </div>
   
</nav>
</div>
       
  
      
    
        
        
     
        
    )
}
Navbar.propTypes={
    title: PropTypes.string.isRequired,
    about: PropTypes.string
}
Navbar.defaultProps ={
    title:'Set Title Here',
    about:'About Text HEre'
}
export default Navbar
