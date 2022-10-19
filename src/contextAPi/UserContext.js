import React, { createContext,useState,useEffect } from 'react'
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification,signInWithEmailAndPassword,signOut,onAuthStateChanged } from "firebase/auth";
import app from '../Firebase/Firebase.config'
export const myContext = createContext()
const auth = getAuth(app)
const UserContext = ({children}) => {

    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(true)
   const emailsubmit = (email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
   }

   const Verify = () =>{
     sendEmailVerification(auth.currentUser)
    .then(()=>{
      alert('verify your email')
    })
  }

  const Logout = () =>{
     signOut(auth)
     .then(() =>{
        console.log('sign out successfull')
     })
     .catch(error => console.error(error))

  }

  const login = (email,password) =>{
    setloading(true)
    return signInWithEmailAndPassword(auth, email,password)
  }


  useEffect(() => {
   const unsubscribe  = onAuthStateChanged(auth, (currentUser)=>{
    setuser(currentUser)
    setloading(false)
   })  
  
    return () => {
        unsubscribe()
    }
  }, [])
  

  
    const contextValue = {emailsubmit,Verify,login,Logout,user,loading}
    return (
       <myContext.Provider value ={contextValue}>
            {children}
       </myContext.Provider>
    );
};

export default UserContext;