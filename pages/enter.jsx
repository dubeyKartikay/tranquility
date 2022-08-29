import { useState,useCallback,useEffect, useRef } from "react";
import debounce from "lodash.debounce";
import Loader from "../components/Loader/Loader.component";
import { loginUser,createNewUser } from "../lib/auth";
import {signIn} from "next-auth/react"
export default function Enter() {
    const [isLogin,setisLogin]  = useState(true);
    const [username,setUsername]  = useState("");
    const [isLoading,setIsLoading]  = useState([true,""]);
    const emailRef = useRef();
    const passwordRef = useRef();
    const handleSubmit = async (event)=>{
        event.preventDefault();
        if(isLogin){
            return await loginUser(setIsLoading,emailRef,passwordRef);
        }
        if (!(isLoading[0]=== false && isLoading[1] ===  "Acceptable")) {
            return;
        }
        await createNewUser(setIsLoading,emailRef,passwordRef);
        return;
    }
     async function createNewUser(setIsLoading,emailRef,passwordRef) {
        setIsLoading([true, "Creating User"]);
        const res = await fetch('/api/auth/signup', { method: "POST", body: JSON.stringify({ "email": emailRef.current.value, username, "password": passwordRef.current.value }), headers: { "content-type": "application/json" } });
        const { message } = await res.json();
        if (message != "Created User") {
            setIsLoading([false, "Error Occured"]);
        } else {
            setIsLoading([false, "Created User"]);
    
        }
        return;
    }
    async function loginUser(setIsLoading,emailRef,passwordRef) {
        setIsLoading([true, "Checking Credentials"]);
        const result = await signIn("credentials", {
            redirect: false,
            identifier: emailRef.current.value,
            password: passwordRef.current.value
        });
        console.log(result);
        const { error } = result;
        if (error) {
            setIsLoading([false, "Failed to sign in"]);
    
        } else {
            setIsLoading([false, "signed in"]);
    
        }
        return;
    }
    const isUniqueUsername = useCallback(debounce( async (username)=>{
        if (username.length < 4) {
            setIsLoading([false,""])
            return
        }
        const res = await fetch("/api/utils/unique",{method:"POST",body:JSON.stringify({username}) ,headers:{"content-type":"application/json"}})
        const {message} = await res.json();
        console.log(message);
        if (message === "true") {
            setIsLoading([false,"Acceptable"])
        }else{
            setIsLoading([false,"Taken"])
        }
    },500
    ),[])
    useEffect(()=>{
        isUniqueUsername(username)
    },[username]);
    const handleUsernameChange = (event)=>{
        event.preventDefault();
        setIsLoading([true,"Loading"]);
        const enteredUsername = event.target.value;
        const validUsername = enteredUsername.match(/^(?=.{4,20}$)(?![_. ])(?!.*[_. ]{2})[a-zA-Z0-9._ ]+(?<![_. ])$/);
        if (enteredUsername.length < 4) {
           setIsLoading([false,"Username Too short"]);
           setUsername(enteredUsername);
        }else if (validUsername===null) {
            setIsLoading([false,"Username not in valid format"]);
            setUsername(enteredUsername);
        }else{
            setUsername(enteredUsername);
        }
        
    }
  return (
    <div>
        <Loader show={isLoading[0]}/>
        <form onSubmit={handleSubmit}>
           { isLogin &&(<>
            <label htmlFor="username">username/Email </label>
            <input type="text" name="username" id="username" ref={emailRef} />
            <br />
            <label htmlFor="password">Password</label>
            <input type="text" name="password" id="password" ref={passwordRef} />
            <button disabled = {isLoading[0]} type="submit">Submit</button>
            </>)
            }
            {!isLogin && (
            <>
             <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" ref={emailRef} />
            <br />
            <label htmlFor="create-username"> Create username</label>
            <input type="text" name="create-username" id="create-username"  onChange = {handleUsernameChange} value ={username} />
            <br />
            <p>{isLoading[1]}</p>
            <label htmlFor="create-password">Create password</label>
            <input type="text" name="create-password" id="create-password"  ref={passwordRef} />
            <button type="submit" disabled = {isLoading[0]}>Submit</button>
            </>)}
            <br />
            <button onClick={(event)=>{event.preventDefault();setisLogin(!isLogin)}}>{isLogin ?  "Don't have an acccount ?":"Login"}</button>
        </form>
    </div>
  )
}
