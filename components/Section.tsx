import type { ReactNode } from "react";

// Wraps every section: gives it an id (for nav links) and a caption-box heading.
export default function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="section">
      <h2 className="caption">{title}</h2>
      {children}
    </section>
  );
}
