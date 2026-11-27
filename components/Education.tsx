import { education, achievements, certsLink } from "@/data/portfolio";
import Panel from "./Panel";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" title="Origin Story">
      <div className="grid grid--2">
        <div className="stack">
          {education.map((e) => (
            <Panel key={e.school} fx="impact" fxText="WHAM!">
              <h3>{e.qualification}</h3>
              <p className="muted">{e.school} · {e.period}</p>
              <ul>
                {e.details.map((d) => <li key={d}>{d}</li>)}
              </ul>
            </Panel>
          ))}
        </div>
        <Panel color="ink" tilt="right" fx="hammer">
          <h3>Achievements</h3>
          <ul className="plain">
            {achievements.map((a) => (
              <li key={a.title}>
                <strong>{a.title}</strong>
                <br />
                <span className="muted">{a.detail}</span>
              </li>
            ))}
          </ul>
          {certsLink.href && (
            <div className="hero__links">
              <a className="btn btn--yellow" href={certsLink.href} target="_blank" rel="noreferrer">
                {certsLink.label}
              </a>
            </div>
          )}
        </Panel>
      </div>
    </Section>
  );
}