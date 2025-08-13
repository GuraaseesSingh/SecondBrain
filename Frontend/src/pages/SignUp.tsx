import { useState } from "react";
import { Button } from "../components/ui/Button";

export default function SignUp() {
    const [submit,setSubmit] = useState(false)

    function submitted(){
        setSubmit(true)
        setTimeout(() => setSubmit(false), 3000);
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>    
          <div className="mr-16">
                 <Button className="w-full"
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
          <a href="/signIn" className="text-indigo-600 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}
