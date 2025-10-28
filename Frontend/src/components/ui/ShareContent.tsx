interface ShareContentProps {
  open: boolean;
  title?: string;
  link: string;
  onClose: () => void;
}

export function ShareContent({ open, title = "Share Content", link, onClose }: ShareContentProps){
  if(!open) return null;

  function handleCopy(){
    navigator.clipboard.writeText(link);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-[92%] max-w-lg rounded-lg border border-gray-800 bg-gray-900 text-gray-200 shadow-xl">
        <div className="px-4 py-3 border-b border-gray-800 flex items-center justify-between">
          <h3 className="text-sm font-semibold">{title}</h3>
          <button aria-label="Close" className="text-gray-400 hover:text-white" onClick={onClose}>✕</button>
        </div>
        <div className="px-4 py-4 space-y-4">
          <div className="text-sm text-gray-300">Copy or open the link.</div>
          <div className="flex items-center gap-2">
            <input className="flex-1 rounded-md bg-gray-800 border border-gray-700 px-3 py-2 text-sm" value={link} readOnly />
            <button onClick={handleCopy} className="px-3 py-2 rounded-md text-sm border border-gray-700 hover:bg-gray-800">Copy</button>
            <a href={link} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-md text-sm bg-blue-600 hover:bg-blue-700 text-white">Open</a>
          </div>
          <div className="flex items-center gap-3">
            <label className="text-xs text-gray-400">Expiration</label>
            <select className="rounded-md bg-gray-800 border border-gray-700 px-2 py-1 text-sm">
              <option>24 hours</option>
              <option>7 days</option>
              <option>Forever</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}


