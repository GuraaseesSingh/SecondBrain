import { useEffect, useState } from "react";
import axios from "axios";
import { BackendURL } from "../config";

export default function Community(){
  const [items, setItems] = useState<any[]>([]);
  useEffect(() => {
    // Simple public/community feed placeholder
    axios.get(`${BackendURL}/public/content`).then(r=>setItems(r.data)).catch(()=>setItems([]));
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-3 md:px-6 py-4 text-neutral-100">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold">Community Brain</h1>
        <span className="text-[10px] px-2 py-0.5 rounded bg-gray-800 text-gray-200 animate-pulse">Coming Soon</span>
      </div>
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((it, idx) => (
          <div key={idx} className="rounded-lg border border-gray-800 p-4 bg-gray-900/60 text-gray-200">
            <div className="text-sm text-gray-400">{it.type}</div>
            <div className="font-medium">{it.title}</div>
            {it.link ? <a className="text-blue-400 underline" href={it.link} target="_blank" rel="noreferrer">Open</a> : null}
            {it.text ? <p className="text-sm mt-2 text-gray-300">{it.text}</p> : null}
          </div>
        ))}
      </div>
    </div>
  );
}


