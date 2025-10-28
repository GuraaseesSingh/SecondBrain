import { useNavigate } from "react-router-dom";
import { ChatIcon } from "../Icons/ChatIcon";
import CommunityIcon from "../Icons/CommunityIcon";
import { CourseIcon } from "../Icons/CourseIcon";
import FireIcon from "../Icons/FireIcon";
import PlusIcon from "../Icons/PlusIcon";
import { TweetIcon } from "../Icons/TweetIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";
import { Button } from "./Button";
import { SidebarItem } from "./SidebarItem";
import { LogOutIcon } from "../Icons/LogOutIcon";


export function Sidebar() {
  const navigate =useNavigate();
  return (
    <aside
      className="h-screen w-72 fixed flex flex-col 
                 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900
                 border-r border-gray-800 text-gray-200 select-none"
    >
      {/* Logo Section */}
      <div className="p-4 border-b border-gray-500">
        <h1 className="text-2xl font-bold tracking-tight text-white-900">🚀 MyApp</h1>
        <p className="text-sm text-gray-200">Your second brain</p>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1 text-white-100">
        <SidebarItem Icon={<ChatIcon size="lg" />} text="Chat With Anything" />
        <SidebarItem Icon={<TweetIcon size="lg" />} text="Tweets" />
        <SidebarItem Icon={<CourseIcon size="lg" />} text="Courses" />
        <SidebarItem Icon={<YoutubeIcon size="lg" />} text="Youtube Vids" />
        <SidebarItem Icon={<PlusIcon size="lg" />} text="Brain Wire" />
        <SidebarItem Icon={<FireIcon size="lg" />} text="Popular Brains" />
        <SidebarItem Icon={<CommunityIcon size="lg" />} text="Community Brains" />
      </nav>
     <Button
      className="
    group relative overflow-hidden 
    text-gray-800
    before:absolute before:inset-0 
    before:bg-gradient-to-r before:from-black before:to-black 
    before:bg-[length:200%_100%] before:bg-[0%_0%] 
    group-hover:before:bg-[100%_0%] 
    before:transition-[background-position] before:duration-500 before:ease-out
    before:opacity-0 group-hover:before:opacity-100
    before:rounded-lg
  "
     variant="secondary"
     size="lg"
     startIcon={<LogOutIcon size="md"   className=" group-hover:text-red-700 transition-colors duration-200"  />}
     text="Logout"
     onClick={
      
      ()=>{
         localStorage.removeItem("token");
        setTimeout(()=>{
          console.log("LogOut")
          navigate('/signIn', { replace: true }) //to prevent going back after logging out 
        },1000)
               
      }}
      ></Button>
      {/* Footer
      <div className="p-2 border-t mb-0 pb-0 border-gray-800 text-xs text-gray-200">
        © 2025 MyApp
      </div> */}
    </aside>
  );
}
