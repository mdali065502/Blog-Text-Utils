import React ,{useState} from 'react'

function  About(props) {
  let mystyle={
    color:props.mode==='dark'?'white':'#042743',
    backgroundColor:props.mode ==='dark'?'rgb(36 74 104)':'white',
    
  }
    // const  [mystyle, setmystyle] = useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })
    
    //  const togglestyle =()=>{
    //     if(mystyle.color ==='black'){
    //         setmystyle({
    //             color:"white",
    //             backgroundColor:"#a8a8a8fa"
    //         })
    //         setbtntext("Enable Ligth Mode")
    //     }
    //     else{
    //           setmystyle({
    //             color:"black",
    //             backgroundColor:"white"
    //         })
    //         setbtntext("Enable Dark Mode")
    //     }
    // }
 
    return (
        <>
        <div classNameName="Container" style={mystyle} >
            <h1 className="my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>About Us</h1>
          <div className="accordion" id="accordionExample" style={mystyle}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button"  style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Analyze Your blog-text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" style={mystyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button"  style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free to Use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" style={mystyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Browser Compatibles
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" style={mystyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div> 
 
        {/* <div><button  onClick={togglestyle} className="btn-sn btn-sbn" type="button">{btntext}</button> </div>  */}
        {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={togglestyle}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>  
  </div> */}
    
        </div>
</>
    )

}

export default  About
