import React, { useContext ,useState} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { myContext } from '../../contextAPi/UserContext';
import './Login.css'
const Login = () => {
 const [error, seterror] = useState(null)
    // state 
    const {login} = useContext(myContext)
    const navigate  = useNavigate()
    let locatiion = useLocation()
    let from = locatiion.state?.from?.pathname || '/home';

    const handlelogin = (event) =>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        login(email,password)
        .then(result =>{
            const user = result.user
            console.log(user);
            navigate(from,{replace : true})
            
        })
        .catch(error => seterror(error))
    }

    return (
        <div className='from_box'>
        <h2> Login Now</h2>
        <form onSubmit={handlelogin}>
            <div className="form_control">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder='Your Email' required />
            </div>
            <div className="form_control">
                <label htmlFor="">Password</label>
                <input type="password" name="password" placeholder='Your Password' required />
            </div>
            <button type='submit'>Login</button>
            <p>{error}</p>
        </form>
        <p><small>Already have an account ?</small> <Link to ='/register'>Register </Link> </p>
         
    </div>
    );
};

export default Login;