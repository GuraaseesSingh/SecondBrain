import { useRef, useState } from "react";
import { Button } from "../components/ui/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BackendURL } from "../config";

export default function SignIn() {
   const [submit,setSubmit] = useState(false)
    const navigate =useNavigate()
    const usernameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    
    async function submitted(){
        setSubmit(true)
        setTimeout(() => setSubmit(false), 2000);
        const username = usernameRef.current?.value
        const password = passwordRef.current?.value
        try {
            const response = await axios.post(`${BackendURL}/signIn`, { username,password});
            console.log("✅ Signed in:", response);
        const token = response.data.token;
        localStorage.setItem("token", token);
        navigate("/dashboard");
  }catch( error:unknown){
    if(axios.isAxiosError(error)){
       console.error("Sign in failed:", error.response?.data?.message || error.message);
       alert(`${ error.response?.data?.message || error.message}`)
      // alert(error.response?.message || "Invalid username or password");
    }else{
      console.error("Unknown error:", error);
      alert("Something went wrong. Try again later.");
    }

  }
}
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Log In</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
            ref={usernameRef}
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
            ref={passwordRef}
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>    
          <div className="mr-16">
                 <Button className="w-full"
                  fullwidth={true} 
                  variant="secondary" 
                  text="Sign In" 
                  size = "md"
                  loaded={submit}
                  disabled={submit}
                  onClick={()=>{ submitted() }}
                  />  
          </div>
        </form>
        <p className="text-center text-sm text-gray-500 mt-4">
         Don't have an account?{" "}
          <a href="/signup" className="text-indigo-600 hover:underline">
            Create an Account
          </a>
        </p>
      </div>
    </div>
  );
  }
