import { useRef, useState } from "react";
import { signup, login, logout, useAuth } from "./firebase";


export default function App() {
  const [ loading, setLoading ] = useState(false);
  const currentUser = useAuth();
 const emailRef = useRef();
 const passwordRef = useRef();

  async function handleSignup(){
    setLoading(true);
    try{
    await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
       alert("Error!");
    }
    setLoading(false);
  }

  async function handleLogin(){
    setLoading(true);
    try{
    await login(emailRef.current.value, passwordRef.current.value);
    } catch {
       alert("Error!");
    }
    setLoading(false);
  }

  async function handleLogout(){
   setLoading(true);
   try {
     await logout();
   } catch {
     alert("Error!")
   }
   setLoading(false);
  }
  return (
    
    <div classNmae="main" >
      <div className="container">
    <div className="status">Current User:{currentUser?.email}</div>
    <div id="fields">
    <label for="email">Email</label>
       <input ref={emailRef} type="email" placeholder="Email"/>
       <label for="password">Password</label>
       <input ref={passwordRef} type="password" placeholder="Password"/>
      </div>

      <button className="btn" disabled={ loading || currentUser} onClick={handleSignup}>Sign Up</button>
      <button className="btn" disabled={ loading || currentUser} onClick={handleLogin}>Log In</button>
      <button  className="btn" disabled={ loading || !currentUser} onClick={handleLogout}>Log Out</button>
    </div>
    </div>
  );
}


