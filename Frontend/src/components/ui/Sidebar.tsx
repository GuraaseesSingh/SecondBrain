import type { JSX } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MessageSquare, Flame, GraduationCap, Youtube, PlusSquare, Users, Star, LogOut, User } from "lucide-react";

type NavItem = {
  to: string;
  label: string;
  icon: JSX.Element;
  badge?: string;
};

const navItems: NavItem[] = [
  { to: "/dashboard", label: "Chat With Anything", icon: <MessageSquare size={18} />, badge: "Soon" },
  { to: "/tweets", label: "X (Popular Tweets)", icon: <Star size={18} /> },
  { to: "/courses", label: "Courses", icon: <GraduationCap size={18} /> },
  { to: "/youtube", label: "YouTube Vids", icon: <Youtube size={18} /> },
  { to: "/brain-wire", label: "+ Brain Wire", icon: <PlusSquare size={18} /> },
  { to: "/popular", label: "Popular Brains", icon: <Flame size={18} /> },
  { to: "/community", label: "Community Brains", icon: <Users size={18} /> }
];

export function SidebarDesktop() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const isActive = (to: string) => location.pathname === to;

  return (
    <aside
      aria-label="Primary"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className={`
        fixed left-0 top-0 h-screen z-30
        bg-gray-900/80 backdrop-blur border-r border-gray-800
        transition-[width] duration-300 ease-out
        ${expanded ? "w-64" : "w-16"}
        hidden md:flex flex-col
      `}
    >
      <div className="h-14 flex items-center px-3 border-b border-gray-800">
        <Link to="/dashboard" className="flex items-center gap-2 text-white">
          <div className="h-7 w-7 rounded-md bg-gray-800 grid place-items-center">🧠</div>
          <span className={`text-sm font-semibold transition-opacity ${expanded ? "opacity-100" : "opacity-0"}`}>
            Second Brain
          </span>
        </Link>
      </div>

      <nav className="p-2 flex-1 text-gray-300">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`
                  group flex items-center gap-3 rounded-md px-3 py-2
                  hover:bg-gray-800 hover:text-white transition-colors
                  ${isActive(item.to) ? "bg-gray-800 text-white" : ""}
                `}
              >
                {item.icon}
                <span className={`text-sm whitespace-nowrap transition-opacity ${expanded ? "opacity-100" : "opacity-0"}`}>
                  {item.label}
                  {item.badge ? (
                    <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-gray-700 text-gray-200 align-middle">
                      {item.badge}
                    </span>
                  ) : null}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-gray-800 p-2">
        <div className="flex items-center gap-3 px-3 py-2 text-gray-300">
          <div className="h-7 w-7 rounded-full bg-gray-700 grid place-items-center"><User size={16} /></div>
          <div className={`text-xs transition-opacity ${expanded ? "opacity-100" : "opacity-0"}`}>
            <div className="font-medium text-white">You</div>
            <div className="text-gray-400">Pro Member</div>
          </div>
        </div>
        <Link to="/logout" className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white">
          <LogOut size={18} />
          <span className={`text-sm transition-opacity ${expanded ? "opacity-100" : "opacity-0"}`}>Logout</span>
        </Link>
      </div>
    </aside>
  );
}

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
