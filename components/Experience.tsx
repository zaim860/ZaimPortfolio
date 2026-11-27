import { experience } from "@/data/portfolio";
import Panel from "./Panel";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" title="Field Work">
      <div className="stack">
        {experience.map((job) => (
          <Panel key={job.company + job.role} tilt="left" fx="impact" fxText="BOOM!">
            <h3>{job.role}</h3>
            <p className="muted">{job.company} · {job.period}</p>
            <ul>
              {job.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
            {job.skills && job.skills.length > 0 && (
              <>
                <p className="skills-label">Skills used</p>
                <ul className="chips">
                  {job.skills.map((s) => <li key={s} className="chip chip--small">{s}</li>)}
                </ul>
              </>
            )}
          </Panel>
        ))}
      </div>
    </Section>
  );
}