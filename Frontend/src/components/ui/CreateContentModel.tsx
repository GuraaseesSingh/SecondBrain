//Controlled Component
//Making component renders as per user 
import axios from "axios";
import CrossIcon from "../Icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import { BackendURL } from "../../config";
import { useState } from "react";
//component should be dynamic and render as per open / onClose
export function CreateContentModel({open,onClose, onAdd}){
   const [title, setTitle] = useState("");
   const [link, setLink] = useState("");
   const [type, setType] = useState("Youtube Video");

  async function handleSubmit() {
    try {
      const response = await axios.post(
        `${BackendURL}/content`,
        { title, link, type },
        {
          headers: {
            authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      // Optimistically update UI via parent fast
      onAdd?.(response.data);
      // Close modal
      onClose();
      // Reset form
      setTitle(""); setLink(""); setType("Youtube Video");
    } catch (err) {
      console.error("Failed to add content:", err);
    }
  }


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
                <Input
                  placeholder={"Title"}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <Input
                  placeholder={"Link"}
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
                {/* Dropdown for type */}
                 <div className="w-full m-2">
                  <select
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      className="w-full px-3 py-2 rounded-md 
                        bg-black-700 text-gray-800 font-mono
                        border border-gray-600
                        focus:border-blue-500 focus:ring-2 focus:ring-blue-500
                        outline-none transition-all duration-200"
                    >
                      <option value="Youtube Video">Youtube Video</option>
                      <option value="Tweet">Tweet</option>
                      <option value="Docs">Docs</option>
                      <option value="Others">Others</option>
                    </select>

                </div>


            <Button  variant = "secondary" text= "Add To Brain" size="lg" onClick={handleSubmit}/>
            {/* <input type= "dropbox"/>  */}
            </div>
        </span>
        </div>
        </div>}
        
    </div>

}
