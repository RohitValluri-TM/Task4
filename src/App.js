import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const initialValues = {firstName:'', lastName:'', email:"", 
                        securityQuestion:"", securityAnswer:"", bio:""}
  const [formdata, setFormdata] = useState(initialValues)
  const [errors, setErrors] = useState({firstNameerror:"", lastNameerror:"", bioError:""})
  const [isDisabled, setIsDisabled] = useState(true)

  const cancel=()=>{
    setFormdata('')
  }

  // const validate=()=>{

    
  // }

  function handleSubmit(event){
      event.preventDefault();
      console.log(formdata)
      if(formdata.firstName.length < 3 || formdata.firstName.length > 15){
        setErrors((e)=>({
          ...e, firstNameerror:"Firstname should be atleast 3 and atmost 15 charcters long"
        }))
      }
      else if(formdata.lastName.length < 3 || formdata.lastName.length > 15){
        setErrors((e)=>({
          ...e, lastNameerror:"Lastname should be atleast 3 and atmost 15 charcters long"
        }))
      }
      else if(formdata.bio.length <15){
        setErrors((e)=>({
          ...e, bioError:"Bio length should be greater than 15 characters"
        }))
      }
      else{
        setErrors((e)=>({
          ...e, firstNameerror:"", lastNameerror:"", bioError:"" 
        }))
      }
  
      if((errors.firstNameerror === "" && errors.lastNameerror === "" && errors.bioError==="")){
        setIsDisabled(false)
      }
  }

  function handleChange(event){
    const {name, value} = event.target;
    setFormdata({...formdata, [name] : value});
  }

  // useEffect(()=>{
  //   // console.log(errors)
  //   validate(formdata);
    
  // }, [formdata]);

  return (
    <div className="app">
      <form id='login' onSubmit={handleSubmit}>
      <h1 id="lgtxt">LOGIN</h1>
        
        <label>Firstname : </label>
        <input id="inpt" type="text" name="firstName" value={formdata.firstName} onChange={(e)=>handleChange(e)} ></input>
        {errors.firstName && <p>{errors.firstName}</p>}<br/>
        <label>Lastname : </label>
        <input id="inpt" type="text" name="lastName" value={formdata.lastName} onChange={(e)=>handleChange(e)} ></input>
        {errors.lastName && <p>{errors.lastName}</p>}<br/>
        <label>Email : </label>
        <input id="inpt" type="email" name="email" value={formdata.email} onChange={(e)=>handleChange(e)}></input>
        {errors.email && <p>{errors.email}</p>}
        <br/>
        <label>Security Question : </label>
        <select name='securityQuestion' onChange={(e)=>handleChange(e)}>
          <option value="Who is your favourite superhero ?">Who is your favourite superhero ?</option>
          <option value="Which food you like the most ?">Which food you like the most ?</option>
          <option value="What is your favourite movie of all time ?">What is your favourite movie of all time ?</option>
        </select><br/><br/>
        <label>Security Answer : </label>
        <textarea name="securityAnswer" onChange={(e)=>handleChange(e)}></textarea>
        <br/><br/>
        <label>Bio : </label>
        <textarea name="bio" onChange={(e)=>handleChange(e)} ></textarea>
        {errors.bio && <p>{errors.bio}</p>}
        <br/>
        <button disabled={isDisabled}>Submit</button>
        <button onClick={cancel}>Cancel</button>
      </form>
    </div>
  );
}

export default App;
