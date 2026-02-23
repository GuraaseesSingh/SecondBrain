// import { AuthGuard } from "./pages/AuthGaurd";
import { AuthGuard } from "./pages/AuthGuard";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Logout from "./pages/Logout";
import Community from "./pages/Community";
// import { Navbar } from "./components/ui/Navbar";
import Tweets from "./pages/Tweets";
import Courses from "./pages/Courses";
import YouTube from "./pages/YouTube";
import BrainWire from "./pages/BrainWire";
import Popular from "./pages/PopularBrain";
import { AppChrome } from "./components/ui/sidebar-demo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";

export default function App(){
  return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            {/* Protected dashboard */}
            <Route path="/dashboard" element={<AuthGuard><AppChrome><Dashboard /></AppChrome></AuthGuard>} />
            {/* Logout route clears token and redirects to signin */}
            <Route path="/logout" element={<AuthGuard><AppChrome><Logout /></AppChrome></AuthGuard>} />
            <Route path="/community" element={<AuthGuard><AppChrome><Community /></AppChrome></AuthGuard>} />
            <Route path="/tweets" element={<AuthGuard><AppChrome><Tweets /></AppChrome></AuthGuard>} />
            <Route path="/courses" element={<AuthGuard><AppChrome><Courses /></AppChrome></AuthGuard>} />
            <Route path="/youtube" element={<AuthGuard><AppChrome><YouTube /></AppChrome></AuthGuard>} />
            <Route path="/brain-wire" element={<AuthGuard><AppChrome><BrainWire /></AppChrome></AuthGuard>} />
            <Route path="/popular" element={<AuthGuard><AppChrome><Popular /></AppChrome></AuthGuard>} />


          </Routes>
        </BrowserRouter>
      

  )
}

//try to same sm of button come to icons size as well
//declare from global for ts ignore removal 
//complete backend apis

// { FINAL PLAN (Stacked, Strategic, Ruthless Execution)
// 🟦 PHASE 1: FULL STACK FOUNDATIONS (3–4 weeks)
// Goal: Become fluent in building real web apps (frontend + backend)

// ✅ What to Learn
// Frontend: HTML, CSS, JavaScript → React + Next.js + Tailwind

// Backend: Node.js + Express

// Database: MongoDB (with Mongoose) or PostgreSQL (with Prisma)

// DevOps Lite: Docker, GitHub Actions, .env, deployment with Vercel/Render

// 🧠 Projects to Build
// ✅ Paytm Clone (Wallet app)

// Balance, login, transactions, receipts

// Host on Render/Vercel

// Push to GitHub

// ✅ Second Brain (Notes/Markdown app)

// CRUD notes, Markdown preview

// Auth with Supabase or JWT

// Deploy & blog about it

// 🟨 PHASE 2: SOLIDITY + SECURITY-BASED DEV (4 weeks)
// Goal: Learn how to write, break, and audit smart contracts

// ✅ What to Do
// Cyfrin Foundry Full Course (Solidity + Foundry)

// Solve:

// Ethernaut

// Damn Vulnerable DeFi

// Read Code4rena audit reports

// 💡 Output:
// Deploy at least 2 smart contracts

// Document 1 exploit or audit on GitHub

// Share your first “bug bounty writeup” (even if simulated)

// 🟥 PHASE 3: START BOUNTY HUNTING + JOB-READY PROFILE (ongoing)
// ✅ Platforms to Join
// Code4rena

// Sherlock

// Immunefi

// 🛠 What to Do Weekly
// Try 1 past audit → find bugs → write reports

// Post GitHub repos with:

// Vulnerability findings

// Clean, commented smart contracts

// Grow on LinkedIn + GitHub + X (Twitter) — it brings offers in Web3

// 🔋 OPTIONAL SIDE PATH (if time/interest permits)
// Learn Rust + Solana (Weekends or Phase 4)
// Do Rustlings

// Then try Solana course on Buildspace

// Build 1 Solana dApp to stand out

// 📆 Weekly Schedule Example
// Time	Task
// 2 hrs/day	Web Dev/DSA (alternate days)
// 2 hrs/day	Project building (Paytm, Second Brain)
// 2 hrs/day	Solidity/Foundry + CTFs
// Weekends	GitHub cleanup, share progress, bounty practice

// 🚀 Deliverables by 90 Days:
// ✅ 2 solid full-stack projects (Paytm clone + Second Brain)
// ✅ Smart contracts written, tested, audited
// ✅ GitHub full of dApps, exploits, clean commits
// ✅ Code4rena profile with at least 1 audit
// ✅ LinkedIn and resume that look job/bounty ready
// ✅ Bonus: Rust/Solana entry project (optional)

// ✅ Resources (you’ll need):
// Frontend/Backend:

// The Odin Project

// JavaScript.info

// Traversy Media

// Security/Web3:

// Cyfrin Foundry Course

// Damn Vulnerable DeFi

// Code4rena audit examples

// 🎯 TL;DR: What to Do This Week
// ✅ Start building Paytm clone with full stack

// ✅ Work through Cyfrin’s Solidity/Foundry course

// ✅ Create GitHub + LinkedIn roadmap post (start visibility)

// ✅ Join Code4rena → read a current audit

// If you want:

// 📓 A Notion template tracker

// 📦 GitHub boilerplate to start fast

// 🧠 First bugs to look for in audits}