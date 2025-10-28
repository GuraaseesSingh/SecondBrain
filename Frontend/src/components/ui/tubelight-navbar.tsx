import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { MessageSquare, Star, GraduationCap, Youtube, PlusSquare, Users } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { to: "/dashboard", icon: MessageSquare, label: "Chat" },
  { to: "/tweets", icon: Star, label: "X" },
  { to: "/brain-wire", icon: PlusSquare, label: "Add" },
  { to: "/youtube", icon: Youtube, label: "YouTube" },
  { to: "/community", icon: Users, label: "Community" }
];

export function TubelightNavbar() {
  const location = useLocation();
  const activeIndex = useMemo(() => items.findIndex(i => i.to === location.pathname), [location.pathname]);

  return (
    <nav
      aria-label="Bottom"
      className="
        fixed bottom-3 left-1/2 -translate-x-1/2 z-40
        md:hidden w-[92%] max-w-lg
        bg-gray-900/80 backdrop-blur border border-gray-800
        rounded-2xl shadow-lg
        px-2 py-2
      "
    >
      <ul className="relative grid grid-cols-5 items-center">
        {activeIndex >= 0 && (
          <motion.li
            layout
            layoutId="lamp"
            className="absolute top-0 left-0 h-11 w-[20%] rounded-xl bg-gray-800"
            initial={false}
            animate={{ x: `${activeIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
          />
        )}

        {items.map((item) => {
          const isActive = item.to === location.pathname;
          const Icon = item.icon;
          return (
            <li key={item.to} className="relative z-10">
              <Link
                to={item.to}
                className={`
                  flex flex-col items-center justify-center h-11 rounded-xl
                  text-[11px] ${isActive ? "text-white" : "text-gray-300"}
                `}
              >
                <Icon size={18} />
                <span className="leading-3">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}


