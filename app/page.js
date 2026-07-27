import Link from "next/link"

const capabilities = [
  { number: "01", title: "Performance Capture", text: "High-fidelity full-body capture for animation, human-performance research, simulation, and interactive experiences." },
  { number: "02", title: "3D Digitization", text: "LiDAR, photogrammetry, and camera-based reconstruction for environments, objects, and digital doubles." },
  { number: "03", title: "Digital Twins", text: "Spatially accurate digital assets and real-time scenes that make complex places easier to study, communicate, and explore." },
  { number: "04", title: "Real-Time Workflows", text: "Unreal Engine and contemporary visualization pipelines that bring captured data into usable, interactive form." },
]

export default function Home() {
  return (
    <main className="starlab-home">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Texas A&amp;M University at RELLIS</p>
          <h1 id="hero-title">Capture the real.<br /><em>Build the possible.</em></h1>
          <p className="hero-intro">Starlab is a motion capture and 3D digitization lab where performance, places, and physical systems become usable digital experiences.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/pages/1_Motion_Capture">Explore motion capture <span aria-hidden="true">→</span></Link>
            <Link className="button button-quiet" href="/pages/5_Contact_Us">Work with us <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <div className="hero-footnote">Motion capture · 3D digitization · Digital twins · Real-time visualization</div>
      </section>

      <section className="intro-section section-shell" id="about">
        <p className="section-label">What Starlab does</p>
        <div className="intro-grid">
          <h2>A lab for turning the physical world into something you can study, animate, simulate, and share.</h2>
          <div>
            <p>Starlab brings together motion capture, spatial scanning, and real-time visualization in support of research, teaching, and creative work across Texas A&amp;M.</p>
            <p>We work with faculty, students, government partners, and industry to create high-fidelity motion datasets, digital environments, and interactive experiences.</p>
          </div>
        </div>
      </section>

      <section className="capabilities-section" id="capabilities">
        <div className="section-shell">
          <p className="section-label">Capabilities</p>
          <div className="capability-grid">
            {capabilities.map((capability) => (
              <article className="capability-card" key={capability.number}>
                <p className="capability-number">{capability.number}</p>
                <h3>{capability.title}</h3>
                <p>{capability.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="feature-section section-shell" id="facility">
        <div className="feature-media">
          <img src="/images/StarlabInterior.jpg" alt="The Starlab motion capture stage" />
          <div className="feature-stamp"><span>44</span> camera<br />Vicon stage</div>
        </div>
        <div className="feature-copy">
          <p className="section-label">The facility</p>
          <h2>Space to move, build, test, and make.</h2>
          <p>At the center of Starlab is a 1,600-square-foot performance-capture stage with a 44-camera Vicon system, complemented by modular OptiTrack systems, XR hardware, and 3D scanning tools.</p>
          <p>It is a working lab, not just a showcase: a place where raw capture becomes useful material for research, training, simulation, and storytelling.</p>
          <Link className="button button-outline-gold" href="/pages/1_Motion_Capture">Explore the motion-capture stage <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="research-section" id="research">
        <div className="section-shell research-grid">
          <div className="research-copy">
            <p className="section-label">Research &amp; creative work</p>
            <h2>One lab. Many ways to see a problem differently.</h2>
            <p>From high-fidelity environmental digitization and human-motion datasets to student animation and immersive visualization, Starlab helps teams move from a physical subject to a digital one with purpose.</p>
          </div>
          <div className="research-image-wrap">
            <img src="/images/DigitalDoubles01.PNG" alt="A digital double created through Starlab workflows" />
          </div>
        </div>
      </section>

      <section className="collaborate-section section-shell" id="collaborate">
        <p className="section-label">Collaborate</p>
        <div className="collaborate-grid">
          <h2>Have a research question, a capture need, or an idea worth testing?</h2>
          <div>
            <p>Starlab supports cross-disciplinary projects from early exploration through capture, reconstruction, and delivery.</p>
            <a className="button button-dark" href="mailto:mwalsh@tamu.edu">Start a conversation <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
    </main>
  )
}
