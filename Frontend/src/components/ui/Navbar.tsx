import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function Navbar(){
  const [open, setOpen] = useState(false);
  const location = useLocation();

  function closeOnNavigate(){
    if(open) setOpen(false);
  }

  const navItemBase = "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-gray-800 hover:text-white";

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-800 bg-gray-900/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Brand */}
          <Link to="/dashboard" className="text-white font-semibold tracking-tight" onClick={closeOnNavigate}>
            Second Brain
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2 text-gray-300">
            <Link to="/dashboard" onClick={closeOnNavigate} className={`${navItemBase} ${location.pathname==='/dashboard' ? 'bg-gray-800 text-white' : ''}`}>Dashboard</Link>
            <Link to="/dashboard" onClick={closeOnNavigate} className={navItemBase}>My Brain</Link>
            <Link to="/dashboard?add=1" onClick={closeOnNavigate} className={navItemBase}>Add Link</Link>
            <Link to="/community" onClick={closeOnNavigate} className={`${navItemBase} ${location.pathname==='/community' ? 'bg-gray-800 text-white' : ''}`}>Community Brain</Link>
            <Link to="/logout" onClick={closeOnNavigate} className={navItemBase}>Logout</Link>
          </nav>

          {/* Hamburger */}
          <button aria-label="Toggle menu" className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white" onClick={() => setOpen(v=>!v)}>
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 18L18 6M6 6l12 12" : "M3 6h18M3 12h18M3 18h18"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-800 bg-gray-900">
          <div className="space-y-1 px-2 py-3">
            <Link to="/dashboard" onClick={closeOnNavigate} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white">Dashboard</Link>
            <Link to="/dashboard" onClick={closeOnNavigate} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white">My Brain</Link>
            <Link to="/dashboard?add=1" onClick={closeOnNavigate} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white">Add Link</Link>
            <Link to="/community" onClick={closeOnNavigate} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white">Community Brain</Link>
            <Link to="/logout" onClick={closeOnNavigate} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white">Logout</Link>
          </div>
        </div>
      )}
    </header>
  );
}


