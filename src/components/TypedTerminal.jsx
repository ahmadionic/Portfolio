import { useState, useEffect, useRef } from "react";
import { terminalLines } from "../data";

export default function TypedTerminal() {
  const [rendered, setRendered] = useState([]);
  const [typing, setTyping] = useState("");
  const lineIndex = useRef(0);
  const charIndex = useRef(0);

  useEffect(() => {
    let timeout;

    const step = () => {
      const current = terminalLines[lineIndex.current];
      if (!current) return; // finished

      if (current.type === "cmd") {
        if (charIndex.current <= current.text.length) {
          setTyping(current.text.slice(0, charIndex.current));
          charIndex.current++;
          timeout = setTimeout(step, 55);
        } else {
          setRendered((prev) => [...prev, current]);
          setTyping("");
          charIndex.current = 0;
          lineIndex.current++;
          timeout = setTimeout(step, 200);
        }
      } else {
        // output lines appear instantly after their command
        setRendered((prev) => [...prev, current]);
        lineIndex.current++;
        timeout = setTimeout(step, 350);
      }
    };

    timeout = setTimeout(step, 400);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="font-mono text-sm w-full max-w-md rounded-xl border border-line-bright bg-surface/70 backdrop-blur-md shadow-[0_0_40px_-12px_rgba(0,229,160,0.25)] overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-line bg-surface-2/60">
        <span className="w-2.5 h-2.5 rounded-full bg-coral/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-mint/70" />
        <span className="ml-2 text-xs text-faint">ahmad@devops:~</span>
      </div>
      <div className="p-4 min-h-[180px]">
        {rendered.map((line, idx) =>
          line.type === "cmd" ? (
            <div key={idx} className="text-ink mt-2 first:mt-0">
              <span className="text-mint">$</span> {line.text}
            </div>
          ) : (
            <div key={idx} className="text-muted pl-3">
              {line.text}
            </div>
          )
        )}
        {lineIndex.current < terminalLines.length &&
          terminalLines[lineIndex.current]?.type === "cmd" && (
            <div className="text-ink mt-2 first:mt-0">
              <span className="text-mint">$</span> {typing}
              <span className="inline-block w-2 h-4 bg-mint ml-0.5 align-middle animate-pulse" />
            </div>
          )}
      </div>
    </div>
  );
}
