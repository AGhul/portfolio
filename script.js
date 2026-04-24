// ===== PROJECT DATA =====
const projects = [
  {
    title: "Mechanical Assembly Design",
    img: "assets/project_cad.png",
    meta: [
      { icon: "🏷️", label: "Category: CAD / Design" },
      { icon: "🛠️", label: "Tools: Creo, SolidWorks, AutoCAD" },
      { icon: "👤", label: "Role: Designer & Drafter" }
    ],
    overview: "A comprehensive 3D parametric mechanical assembly model built in Creo Parametric, featuring detailed part models, assembly constraints, and full engineering drawing sets with GD&T annotations.",
    objective: "To design and document a functional mechanical assembly that meets engineering standards, demonstrating proficiency in 3D CAD modeling, part design, and technical drawing production.",
    process: "Started with individual part modeling in Creo, defining design intent through parametric features. Assembled all components using proper mating constraints. Generated detailed 2D drawings with dimensions, tolerances, and surface finish callouts per ASME standards.",
    outcome: "Delivered a fully parametric assembly with complete drawing documentation. The model demonstrated accurate component fit, realistic material properties, and professional-level engineering drawing quality suitable for manufacturing."
  },
  {
    title: "Technical Event Poster Series",
    img: "assets/project_poster.png",
    meta: [
      { icon: "🏷️", label: "Category: Posters & Presentations" },
      { icon: "🛠️", label: "Tools: Illustrator, Photoshop, Canva" },
      { icon: "👤", label: "Role: Lead Designer" }
    ],
    overview: "Designed a cohesive series of professional event posters for a college technical festival, maintaining a consistent visual identity across multiple events while keeping each design unique and eye-catching.",
    objective: "Create visually compelling posters that effectively communicate event information, attract student participation, and maintain a premium, professional aesthetic that reflects the quality of the events.",
    process: "Conducted initial research on modern event design trends. Established a visual style guide with typography, color palette, and layout grid. Created individual poster layouts in Illustrator with custom vector elements and typographic hierarchy, refined in Photoshop for final output.",
    outcome: "Produced 8+ event posters that received strong positive feedback from the organizing committee and event attendees. The designs helped drive event registrations and established a recognizable visual brand for the technical fest."
  },
  {
    title: "Brand Identity Design",
    img: "assets/project_branding.png",
    meta: [
      { icon: "🏷️", label: "Category: Branding" },
      { icon: "🛠️", label: "Tools: Adobe Illustrator, Photoshop" },
      { icon: "👤", label: "Role: Brand Designer" }
    ],
    overview: "Developed a complete brand identity system for a student organization, covering logo design, color palette, typography, iconography, and application mockups across digital and print media.",
    objective: "Create a memorable, versatile, and professional brand identity that communicates the organization's values and stands out in both digital and physical applications.",
    process: "Started with brand discovery — understanding the organization's mission, target audience, and positioning. Sketched multiple logo concepts, refined the strongest directions in Illustrator. Developed the full brand system including color codes, font pairings, and usage guidelines. Created mockups showing the brand in real-world application.",
    outcome: "Delivered a complete brand identity guide that the organization actively uses across all their communications, social media, printed materials, and events. The brand has received consistent recognition for its professional quality."
  },
  {
    title: "Event Highlight Reel",
    img: "assets/project_video.png",
    meta: [
      { icon: "🏷️", label: "Category: Video / Creative" },
      { icon: "🛠️", label: "Tools: Adobe Premiere Pro, Photoshop" },
      { icon: "👤", label: "Role: Editor & Director" }
    ],
    overview: "Produced and edited a high-energy promotional highlight reel for a major college technical festival, featuring event footage, motion graphics, and a cinematic color grade.",
    objective: "Capture the energy and excitement of the technical festival in a 2-3 minute highlight video that can be shared on social media to build hype for future editions and showcase the event's scale.",
    process: "Coordinated with the photography team to gather footage. Developed a story arc that progressed from event setup to peak moments. Assembled rough cut in Premiere Pro, added transitions, lower-thirds graphics, and sound design. Applied cinematic LUT color grading and rendered for social media platforms.",
    outcome: "The final highlight reel achieved 10,000+ views across social media platforms within the first week, generated significant interest for the next edition of the event, and was featured in the college's official communications."
  },
  {
    title: "Engineering Drawing Set",
    img: "assets/project_cad.png",
    meta: [
      { icon: "🏷️", label: "Category: Engineering" },
      { icon: "🛠️", label: "Tools: AutoCAD, Creo Parametric" },
      { icon: "👤", label: "Role: Technical Drafter" }
    ],
    overview: "Created a comprehensive set of engineering drawings for a mechanical system, including orthographic projections, sectional views, detail drawings, and a complete bill of materials.",
    objective: "Produce industry-standard engineering drawings that fully communicate the design intent, dimensions, tolerances, and assembly information required for manufacturing and quality inspection.",
    process: "Modeled the mechanical system components in Creo Parametric to extract accurate geometry. Set up drawing sheets with proper title blocks and revision history. Applied ASME Y14.5 GD&T standards for critical features. Reviewed and verified all dimensions against the 3D model.",
    outcome: "Delivered a complete drawing package of 15 sheets including assembly, sub-assembly, and detail drawings. The documentation set met engineering standards and demonstrated mastery of technical drawing conventions and tolerance specification."
  },
  {
    title: "Technical Presentation Design",
    img: "assets/project_branding.png",
    meta: [
      { icon: "🏷️", label: "Category: Presentations" },
      { icon: "🛠️", label: "Tools: PowerPoint, Canva, Illustrator" },
      { icon: "👤", label: "Role: Designer & Presenter" }
    ],
    overview: "Designed a high-impact presentation deck for a competitive technical project pitch, with a focus on data visualization, visual hierarchy, and professional aesthetics that support the technical content.",
    objective: "Transform complex technical content into a visually compelling, easy-to-follow presentation that communicates the project's value clearly and makes a strong impression on judges and stakeholders.",
    process: "Started by structuring the narrative flow and content hierarchy. Created a custom slide template system in PowerPoint with brand-consistent colors and fonts. Designed custom infographics and diagrams in Illustrator. Finalized all slides with consistent spacing, typography, and visual weight balance.",
    outcome: "The presentation was selected as one of the top submissions in the competition, receiving specific praise for its visual clarity and professional design quality. It effectively elevated the technical content and helped the team communicate their ideas with confidence."
  }
];

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  updateActiveNav();
});

function updateActiveNav() {
  const sections = ['hero', 'about', 'skills', 'projects', 'resume', 'contact'];
  let current = 'hero';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 120) current = id;
  });
  navLinks.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) a.classList.add('active');
  });
}

// ===== HAMBURGER =====
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinksEl.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  navLinksEl.classList.contains('open')
    ? (spans[0].style.transform = 'rotate(45deg) translate(5px,5px)', spans[1].style.opacity = '0', spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)')
    : (spans[0].style.transform = '', spans[1].style.opacity = '', spans[2].style.transform = '');
});

navLinksEl.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinksEl.classList.remove('open');
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = ''; spans[1].style.opacity = ''; spans[2].style.transform = '';
  });
});

// ===== SCROLL ANIMATIONS =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ===== PROJECT FILTER =====
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    projectCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = '';
        setTimeout(() => card.style.opacity = '1', 10);
      } else {
        card.style.opacity = '0';
        setTimeout(() => card.style.display = 'none', 300);
      }
    });
  });
});

// ===== MODAL =====
const modal = document.getElementById('projectModal');

function openModal(idx) {
  const p = projects[idx];
  document.getElementById('modalTitle').textContent = p.title;
  document.getElementById('modalImg').src = p.img;
  document.getElementById('modalImg').alt = p.title;
  document.getElementById('modalOverview').textContent = p.overview;
  document.getElementById('modalObjective').textContent = p.objective;
  document.getElementById('modalProcess').textContent = p.process;
  document.getElementById('modalOutcome').textContent = p.outcome;
  const metaEl = document.getElementById('modalMeta');
  metaEl.innerHTML = p.meta.map(m => `<span>${m.icon} ${m.label}</span>`).join('');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOutside(e) {
  if (e.target === modal) closeModal();
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ===== CONTACT FORM (Formspree backend) =====
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mqaevepy';

async function handleFormSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('contactSubmitBtn');
  const name    = document.getElementById('contactName').value.trim();
  const email   = document.getElementById('contactEmail').value.trim();
  const subject = document.getElementById('contactSubject').value;
  const msg     = document.getElementById('contactMessage').value.trim();

  // Basic validation
  if (!name || !email || !msg) {
    btn.innerHTML = '⚠️ Please fill all required fields';
    btn.style.background = '#ef4444';
    setTimeout(() => { btn.innerHTML = 'Send Message ✉️'; btn.style.background = ''; }, 2500);
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    btn.innerHTML = '⚠️ Please enter a valid email address';
    btn.style.background = '#ef4444';
    setTimeout(() => { btn.innerHTML = 'Send Message ✉️'; btn.style.background = ''; }, 2500);
    return;
  }

  btn.innerHTML = '⏳ Sending...';
  btn.disabled = true;

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        email: email,
        subject: subject || 'Portfolio Contact Form',
        message: msg,
        _subject: `[Portfolio] ${subject || 'New message'} from ${name}`,
      })
    });

    if (response.ok) {
      btn.innerHTML = '✅ Message Sent!';
      btn.style.background = 'linear-gradient(135deg,#22c55e,#16a34a)';
      document.getElementById('contactName').value = '';
      document.getElementById('contactEmail').value = '';
      document.getElementById('contactMessage').value = '';
      document.getElementById('contactSubject').value = '';
      setTimeout(() => { btn.innerHTML = 'Send Message ✉️'; btn.style.background = ''; btn.disabled = false; }, 3500);
    } else {
      const data = await response.json();
      const errMsg = (data && data.errors) ? data.errors.map(e => e.message).join(', ') : 'Submission failed. Please try again.';
      btn.innerHTML = `⚠️ ${errMsg}`;
      btn.style.background = '#ef4444';
      setTimeout(() => { btn.innerHTML = 'Send Message ✉️'; btn.style.background = ''; btn.disabled = false; }, 4000);
    }
  } catch (err) {
    btn.innerHTML = '⚠️ Network error — please try again';
    btn.style.background = '#ef4444';
    setTimeout(() => { btn.innerHTML = 'Send Message ✉️'; btn.style.background = ''; btn.disabled = false; }, 4000);
  }
}

// ===== RESUME DOWNLOAD =====
document.getElementById('downloadResumeBtn').addEventListener('click', function(e) {
  e.preventDefault();
  this.textContent = '📋 Resume not uploaded yet — contact me directly!';
  this.style.background = 'linear-gradient(135deg,#3b82f6,#1d4ed8)';
  setTimeout(() => { this.innerHTML = '⬇️ Download Resume (PDF)'; this.style.background = ''; }, 3000);
});

// ===== SMOOTH HERO PARALLAX =====
window.addEventListener('scroll', () => {
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) heroBg.style.transform = `translateY(${window.scrollY * 0.3}px)`;
});
