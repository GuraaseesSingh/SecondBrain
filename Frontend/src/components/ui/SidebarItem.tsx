import type { ReactElement } from "react";

interface SideItemProps {
  Icon: ReactElement;
  text: string;
}

export function SidebarItem({ Icon, text }: SideItemProps) {
  return (
    <div
      className="flex items-center gap-3 px-4 py-3 rounded-md cursor-pointer 
                 transition-all duration-200 hover:bg-gray-100 hover:shadow-sm
                 active:scale-[0.98]"
    >
      <span className="flex-shrink-0 text-gray-600 group-hover:text-gray-800">
        {Icon}
      </span>
      <span className="font-mono text-lg text-gray-700 truncate">
        {text}
      </span>
    </div>
  );
}
