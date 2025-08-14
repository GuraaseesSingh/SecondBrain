//Controlled Component
//Making component renders as per user 
import CrossIcon from "../Icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
//component should be dynamic and render as per open / onClose
export function CreateContentModel({open,onClose}){
    return <div>
       {open &&  <div className="h-screen w-screen inset-0 z-50 flex justify-center items-center bg-black-500 bg-opacity-80 fixed top-0 left-0">
        <div className="flex flex-wrap justify-center items-center relative  
        w-[70%] sm:w-[60%] md:w-[50%] lg:w-[40%]
         max-h-[50vh] ">

        <span className="bg-black-900 p-2 m-2 rounded-lg text-white-900 font-mono ">

        <div className="flex  justify-end m-1 cursor-pointer" onClick={onClose}>
            <CrossIcon size ="lg"></CrossIcon> 
        </div>
            <div className="flex flex-col items-center mt-4">
                <Input  placeholder ={"Title"}></Input>
                <Input  placeholder ={"Link"}></Input>
            <Button  variant = "secondary" text= "Add To Brain" size="lg"/>
            {/* <input type= "dropbox"/>  */}
            </div>
        </span>
        </div>
        </div>}
    </div>

}
