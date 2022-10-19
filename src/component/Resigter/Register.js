import React,{useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { myContext } from '../../contextAPi/UserContext';

const Register = () => {
    const {emailsubmit,Verify} = useContext(myContext)
    const [error, seterror] = useState(null)
    const contextValue = (event) =>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value
        console.log(email,password,confirm);

        // chek conditions
        if(password !== confirm){
            seterror('password not match')
        }
        if(password.length < 6){
            seterror('password must be at last 6 charectars')
        }

        emailsubmit(email,password)
        .then(result =>{
            const user = result.user
            Verify()
            console.log(user)
        })
        .catch(error => console.error(error))   
    }

    return (
        <div className='from_box'>
        <h2> Registration  Now</h2>
        
        <form onSubmit={contextValue}>
            <div className="form_control">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder='Your Email' required />
            </div>
            <div className="form_control">
                <label htmlFor="">Password</label>
                <input type="password" name="password" placeholder='Your Password' required />
            </div>
            <div className="form_control">
                <label htmlFor="">Confirm Password</label>
                <input type="password" name="confirm" placeholder='Your Password' required />
            </div>
            <button type='submit'>SignIn</button>
            <p> {error} </p>
        </form>
        <p><small>Already have an account ?</small> <Link to ='/login'>Login </Link> </p>
         
    </div>
    );
};

export default Register;