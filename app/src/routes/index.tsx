import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

type Project = {
  title: string;
  category: string;
  number: string;
  tone: string;
  tag: string;
  role: string;
  image?: string;
  video?: string;
};

const projects: Project[] = [
  { number: "01", title: "Kadaisi Ulaga Por", category: "Movies", tone: "amber", tag: "Nominee · Vikatan 2024", role: "Best VFX & Animation Nominee", image: "/roughout-media/images/38677793db25e396c0c7a3949ba7686d9d81d3fd2b20551b229a2636991c2ce4.jpg" },
  { number: "02", title: "Ace", category: "Movies", tone: "blue", tag: "Feature", role: "VFX", image: "/roughout-media/images/MV5BNjNjZTg4MDItNWZlZS00NDc3LTkzZTktODVhOWFkYzA4OTAxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
  { number: "03", title: "Gurram Paapi Reddy", category: "Movies", tone: "red", tag: "Feature", role: "VFX", image: "/roughout-media/images/IMG_4012.JPG" },
  { number: "04", title: "Muthassi", category: "Web Series", tone: "silver", tag: "Series", role: "VFX", image: "/roughout-media/images/muthassi.png", video: "/roughout-media/videos/muthassi-teaser.mp4" },
  { number: "05", title: "Pogattum Po", category: "Music Videos", tone: "amber", tag: "Tap to watch", role: "Title / Animation", image: "/roughout-media/images/wg29P2B11aE-HD.jpg", video: "/roughout-media/videos/pogattum-po-clip-1.mp4" },
  { number: "06", title: "Poi Poi Poi", category: "Music Videos", tone: "blue", tag: "Tap to watch", role: "Title / Animation", image: "/roughout-media/images/WJKluiMOs8Y-HD.jpg", video: "/roughout-media/videos/poi-clip-1.mp4" },
  { number: "07", title: "Nee Illama", category: "Music Videos", tone: "red", tag: "Tap to watch", role: "Title / Animation", image: "/roughout-media/images/dbowelpu4Ls-HD.jpg", video: "/roughout-media/videos/reelsaveapp_1784654365.mp4" },
  { number: "08", title: "Certified Selfmade", category: "Music Videos", tone: "silver", tag: "Tap to watch", role: "Title / Animation", image: "/roughout-media/images/uvbQsFbGSS4-HD.jpg", video: "/roughout-media/videos/certified-self-made-_-hiphop-tamizha-_-official-lyric-video_90_117.mp4" },
  { number: "09", title: "Return of the Dragon Machi", category: "Commercial", tone: "amber", tag: "Hiphop Tamizha", role: "Backdrop Visuals", video: "/roughout-media/videos/return-of-the-dragon-machi-backdrop.mp4" },
  { number: "10", title: "ROTDM Title Design", category: "Commercial", tone: "blue", tag: "Hiphop Tamizha", role: "Title Design", video: "/roughout-media/videos/Rotdm Title.mp4" },
];

const faqs = [
  ["What does Roughout do?", "We build identities, campaigns, and digital experiences for brands with something to say."],
  ["How do we start a project?", "Send a note with what you are building, where you are stuck, and what success should feel like. We will reply with a sharp next step."],
  ["Do you work with early-stage teams?", "Yes. Roughout is built for ambitious teams at the moment where a clearer point of view changes everything."],
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Index() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [pointer, setPointer] = useState({ x: 50, y: 50 });

  const visibleProjects = useMemo(
    () => activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  return (
    <main className="roughout-site" onMouseMove={(event) => setPointer({ x: (event.clientX / window.innerWidth) * 100, y: (event.clientY / window.innerHeight) * 100 })}>
      <div className="cursor-glow" style={{ left: `${pointer.x}%`, top: `${pointer.y}%` }} />
      <header className="site-header">
        <button className="brand-lockup" onClick={() => scrollToId("top")} aria-label="Roughout home">
          <img className="company-logo" src="/images/brand/chrome-mark-hero.png" alt="Rough Out logo" />
          <span className="metal-wordmark">ROUGHOUT</span>
        </button>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <button onClick={() => scrollToId("intro")}>Profile</button>
          <button onClick={() => scrollToId("work")}>Work</button>
          <button onClick={() => scrollToId("contact")}>Contact</button>
        </nav>
        <button className="header-cta" onClick={() => scrollToId("contact")}>Start a project <span>↗</span></button>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-copy">
          <h1>ROUGHOUT</h1>
          <div className="hero-actions">
            <button className="button button-primary" onClick={() => scrollToId("work")}>Explore the work <span>↓</span></button>
            <button className="text-link" onClick={() => scrollToId("intro")}>See our profile <span>↘</span></button>
          </div>
        </div>
        <p className="hero-tagline">Beyond the Frame. Beyond Expectations.</p>
      </section>

      <section className="ticker" aria-label="Studio capabilities"><div>VFX</div><span>✦</span><div>3D and FX</div><span>✦</span><div>AI and Previs</div><span>✦</span><div>Title Design</div><span>✦</span><div>Animation</div><span>✦</span></section>

      <section id="work" className="content-section work-section">
        <div className="section-heading"><p className="eyebrow">Selected work / Rough Out archive</p><h2>Proof, not promises.</h2><p>One focused library for the VFX, animation, and title work that keeps working after launch.</p></div>
        <div className="filter-row" role="tablist" aria-label="Filter projects">{["All", "Movies", "Web Series", "Music Videos", "Commercial"].map((filter) => <button key={filter} className={activeFilter === filter ? "filter active" : "filter"} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div>
        <div className="project-grid">{visibleProjects.map((project) => <article className={`project-card ${project.tone}`} key={project.title} onClick={() => scrollToId("contact")}><div className="project-visual">{project.video ? <video className="project-media" src={project.video} poster={project.image} autoPlay muted loop playsInline preload="metadata" /> : project.image ? <img className="project-media" src={project.image} alt={`${project.title} project still`} loading="lazy" /> : null}<span className="project-number">{project.number}</span>{!project.video && !project.image ? <div className="project-shape" /> : null}<span className="project-arrow">↗</span></div><div className="project-meta"><div><p>{project.tag}</p><h3>{project.title}</h3></div><p className="project-description">{project.role}</p></div></article>)}</div>
      </section>

      <section id="intro" className="approach-section">
        <div className="approach-statement"><p className="eyebrow">The Rough Out approach</p><h2>Good images get attention.<br /><em>Great images earn belief.</em></h2></div>
        <div className="approach-list"><div><span>01</span><h3>VFX · 3D · FX · AI</h3><p>Blending cinematic storytelling with cutting-edge technology.</p></div><div><span>02</span><h3>Previs · Storyboarding · R&amp;D</h3><p>Developing the visual language before the final frame.</p></div><div><span>03</span><h3>Creative &amp; VFX Direction</h3><p>Keeping every image clear, considered, and unmistakably Rough Out.</p></div></div>
      </section>

      <section className="faq-section"><div className="section-heading"><p className="eyebrow">The useful bits</p><h2>Questions, answered.</h2></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? "open" : ""}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><span className="faq-icon">{openFaq === index ? "−" : "+"}</span></button>{openFaq === index && <p>{answer}</p>}</div>)}</div></section>

      <section id="contact" className="contact-section"><div className="contact-orbit" /><p className="eyebrow">We do websites also</p><h2>What's your<br /><span>rough idea?</span></h2><p className="contact-copy">Let's Talk.</p><a className="button button-primary contact-button" href="mailto:roughoutofficial@gmail.com">Email · roughoutofficial@gmail.com <span>↗</span></a><p className="contact-details">Phone · <a href="tel:+917708143295">7708143295</a> &nbsp; · &nbsp; <a href="https://www.instagram.com/_roughout" target="_blank" rel="noreferrer">Instagram · @_roughout</a></p></section>
      <footer className="site-footer"><div className="footer-brand"><img className="footer-company-logo" src="/images/brand/chrome-mark-hero.png" alt="Rough Out logo" /><div className="metal-wordmark footer-logo">ROUGHOUT</div></div><p>Independent creative studio<br />Chennai · India</p><div className="footer-links"><a href="mailto:roughoutofficial@gmail.com">Email</a><a href="#top">Back to top ↑</a></div><small>© {new Date().getFullYear()} Roughout Studio</small></footer>
    </main>
  );
}
