
import React, {useState} from 'react'
function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("UpperCase Was Clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showalert("Converted into Upper Case","Success");
    }
    const handleLowClick=()=>{
        // console.log("LowerCase Was Clicked"+text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showalert("Converted into Lower Case","Success");
    }
    const handleClearClick=()=>{
        // console.log("LowerCase Was Clicked"+text);
        let newText='';
        setText(newText);
    }
    const handleClearText=()=>{
        let len=text.length-1;
        // let a=5;
        // console.log("LowerCase Was Clicked"+text);
        let newText=text.substr(0,len);
        setText(newText);
    }
    const handleCopyClick=()=>{
    //   let text= document.getElementById("mybox")
    //   text.select();
      navigator.clipboard.writeText(text);
  document.getSelection().removeAllRanges();
      props.showalert("Text Copy To Clip-Board","Success");
    }
    const handleExtraSpace=()=>{
        let newText =text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showalert("Extra Space Removes","Success");
    }
    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value)
    }
    const [text,setText]=useState('');
   
    let mystyle={
      
        background:props.mode ==='dark'?'#042743':'#e9ecef'
        
      } 
      
   
    return (
       <>
       <div style={mystyle}>
       <div className="container " style={{color:props.mode==='dark'?'white':'#042743'}}  >
        <h1 className="text-center">{props.heading}</h1>
        <hr />
       
        <p>Name*:<input type="text"name="name" required style={{backgroundColor:props.mode==='dark'?'rgb(65 90 112)':'white',color:props.mode==='dark'?'white':'black'}}/></p>
        <fieldset>
            <legend>Gender*</legend>
            <p>Male:<input type ="radio"name="gender"id="male" required style={{backgroundColor:props.mode==='dark'?'rgb(65 90 112)':'white',color:props.mode==='dark'?'white':'black'}}/></p>
            <p>Female:<input type ="radio"name="gender"id="female" style={{backgroundColor:props.mode==='dark'?'rgb(65 90 112)':'white',color:props.mode==='dark'?'white':'black'}}/></p>
            <p>Others:<input type ="radio"name="gender"id="others" style={{backgroundColor:props.mode==='dark'?'rgb(65 90 112)':'white',color:props.mode==='dark'?'white':'black'}}/></p>
            
        </fieldset> 
        <p>E mail:*<input type="email"name="email"id="email"required style={{backgroundColor:props.mode==='dark'?'rgb(65 90 112)':'white',color:props.mode==='dark'?'white':'black'}}/></p>
        <p>Contact No.:<input type="number"name="pincode"id="pincode" style={{backgroundColor:props.mode==='dark'?'rgb(65 90 112)':'white',color:props.mode==='dark'?'white':'black'}}/></p>
        
        <p>Address:<textarea name="address"id="address"cols="80"rows="6" style={{backgroundColor:props.mode==='dark'?'rgb(65 90 112)':'white',color:props.mode==='dark'?'white':'black'}} ></textarea></p>
        <hr />
        <h1  className="text-center">Enter your Blog/Article's</h1>
        <hr />
        <p>Blog:<textarea className="form-control" name="address"id="address"cols="150"rows="8" id="mybox" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'rgb(65 90 112)':'white',color:props.mode==='dark'?'white':'#042743'}}></textarea></p>
        <span> <button className="btn btn-sn"  disabled={text.length===0} onClick={handleUpClick}>Convert to Upper Case</button>
        <button className="btn btn-sn"  disabled={text.length===0} onClick={handleLowClick}>Convert to Lower  Case</button>
        <button className="btn btn-sn" disabled={text.length===0} onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-sn"  disabled={text.length===0} onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-sn" disabled={text.length===0}  onClick={handleExtraSpace}>Trim </button>
        <button className="btn btn-sn" disabled={text.length===0}  onClick={handleClearText}>&larr;</button>
        </span>
       
      <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
          <h3>Your Article  Summary</h3>
          <p>{text.split(/\s+/).filter((element)=>{return element!=0}).length}  words and {text.length} characters</p>
          <h4>Time to read your Article</h4>
          <p>{0.008* text.split(" ").length} minutes</p>
          <h2>Preview:</h2>
          
          <p>{text.length>0?text:"Nothing to preview it here"}</p>
      </div>
      <button  className="btn-sbn"type="submit">Submit</button>
      </div>
    
      </div>
       
       </>
    )
}

export default TextForm
