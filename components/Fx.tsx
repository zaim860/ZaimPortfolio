// Hover effect pieces. They stay invisible until the parent .panel is hovered (see globals.css).
// Use through <Panel fx="lightning" /> etc. Add a new effect: add a case here + CSS in globals.css.

export type FxType = "lightning" | "fist" | "hammer" | "impact";

const K = "#000";

function Bolt({ className }: { className: string }) {
  return (
    <span className={className} aria-hidden="true">
      <svg viewBox="0 0 80 130">
        <polygon points="46,2 10,70 36,70 22,128 72,52 46,52 66,2" fill="#ffd400" stroke={K} strokeWidth="5" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function Fist() {
  return (
    <span className="fx fx--fist" aria-hidden="true">
      <svg viewBox="0 0 120 90" stroke={K} strokeWidth="4" fill="#3fae49">
        <rect x="0" y="30" width="40" height="30" />
        <rect x="30" y="18" width="52" height="54" rx="12" />
        {[14, 29.5, 45, 60.5].map((y) => (
          <rect key={y} x="70" y={y} width="34" height="17" rx="8.5" />
        ))}
        <rect x="52" y="54" width="44" height="15" rx="7.5" />
      </svg>
    </span>
  );
}

function Hammer() {
  return (
    <>
      <span className="fx fx--hammer" aria-hidden="true">
        <svg viewBox="0 0 90 130" stroke={K} strokeWidth="4" strokeLinejoin="round">
          <rect x="39" y="42" width="12" height="84" rx="3" fill="#8a5a2b" />
          <rect x="6" y="6" width="78" height="42" rx="5" fill="#aeb4bb" />
          <rect x="6" y="6" width="16" height="42" rx="5" fill="#8b929a" />
          <rect x="68" y="6" width="16" height="42" rx="5" fill="#8b929a" />
        </svg>
      </span>
      <span className="fx fx--ring" aria-hidden="true" />
    </>
  );
}

export default function Fx({ type, text = "POW!" }: { type: FxType; text?: string }) {
  if (type === "lightning") {
    return (
      <>
        <Bolt className="fx fx--bolt fx--bolt-l" />
        <Bolt className="fx fx--bolt fx--bolt-r" />
      </>
    );
  }
  if (type === "fist") return <Fist />;
  if (type === "hammer") return <Hammer />;
  return <span className="fx fx--impact" aria-hidden="true">{text}</span>;
}