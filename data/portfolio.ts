// ✏️ ALL your content lives here. Edit this file, the page updates itself.
// To add a skill / project / job: just add another object to the right array.

export type Link = { label: string; href: string };

export const profile = {
  name: "Za'im",
  title: "Information Technology Student",
  tagline: "Asipiring student that loves tech :).",
  intro:
    "Hi! I'm a student who loves history, games and any kinds of technology and like to see how things work",
  avatar: "", // e.g. "/me.jpg" (put the file in /public). Leave "" to show a comic burst instead.
  links: [
    { label: "Personal Email", href: "mailto:zaimfadzly@gmail.com" },
    { label: "School Email", href: "mailto:ZAFBYAHYA02.25@ichat.sp.edu.sg" },
    //{ label: "GitHub", href: "https://github.com/yourname" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/zaimfadzly/" },
  ] as Link[],
};

export const education = [
  {
    school: "Singapore Polytechnic",
    qualification: "Diploma in Information Technology",
    period: "2025 - Present",
    details: ["Relevant modules: Fundamentals of Programming, CICD, Java Specialist, Web Development, Database Management, and more."],
  },
  {
    school: "ITE College West",
    qualification: "Higher Nitec in IT Application Development",
    period: "2022 - 2025",
    details: ["Relevant modules: UI/UX Design, Mobile App Development, Enterprise Solutions Development, and more."],
  },
];

export const achievements = [
  { title: "Director List (ITE)", detail: "x1" },
  { title: "Edusave Merit Bursary", detail: "x2" },
  { title: "Eagles Award", detail: "x1" },
  { title: "Edusave Certificate OF Academic Achievement", detail: "x1" }
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  pdf?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: "\"Zaim has truly impressed us during his six-month attachment as a full-stack developer intern. His programming skills stand out, and he consistently tackles complex problems with critical and creative thinking.\"",
    name: "Chris Lok",
    role: "Supervisor, First World Tech",
    pdf: "/testimonials/Testimonial for Zaim.pdf",
  },
];

export const skills = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "Java", "C#", "SQL", "PHP"] },
  { category: "Web", items: ["React", "Next.js", "HTML", "CSS"] },
  { category: "Tools", items: ["Git", "GitHub", "Figma", "VS Code"] },
];

export const experience = [
  {
    role: "Full Stack Intern",
    company: "First World Tech",
    period: "Oct 2023 - April 2024",
    skills: ["HTML/CSS", "JavaScript", "PHP", "SQL"],
    points: [
      "Collaborated directly with a client representative to gather requirements, clarify expectations and guide the development of achildcare management web application intended for use across multiple childcare centres.",
      "Participated in scheduled client meetings and feature demonstrations to showcase implemented functionalities, gatherfeedback and align development with client requirements",
      "Developed and enhanced multiple application modules, including real-time chat, student galleries, student portfolios, staff administration, announcements and student attendance management with calendar functionality.",
      "Performed ongoing maintenance and on-demand hotfixes to troubleshoot bugs, resolve issues and ensure the continued reliability of the web application",
      "Supported the continuous improvement of the application throughout a 9-month internship, adapting existing functionalities based on client feedback and operational requirements."
    ],
  },
];

export const projects = [
  {
    title: "StudyFI",
    description: "UI/UX group project. A school study system",
    tags: ["Figma", "UI/UX Design"],
    links: [
      { label: "Live", href: "https://www.figma.com/proto/FlAQ0oUhKTH6SOY20gMLFw/Group-4-Prototype--Copy-?node-id=2-777&t=fC7MedJDZHcoBzE9-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A777" },
      { label: "Source", href: "https://www.figma.com/design/FlAQ0oUhKTH6SOY20gMLFw/Group-4-Prototype--Copy-?node-id=0-1&t=pcxe3FDYgek8dDQq-1" },
    ] as Link[],
  },
  {
    title: "Wellness Platform",
    description: "A wellness platform that is gamified to allow users to be more engaged..",
    tags: ["HTML/CSS", "JavaScript", "SQL"],
    links: [{ label: "Source", href: "https://github.com/zaim860/valyria" }] as Link[],
  },
  {
    title: "CampusConnect",
    description: "A campus social media platform that allows students to manage their budget and order food",
    tags: ["HTML/CSS", "JavaScript", "SQL"],
    links: [{ label: "Source", href: "https://github.com/zaim860/CampusConnect" }] as Link[],
  },
];
