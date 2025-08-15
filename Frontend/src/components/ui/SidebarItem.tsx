import type { ReactElement } from "react";

interface SideItemProps {
  Icon: ReactElement;
  text: string;
  active?: boolean;
}

export function SidebarItem({ Icon, text, active }: SideItemProps) {
  return (
    <div
      className={`
        flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer
        transition-all duration-300 ease-in-out text-white-900
        ${active 
          ? "bg-white text-indigo-600 shadow-sm" 
          : "text-gray-900 hover:bg-gray-700 hover:text-gray-200"
        }
      `}
    >
      <span className="flex-shrink-0 text-lg">{Icon}</span>
      <span className="font-medium text-sm truncate">{text}</span>
    </div>
  );
}
