import { profile } from "@/data/portfolio";
import Panel from "./Panel";

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero__text">
        <p className="hero__title">{profile.title}</p>
        <h1 className="hero__name">{profile.name}</h1>
        <div className="bubble">
          <p>{profile.intro}</p>
        </div>
        <p className="hero__tagline">{profile.tagline}</p>
        <div className="hero__links">
          {profile.links.map((l) => (
            <a key={l.label} className="btn" href={l.href} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </div>
      </div>
      <div className="hero__art">
        {profile.avatar ? (
          <Panel tilt="right" className="hero__photo">
            <img src={profile.avatar} alt={profile.name} />
          </Panel>
        ) : (
          <div className="burst" aria-hidden="true">
            <span className="burst__a">HELLO!</span>
            <span className="burst__b">POW!</span>
          </div>
        )}
      </div>
    </header>
  );
}
