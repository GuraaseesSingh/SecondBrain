import type { ReactNode } from "react";

interface CardDeleteProps {
  open: boolean;
  title?: string;
  onConfirm: () => void;
  onCancel: () => void;
  description?: ReactNode;
}

export function CardDelete({ open, title = "Delete Item", description, onConfirm, onCancel }: CardDeleteProps){
  if(!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-[92%] max-w-sm rounded-lg border border-gray-800 bg-gray-900 text-gray-200 shadow-xl">
        <div className="px-4 py-3 border-b border-gray-800 flex items-center justify-between">
          <h3 className="text-sm font-semibold">{title}</h3>
          <button aria-label="Close" className="text-gray-400 hover:text-white" onClick={onCancel}>✕</button>
        </div>
        <div className="px-4 py-4 text-sm text-gray-300">
          {description || <p>Are you sure you want to delete this item? This action cannot be undone.</p>}
        </div>
        <div className="px-4 py-3 border-t border-gray-800 flex justify-end gap-2">
          <button onClick={onCancel} className="px-3 py-2 rounded-md text-sm border border-gray-700 hover:bg-gray-800">Cancel</button>
          <button onClick={onConfirm} className="px-3 py-2 rounded-md text-sm bg-red-600 hover:bg-red-700 text-white">Delete</button>
        </div>
      </div>
    </div>
  );
}


