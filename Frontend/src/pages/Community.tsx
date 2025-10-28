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
    <div className="mx-auto max-w-5xl p-4">
      <h1 className="text-xl font-semibold mb-4">Community Brain</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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


