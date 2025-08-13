import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";

export default function SignUp(){
    return (
        <div className="bg-black-500 h-screen w-full">

            <div className="flex  bg-gray-200 rounded-lg justify-center items-center text-white-900  font-mono 
                w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 
                max-h-[80vh] ">
                    <span className="w-full p-1 items-center ">
            <Input placeholder={"Username or email"}></Input>
            <Input placeholder={"Password"}></Input>
                <div className="flex flex-col items-center">
                    <Button 
                    variant="secondary"
                    text="SignUp"
                    size="md"
                    ></Button>
                </div>
            </span>
            
        </div>

        </div>



    )
}