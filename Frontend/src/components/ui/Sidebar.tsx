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
  { to: "/popular", label: "Popular Brains", icon: <Flame size={18} />, badge: "Soon" },
  { to: "/community", label: "Community Brains", icon: <Users size={18} />, badge: "Soon" }
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

      <nav className="p-2 flex-1 text-gray-300 overflow-y-auto scrollbar-hide">
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
                <span className={`${expanded ? "text-gray-300" : "text-white"}`}>
                  {item.icon}
                </span>
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
        <Link to="/logout" className="group flex items-center gap-3 rounded-md px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white">
          <LogOut size={18} className="transition-colors group-hover:text-red-500" />
          <span className={`text-sm transition-opacity ${expanded ? "opacity-100" : "opacity-0"}`}>Logout</span>
        </Link>
      </div>
    </aside>
  );
}

// Removed legacy static Sidebar component in favor of SidebarDesktop
