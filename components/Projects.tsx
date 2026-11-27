import { projects } from "@/data/portfolio";
import Panel from "./Panel";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" title="Issues (Projects)">
      <div className="grid grid--3">
        {projects.map((p, i) => (
          <Panel key={p.title} fx="fist">
            <span className="issue">Issue #{i + 1}</span>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <ul className="chips">
              {p.tags.map((t) => <li key={t} className="chip chip--small">{t}</li>)}
            </ul>
            {p.links.length > 0 && (
              <div className="hero__links">
                {p.links.map((l) => (
                  <a key={l.label} className="btn btn--small" href={l.href} target="_blank" rel="noreferrer">
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </Panel>
        ))}
      </div>
    </Section>
  );
}