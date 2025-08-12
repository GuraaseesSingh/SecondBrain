import { ChatIcon } from "../Icons/ChatIcon";
import { CourseIcon } from "../Icons/CourseIcon";
import PlusIcon from "../Icons/PlusIcon";
import { TweetIcon } from "../Icons/TweetIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar(){
    return <div className=" min-h-screen p-1 border-r border-spacing-1 border-slate-600 w-72 bg-gray-100 font-mono  fixed select-none ">
        <div id="logo" className="border-red-50 p-3 m-3">
            Logo aagya yaha 
        </div>
        <div className="py-4">
        <SidebarItem Icon={<ChatIcon size="lg"></ChatIcon>}   text="Chat With Anything" />
        <SidebarItem Icon={<TweetIcon size="lg"></TweetIcon>}   text="Tweets" />
        <SidebarItem Icon={<CourseIcon size="lg"></CourseIcon>}   text="Courses" />
        <SidebarItem Icon={<YoutubeIcon size="lg"></YoutubeIcon>}   text="Youtube Vids" />
        <SidebarItem Icon={<PlusIcon size="lg"></PlusIcon>}   text="Brain Wire" />
        </div>
    </div>
}