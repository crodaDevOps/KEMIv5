import React from 'react';

export const TerminalBlock: React.FC = () => {
  return (
    <div className="font-mono text-xs md:text-sm leading-relaxed overflow-x-auto p-8 bg-zinc-900 border-y border-zinc-800 text-zinc-400">
      <pre className="whitespace-pre">
{`Sender                         Receiver
------                         --------
ML-KEM-768 encaps          →   ML-KEM-768 decaps
HKDF-SHA-512 derive keys   →   HKDF derive keys
XChaCha20-Poly1305 encrypt →   AEAD decrypt
ML-DSA-65 sign (optional)  →   Verify signature
Sequence number            →   Replay window check
Emit frame                 →   Accept + update window`}
      </pre>
    </div>
  );
};