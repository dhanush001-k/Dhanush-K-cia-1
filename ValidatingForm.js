import { useState} from 'react';
import './ValidatingForm.css'
function ValidatingForm() {
    const initValues={username:'',email:'',password:''}
    const [formValues,setFormValues]=useState(initValues);
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);
    const Change=(event)=>{
        const{id,value}=event.target;
        setFormValues({...formValues,[id]:value});
        console.log(formValues);
    }
    const Submit=(event)=>{
        event.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }
    const validate=(val)=>{
        const errors={};
        const reg=new RegExp("[0-9]")
        const prg=new RegExp("[A-Z][A-za-z0-9$_]+")

        if(!val.username)
        errors.username="Please Fill the Username";
        else if(val.username.length<5)
        errors.username="Username must have minimum 5 characters";
        else if(reg.test(val.username))
        errors.username="Username must contain only alphabets";

        if(!val.email)
        errors.email="Email is Required";
       
        if(!val.password)
        errors.password="Please Fill the password";
        else if(!prg.test(val.password))
        errors.password="Invalid Password";
        return errors;
    }

    return (
        <>
       <body></body>
        <div className='container'>
            {
                Object.keys(formErrors).length===0 && isSubmit?
                (<h1 style={{background:"green",color:"white"}}>Signed In Successfully</h1>)
                :(<pre></pre>)
            }
        <form onSubmit={Submit}>
        <center>
            <h1>Dynamic Form</h1>
           <div id="box">

            <div className='row'>
                <label>User Name</label><br></br>
                <input type="text" id='username' placeholder='Enter User Name' value={formValues.username}
                    onChange={Change}/>
            </div>
            <p  style={{color:"red"}}>{formErrors.username}</p>

            <div className='row'>
                <label>E-mail</label><br></br>
                <input type="email" id='email' placeholder='Enter User Email-id' value={formValues.email}
                    onChange={Change}/>
            </div>
            <p  style={{color:"red"}}>{formErrors.email}</p>

            <div className='row'>
                <label>Password</label><br></br>
                <input type="password" id='password' placeholder='Enter User Password' value={formValues.password}
                    onChange={Change}/>
            </div>
            <p  style={{color:"red"}}>{formErrors.password}</p>
<br></br>
            <div className='row'>
                <button className='btn btn-primary' id="button">Submit</button>
            </div>

            </div>
            </center>
        </form>
        </div>
        </>
     );
}

export default ValidatingForm;
