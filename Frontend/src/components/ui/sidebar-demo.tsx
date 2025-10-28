import type { PropsWithChildren } from "react";
import { useLocation } from "react-router-dom";
import { SidebarDesktop } from "./sidebar";
import { TubelightNavbar } from "./tubelight-navbar";

const AUTH_ROUTES = new Set(["/signin", "/signup", "/forgot"]);

export function AppChrome({ children }: PropsWithChildren) {
  const { pathname } = useLocation();
  const hideNav = AUTH_ROUTES.has(pathname);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle,#334155_1px,transparent_1px)] bg-[length:30px_30px]">
      {!hideNav && <SidebarDesktop />}
      <main className={`mx-auto ${!hideNav ? "md:pl-64" : ""}`}>
        {children}
      </main>
      {!hideNav && <TubelightNavbar />}
    </div>
  );
}


