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
  document.getElementById('navbar').classList.toggle('menu-open');
  const spans = hamburger.querySelectorAll('span');
  navLinksEl.classList.contains('open')
    ? (spans[0].style.transform = 'rotate(45deg) translate(5px,5px)', spans[1].style.opacity = '0', spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)')
    : (spans[0].style.transform = '', spans[1].style.opacity = '', spans[2].style.transform = '');
});

navLinksEl.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinksEl.classList.remove('open');
    document.getElementById('navbar').classList.remove('menu-open');
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
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xaqaazqr';

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

// ===== CUSTOM CURSOR =====
const cursorDot = document.getElementById('cursor-dot');
const cursorOutline = document.getElementById('cursor-outline');
if (window.matchMedia("(hover: hover)").matches) {
  window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;
    if(cursorDot) {
      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;
    }
    if(cursorOutline) {
      cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
      }, { duration: 500, fill: "forwards" });
    }
  });
}

// ===== SCROLL PROGRESS =====
const scrollProgress = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
  if(!scrollProgress) return;
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = scrollPercent + '%';
});

// ===== TYPED TEXT =====
const typedTextEl = document.getElementById('typed-text');
const words = ["Mechanical Engineering Student", "CAD Designer", "Creative Technologist", "Problem Solver"];
let wordIdx = 0;
let charIdx = 0;
let isDeleting = false;

function typeEffect() {
  if(!typedTextEl) return;
  const currentWord = words[wordIdx];
  
  if (isDeleting) {
    charIdx--;
  } else {
    charIdx++;
  }
  
  typedTextEl.textContent = currentWord.substring(0, charIdx);
  
  let typeSpeed = isDeleting ? 50 : 100;
  
  if (!isDeleting && charIdx === currentWord.length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIdx === 0) {
    isDeleting = false;
    wordIdx = (wordIdx + 1) % words.length;
    typeSpeed = 500;
  }
  
  setTimeout(typeEffect, typeSpeed);
}
if(typedTextEl) typeEffect();

// ===== STATS COUNTER =====
const stats = document.querySelectorAll('.num[data-target]');
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.getAttribute('data-target'));
      let count = 0;
      const speed = target / 40; 
      const updateCount = () => {
        count += speed;
        if (count < target) {
          entry.target.innerHTML = Math.ceil(count) + '<span>+</span>';
          requestAnimationFrame(updateCount);
        } else {
          entry.target.innerHTML = target + '<span>+</span>';
        }
      };
      updateCount();
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
stats.forEach(stat => statsObserver.observe(stat));

// ===== STAGGERED FADE-UP DELAYS =====
document.querySelectorAll('.skills-grid, .projects-grid, .achievements-grid, .tools-row, .cert-grid').forEach(grid => {
  Array.from(grid.children).forEach((child, index) => {
    if(child.classList.contains('fade-up')) {
      child.style.setProperty('--delay', `${index * 100}ms`);
    }
  });
});

// ===== HERO CANVAS PARTICLES =====
const canvas = document.getElementById('hero-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  let particlesArray = [];
  const numberOfParticles = window.innerWidth < 768 ? 40 : 80;
  
  let lastWidth = window.innerWidth;
  window.addEventListener('resize', () => {
    if (window.innerWidth !== lastWidth) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      lastWidth = window.innerWidth;
    }
  });
  
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = Math.random() * 0.8 - 0.4;
      this.speedY = Math.random() * 0.8 - 0.4;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x > canvas.width) this.x = 0;
      if (this.x < 0) this.x = canvas.width;
      if (this.y > canvas.height) this.y = 0;
      if (this.y < 0) this.y = canvas.height;
    }
    draw() {
      ctx.fillStyle = 'rgba(59, 130, 246, 0.4)';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
  function initParticles() {
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }
  }
  
  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
      particlesArray[i].draw();
    }
    // Connect particles
    for (let a = 0; a < particlesArray.length; a++) {
      for (let b = a; b < particlesArray.length; b++) {
        let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) + 
                       ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
        if (distance < (canvas.width/10) * (canvas.height/10)) {
          let opacity = 1 - (distance / ((canvas.width/10) * (canvas.height/10)));
          ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.2})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
          ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animateParticles);
  }
  initParticles();
  animateParticles();
}

// ===== 3D TILT EFFECT =====
const tiltCards = document.querySelectorAll('.project-card, .skill-category, .achievement-card, .skill-tag, .tool-chip');
if (window.matchMedia("(hover: hover)").matches) {
  tiltCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      // Keep color/shadow transitions active, but remove transform transition for instant tracking
      card.style.transition = 'box-shadow 0.3s, background 0.3s, color 0.3s, border-color 0.3s';
    });
    
    card.addEventListener('mousemove', e => {
      e.stopPropagation(); // CRITICAL: Stop child tags from making parent cards jitter!
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      let multiplier = 8;
      let translateZ = 0;
      let scale = 1.02;
      
      // Dynamic physics based on element type
      if (card.classList.contains('skill-tag')) {
        multiplier = 25;   // Faster tilt for small items
        translateZ = 15;   // True 3D pop off the parent
        scale = 1.08;      // Noticeable size increase
      } else if (card.classList.contains('tool-chip')) {
        multiplier = 15;
        translateZ = 10;
        scale = 1.05;
      }
      
      const rotateX = ((y - centerY) / centerY) * -multiplier;
      const rotateY = ((x - centerX) / centerX) * multiplier;
      
      requestAnimationFrame(() => {
        card.style.transform = `perspective(1000px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;
      });
    });
    
    card.addEventListener('mouseleave', () => {
      // Restore smooth transform transition so it glides back to rest
      card.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.3s, background 0.3s, color 0.3s, border-color 0.3s';
      requestAnimationFrame(() => {
        card.style.transform = `perspective(1000px) translateZ(0px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      });
      setTimeout(() => { card.style.transition = ''; }, 600);
    });
  });
}

