//Controlled Component
//Making component renders as per user 
import CrossIcon from "../Icons/CrossIcon";
import { Button } from "./Button";
//component should be dynamic and render as per open / onClose
export function CreateContentModel({open,onClose}){
    return <div>
       {open &&  <div className="h-screen w-screen flex justify-center bg-black-500 bg-opacity-80 fixed top-0 left-0">
        <div className="bg-black-900 rounded-lg p-2 text-white font-mono relative  mt-44 w-[40vh] max-h-[50vh] overflow-auto">

        <span className="bg-black-900 p-2 m-2 rounded-md text-white-900 font-mono ">

        <div className="flex justify-end m-1 cursor-pointer" onClick={onClose}>
            <CrossIcon size ="lg"></CrossIcon> 
        </div>
            <div className="flex flex-col items-center mt-4">
                <Input text=  {"Title"} placeholder ={"Title"}></Input>
                <Input  text=  {"Link"} placeholder ={"Link"}></Input>
            <Button  variant = "secondary" text= "Add To Brain" size="lg"/>
            {/* <input type= "dropbox"/>  */}
            </div>
        </span>
        </div>
        </div>}
    </div>

}

function Input({ text, placeholder }) {
  return (
    <div className="m-2">
      <input
        type={text}
        placeholder={placeholder}
        className="
          w-full px-3 py-2
          rounded-md
          bg-black-500
          text-white
          placeholder-gray-400
          border border-gray-600
          focus:border-purple-500
          focus:ring-2 focus:ring-purple-500
          outline-none
          transition-all duration-200
          font-mono
        "
      />
    </div>
  );
}
