'use client';

import React, { useRef } from 'react';
import { CopyButton } from './copy-button';

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ children, className }) => {
  const preRef = useRef<HTMLPreElement>(null);

  // Extract text content from the code block at copy time
  const handleCopy = (): string => {
    if (preRef.current) {
      // First try to get the code element inside the pre element
      const codeElement = preRef.current.querySelector('code');
      if (codeElement) {
        // For syntax-highlighted code, we need to get the text content
        // and clean up any extra whitespace
        return codeElement.textContent || codeElement.innerText || '';
      }
      
      // Fallback to pre element text content
      return preRef.current.textContent || preRef.current.innerText || '';
    }
    return '';
  };

  return (
    <div className="relative group">
      <pre ref={preRef} className={className}>
        {children}
      </pre>
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 group-focus-within:translate-y-0">
        <CopyButton 
          getText={handleCopy}
        />
      </div>
    </div>
  );
};
