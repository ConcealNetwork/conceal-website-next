'use client';

import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

export function CopyField({ value, label, compact = false }: { value: string; label: string; compact?: boolean }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — user can still select the text */
    }
  }

  return (
    <div className="flex items-center gap-2">
      <code className={`min-w-0 flex-1 select-all break-all rounded-md border border-border/60 bg-background/50 px-3 font-mono ${compact ? 'py-1.5 text-xs' : 'py-2 text-sm'}`}>
        {value}
      </code>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? `${label} copied` : `Copy ${label}`}
        className="keycap inline-flex h-9 w-9 shrink-0 items-center justify-center"
      >
        {copied ? <Check size={15} /> : <Copy size={15} />}
      </button>
    </div>
  );
}
