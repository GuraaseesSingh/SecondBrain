import { useRef, useState } from "react";
import { Button } from "../components/ui/Button";
import { BackendURL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const [submit,setSubmit] = useState(false)
    const navigate =useNavigate()
    const usernameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    
    async function submitted(){
      const username = usernameRef.current?.value
      const password = passwordRef.current?.value
        setSubmit(true)
        // setTimeout(() => setSubmit(false), 2000);
      await axios
        .post(`${BackendURL}/signUp`,{
          username,
          password
        })
        alert("Account Created! Please SignIn")
        navigate('/signIn')
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>

        <form className="space-y-4">
        
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              ref= {usernameRef}
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              ref= {passwordRef}
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>    
          <div className="mr-16">
                 <Button
                 className="w-full"
                  fullwidth={true} 
                  variant="secondary" 
                  text="Submit" 
                  size = "md"
                  loaded={submit}
                  disabled={submit}
                  onClick={()=>{ submitted() }}
                  />

          </div>
        </form>
        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <a href="/signin" className="text-indigo-600 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}
