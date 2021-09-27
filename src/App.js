import logo from './logo.svg';
import './App.css';
import React ,{useState} from 'react'
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alert';
import{
  BrowserRouter as Router,
  Switch,
  Route
}from "react-router-dom";


function App() {
  const [alert,setAlert]= useState(null)
  const showalert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  const [mode,setmode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor="#042743";
      showalert("Dark mode has been enabled","Success");
      document.title ="Blog-Utils Dark Mode";
    }
    else{
      setmode('light'); 
       document.body.style.backgroundColor="white";
       showalert("Dark mode has been disabled","Success")
       document.title ="Blog-Utils Light  Mode";
    }
  }
  return (
  <>
  <Router>
    <Navbar title="TextUtils" about="AboutTextsUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    </div>
    <Switch>
      <Route exact path="/about">
        <About mode={mode}/>
      </Route>
      <Route   exact path="/Textform">
    <TextForm showalert={showalert} heading="Enter the Your detail" mode={mode}/>
       </Route> 
      </Switch>
    
     </Router>
    </>
  
  
  );
}

export default App;
