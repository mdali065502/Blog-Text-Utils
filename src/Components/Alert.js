import React from 'react'

function Alert(props) {
    let mystyle={
       
        height:props.mode ==='dark'?'10px':''
        
        
      } 
    return (
        < >
        <div style={mystyle}>
     { props.alert &&  <div className={`alert alert-warning alert-dismissible fade show`} role="alert">
            <strong>{props.alert.type}</strong> : {props.alert.msg}
            
        </div>}
        </div>
        </>
    )
}

export default Alert
