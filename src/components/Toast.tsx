import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, ShoppingBag, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm bg-[#171c26] text-white border border-[#1a3875] p-4 rounded-lg shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom-5 duration-300">
      <div className="p-2 bg-[#1a3875] text-white border border-[#3b82f6]/40 rounded">
        <ShoppingBag className="w-4 h-4" />
      </div>
      <p className="font-body text-xs text-[#e2e2e2] flex-1 font-semibold">{message}</p>
      <button
        onClick={onClose}
        className="p-1 text-[#c4c6d1] hover:text-[#60a5fa]"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
