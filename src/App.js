import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const initialValues = {firstName:" ", lastName:" ", email:" ", 
                        securityQuestion:"Select an option", securityAnswer:" ", bio:" "}
  const [formdata, setFormdata] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [isDisabled, setIsDisabled] = useState(true)


  const cancel=()=>{
    setFormdata({firstName:" ", lastName:" ", email:" ", 
    securityQuestion:"Select an option", securityAnswer:" ", bio:" "})
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log(formdata)
    setFormdata({firstName:" ", lastName:" ", email:" ", 
    securityQuestion:"Select an option", securityAnswer:" ", bio:" "})
  }


  const validate=(e)=>{
      const err = {}
      const len = new RegExp("^(?=.{3,15}$)");
      const bioLen = new RegExp("^(?=.{16,}$)");
      const emailcheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(!len.test(e.firstName)){
      err.firstName="Firstname should be atleast 3 and atmost 15 charcters long"
    }
    else if(!len.test(e.lastName)){
      err.lastName="Lastname should be atleast 3 and atmost 15 charcters long"
    }
    else if(!e.email){
      err.email="Email is required!"
    }
    else if(!emailcheck.test(e.email)){
      err.email="Please enter a valid email"
    }
    else if(!bioLen.test(e.bio)){
      err.bio="Bio length should be greater than 15 characters"
    }
    
    else if(len.test(e.firstName)){
      setIsDisabled(false)
    }
    setErrors(err)
  }

  
  function handleChange(event){
    const {name, value} = event.target;
    setFormdata({...formdata, [name] : value});
  }

  useEffect(()=>{
    validate(formdata);
  }, [formdata]);

  return (
    <div className="app">
      <form id='login' onSubmit={handleSubmit}>
      <h1 id="lgtxt">LOGIN</h1>
        
        <label>Firstname : </label>
        <input id="inpt" type="text" name="firstName" value={formdata.firstName} onChange={(e)=>handleChange(e)}></input>
        {errors.firstName && <p>{errors.firstName}</p>}<br/>
        <label>Lastname : </label>
        <input id="inpt" type="text" name="lastName" value={formdata.lastName} onChange={(e)=>handleChange(e)}></input>
        {errors.lastName && <p>{errors.lastName}</p>}<br/>
        <label>Email : </label>
        <input id="inpt" type="email" name="email" value={formdata.email} onChange={(e)=>handleChange(e)}></input>
        {errors.email && <p>{errors.email}</p>}
        <br/>
        <label>Security Question : </label>
        <select name='securityQuestion' value={formdata.securityQuestion} onChange={(e)=>handleChange(e)}>
          <option value="Select an option">{formdata.securityQuestion}</option>
          <option value="What is your mother's maiden name?">What is your mother's maiden name?</option>
          <option value="What was the name of your first pet?">What was the name of your first pet?</option>
          <option value="What was the name of your first school?">What was the name of your first school?</option>
        </select><br/><br/>
        <label>Security Answer : </label>
        <input name="securityAnswer" value={formdata.securityAnswer} onChange={(e)=>handleChange(e)}></input>
        <br/><br/>
        <label>Bio : </label>
        <textarea name="bio" value={formdata.bio} onChange={(e)=>handleChange(e)}></textarea>
        {errors.bio && <p>{errors.bio}</p>}
        <br/>
        <button disabled={isDisabled}>Submit</button>
        <button onClick={cancel}>Cancel</button>
      </form>
    </div>
  );
}

export default App;
