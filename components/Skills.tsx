import { skills } from "@/data/portfolio";
import Panel from "./Panel";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" title="Super Powers">
      <div className="grid grid--3">
        {skills.map((group, i) => (
          <Panel key={group.category} color={i % 2 ? "blue" : "red"} fx="lightning">
            <h3>{group.category}</h3>
            <ul className="chips">
              {group.items.map((s) => <li key={s} className="chip">{s}</li>)}
            </ul>
          </Panel>
        ))}
      </div>
    </Section>
  );
}
