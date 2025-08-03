'use client';

import React, { useState, useEffect } from 'react';
import { Share2, Linkedin, Link, Check, Facebook } from 'lucide-react';

interface ShareButtonsProps {
  url: string;
  title: string;
  description: string;
  className?: string;
}

export const ShareButtons: React.FC<ShareButtonsProps> = ({
  url,
  title,
  description,
  className = ''
}) => {
  const [copied, setCopied] = useState(false);
  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    // Check if native sharing is available on the client
    setCanShare(typeof navigator !== 'undefined' && 'share' in navigator);
  }, []);

  const shareData = {
    title,
    text: description,
    url,
  };

  const handleNativeShare = async () => {
    if (canShare) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.log('Error sharing:', error);
      }
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.log('Error copying to clipboard:', error);
    }
  };

  const shareLinks = {
    x: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  };

  const buttonClass = "flex items-center justify-center w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors cursor-pointer";

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
        {/* X (formerly Twitter) */}
        <a
          href={shareLinks.x}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass}
          aria-label="Share on X"
          title="Share on X"
        >
          {/* X icon */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass}
          aria-label="Share on LinkedIn"
          title="Share on LinkedIn"
        >
          <Linkedin size={16} />
        </a>

        {/* Facebook */}
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass}
          aria-label="Share on Facebook"
          title="Share on Facebook"
        >
          <Facebook size={16} />
        </a>

        {/* Copy link */}
        <button
          onClick={handleCopyLink}
          className={buttonClass}
          aria-label="Copy link to article"
          title="Copy link to article"
        >
          {copied ? <Check size={16} /> : <Link size={16} />}
        </button>

        {/* Native share button (mobile) - only show if supported */}
        {canShare && (
          <button
            onClick={handleNativeShare}
            className={buttonClass}
            aria-label="Share article"
            title="Share article"
          >
            <Share2 size={16} />
          </button>
        )}
      </div>
      
      {copied && (
        <div className="text-xs text-success-600 dark:text-success-400 font-medium">
          Link copied to clipboard!
        </div>
      )}
    </div>
  );
};

export default ShareButtons;
