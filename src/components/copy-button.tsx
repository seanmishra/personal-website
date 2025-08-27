'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyButtonProps {
  text?: string;
  getText?: () => string;
  className?: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({ text, getText, className = '' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const textToCopy = getText ? getText() : text || '';
      if (!textToCopy) {
        return;
      }
      
      // Try the modern Clipboard API first
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`
        group/btn inline-flex items-center justify-center
        w-8 h-8 rounded-md
        bg-neutral-200/80 dark:bg-neutral-700/80
        hover:bg-neutral-300 dark:hover:bg-neutral-600
        text-neutral-600 dark:text-neutral-400
        hover:text-neutral-900 dark:hover:text-neutral-100
        transition-all duration-200 ease-in-out
        backdrop-blur-sm
        border border-neutral-300/50 dark:border-neutral-600/50
        hover:border-neutral-400 dark:hover:border-neutral-500
        shadow-sm hover:shadow-md
        focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 focus:ring-offset-neutral-100 dark:focus:ring-offset-neutral-800
        ${copied ? 'bg-success-100 dark:bg-success-900/20 border-success-300 dark:border-success-600' : ''}
        ${className}
      `}
      title={copied ? 'Copied!' : 'Copy to clipboard'}
      aria-label={copied ? 'Copied to clipboard' : 'Copy code to clipboard'}
    >
      {copied ? (
        <Check size={16} className="text-success-600 dark:text-success-400" />
      ) : (
        <Copy size={16} />
      )}
    </button>
  );
};
