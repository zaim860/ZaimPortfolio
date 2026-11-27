import { testimonials } from "@/data/portfolio";
import Section from "./Section";

export default function Testimonials() {
  return (
    <Section id="testimonials" title="What People Say">
      <div className="grid grid--2">
        {testimonials.map((t) => (
          <figure key={t.name + t.quote} className="testimonial">
            <blockquote className="bubble">{t.quote}</blockquote>
            <figcaption>
              <strong>{t.name}</strong> <span className="muted">{t.role}</span>
              {t.pdf && (
                <div className="hero__links">
                  <a className="btn btn--small" href={t.pdf} target="_blank" rel="noreferrer">
                    Read full letter (PDF)
                  </a>
                </div>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}