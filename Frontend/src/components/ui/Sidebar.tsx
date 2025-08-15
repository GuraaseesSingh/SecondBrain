import { ChatIcon } from "../Icons/ChatIcon";
import CommunityIcon from "../Icons/CommunityIcon";
import { CourseIcon } from "../Icons/CourseIcon";
import FireIcon from "../Icons/FireIcon";
import PlusIcon from "../Icons/PlusIcon";
import { TweetIcon } from "../Icons/TweetIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar() {
  return (
    <aside
      className="h-screen w-72 fixed flex flex-col 
                 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900
                 border-r border-gray-800 text-gray-200 select-none"
    >
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-500">
        <h1 className="text-2xl font-bold tracking-tight text-white-900">🚀 MyApp</h1>
        <p className="text-sm text-gray-200">Your second brain</p>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1 p-3 text-white-100">
        <SidebarItem Icon={<ChatIcon size="lg" />} text="Chat With Anything" />
        <SidebarItem Icon={<TweetIcon size="lg" />} text="Tweets" />
        <SidebarItem Icon={<CourseIcon size="lg" />} text="Courses" />
        <SidebarItem Icon={<YoutubeIcon size="lg" />} text="Youtube Vids" />
        <SidebarItem Icon={<PlusIcon size="lg" />} text="Brain Wire" />
        <SidebarItem Icon={<FireIcon size="lg" />} text="Popular Brains" />
        <SidebarItem Icon={<CommunityIcon size="lg" />} text="Community Brains" />
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-800 text-xs text-gray-200">
        © 2025 MyApp
      </div>
    </aside>
  );
}
