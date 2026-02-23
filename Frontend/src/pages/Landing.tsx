import { useNavigate, Link } from "react-router-dom";
import { Button } from "../components/ui/Button";

export default function Landing(){
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-900 to-black">
      <header className="w-full border-b border-slate-800/80 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <span className="text-slate-50 font-semibold tracking-tight text-lg">Second Brain</span>
          <nav className="hidden sm:flex items-center gap-3">
            <Link to="/signin" className="text-slate-300 hover:text-white transition-colors">Sign in</Link>
            <Button
              variant="primary"
              size="md"
              text="Create Account"
              onClick={() => navigate("/signup")}
            />
          </nav>
        </div>
      </header>

      <main className="flex-1 flex items-center">
        <div className="mx-auto max-w-5xl w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-white">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-50 drop-shadow-[0_0_18px_rgba(99,102,241,0.35)]">
              Second Brain
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Your personal knowledge hub to save, organize, and instantly retrieve videos, links, tweets, and ideas all in one place.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                text="Get started"
                onClick={() => navigate("/signin")}
                fullwidth
              />
              <Button
                variant="secondary"
                size="lg"
                text="Create account"
                onClick={() => navigate("/signup")}
                fullwidth
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


