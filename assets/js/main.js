document.getElementById('year').textContent = new Date().getFullYear();

/* ---------------- TYPING ANIMATION ---------------- */
(function typeRoles(){
  const el = document.getElementById('typing-text');
  let roleIndex = 0, charIndex = 0, deleting = false;

  function tick(){
    const word = ROLES[roleIndex];
    if(!deleting){
      charIndex++;
      el.textContent = word.slice(0, charIndex);
      if(charIndex === word.length){ deleting = true; setTimeout(tick, 1400); return; }
    } else {
      charIndex--;
      el.textContent = word.slice(0, charIndex);
      if(charIndex === 0){ deleting = false; roleIndex = (roleIndex + 1) % ROLES.length; }
    }
    setTimeout(tick, deleting ? 40 : 80);
  }
  tick();
})();

/* ---------------- STAT COUNTERS ---------------- */
function animateCounters(){
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    const isDecimal = el.dataset.decimal === "true";
    let current = 0;
    const step = Math.max(1, target / 60);
    const timer = setInterval(() => {
      current += step;
      if(current >= target){ current = target; clearInterval(timer); }
      el.textContent = isDecimal ? (current/100).toFixed(2) : Math.floor(current);
    }, 20);
  });
}

/* ---------------- SKILL BARS ---------------- */
function animateBars(){
  document.querySelectorAll('.fill').forEach(f => f.classList.add('animated'));
}

/* ---------------- INTERSECTION OBSERVER FOR SECTION TRIGGERS ---------------- */
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      animateCounters();
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.4 });
statsObserver.observe(document.getElementById('stats'));

const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      animateBars();
      drawRadar();
      skillsObserver.disconnect();
    }
  });
}, { threshold: 0.3 });
skillsObserver.observe(document.getElementById('skills'));

/* ---------------- RADAR CHART (canvas, no library) ---------------- */
function drawRadar(){
  const canvas = document.getElementById('radar-chart');
  const ctx = canvas.getContext('2d');
  const labels = ["Python","Java","Embedded/IoT","UI/UX","MySQL","Angular","AI Prompting"];
  const values = [92,75,78,85,70,60,88]; // out of 100
  const cx = canvas.width/2, cy = canvas.height/2, radius = 170;
  const n = labels.length;
  const cyan = getComputedStyle(document.documentElement).getPropertyValue('--cyan').trim() || '#4fd8e8';
  const line = getComputedStyle(document.documentElement).getPropertyValue('--line').trim() || '#1c2c42';
  const textDim = getComputedStyle(document.documentElement).getPropertyValue('--text-dim').trim() || '#7691a8';

  ctx.clearRect(0,0,canvas.width,canvas.height);

  // grid rings
  for(let ring=1; ring<=4; ring++){
    ctx.beginPath();
    for(let i=0;i<=n;i++){
      const angle = (Math.PI*2*i/n) - Math.PI/2;
      const r = radius*(ring/4);
      const x = cx + r*Math.cos(angle);
      const y = cy + r*Math.sin(angle);
      i===0 ? ctx.moveTo(x,y) : ctx.lineTo(x,y);
    }
    ctx.strokeStyle = line;
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // axes + labels
  ctx.font = "12px 'JetBrains Mono', monospace";
  ctx.fillStyle = textDim;
  for(let i=0;i<n;i++){
    const angle = (Math.PI*2*i/n) - Math.PI/2;
    const x = cx + radius*Math.cos(angle);
    const y = cy + radius*Math.sin(angle);
    ctx.beginPath();
    ctx.moveTo(cx,cy);
    ctx.lineTo(x,y);
    ctx.strokeStyle = line;
    ctx.stroke();

    const lx = cx + (radius+34)*Math.cos(angle);
    const ly = cy + (radius+34)*Math.sin(angle);
    ctx.textAlign = Math.cos(angle) > 0.3 ? 'left' : (Math.cos(angle) < -0.3 ? 'right' : 'center');
    ctx.fillText(labels[i], lx, ly);
  }

  // data polygon (animated draw-in)
  let progress = 0;
  function animatePolygon(){
    progress += 0.04;
    if(progress > 1) progress = 1;
    ctx.save();
    ctx.beginPath();
    for(let i=0;i<=n;i++){
      const idx = i % n;
      const angle = (Math.PI*2*idx/n) - Math.PI/2;
      const r = radius*(values[idx]/100)*progress;
      const x = cx + r*Math.cos(angle);
      const y = cy + r*Math.sin(angle);
      i===0 ? ctx.moveTo(x,y) : ctx.lineTo(x,y);
    }
    ctx.closePath();
    ctx.fillStyle = 'rgba(79,216,232,0.18)';
    ctx.fill();
    ctx.strokeStyle = cyan;
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();

    // redraw grid on top isn't needed since grid drawn once; but need to clear+redraw each frame
    if(progress < 1){
      ctx.clearRect(0,0,canvas.width,canvas.height);
      drawStaticLayer();
      requestAnimationFrame(animatePolygon);
    }
  }

  function drawStaticLayer(){
    for(let ring=1; ring<=4; ring++){
      ctx.beginPath();
      for(let i=0;i<=n;i++){
        const angle = (Math.PI*2*i/n) - Math.PI/2;
        const r = radius*(ring/4);
        const x = cx + r*Math.cos(angle);
        const y = cy + r*Math.sin(angle);
        i===0 ? ctx.moveTo(x,y) : ctx.lineTo(x,y);
      }
      ctx.strokeStyle = line;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    ctx.font = "12px 'JetBrains Mono', monospace";
    ctx.fillStyle = textDim;
    for(let i=0;i<n;i++){
      const angle = (Math.PI*2*i/n) - Math.PI/2;
      const x = cx + radius*Math.cos(angle);
      const y = cy + radius*Math.sin(angle);
      ctx.beginPath();
      ctx.moveTo(cx,cy);
      ctx.lineTo(x,y);
      ctx.strokeStyle = line;
      ctx.stroke();
      const lx = cx + (radius+34)*Math.cos(angle);
      const ly = cy + (radius+34)*Math.sin(angle);
      ctx.textAlign = Math.cos(angle) > 0.3 ? 'left' : (Math.cos(angle) < -0.3 ? 'right' : 'center');
      ctx.fillText(labels[i], lx, ly);
    }
  }

  requestAnimationFrame(animatePolygon);
}

/* ---------------- TIMELINE RENDER ---------------- */
function renderTimeline(){
  const wrap = document.getElementById('timeline-list');
  wrap.innerHTML = TIMELINE.map(item => `
    <div class="timeline-item">
      <div class="t-year">${item.year}</div>
      <div class="t-title">${item.title}</div>
      <div class="t-desc">${item.desc}</div>
    </div>
  `).join('');
}
renderTimeline();

/* ---------------- PROJECTS RENDER + FILTER ---------------- */
function renderProjects(filter){
  const grid = document.getElementById('project-grid');
  const list = filter === 'ALL' ? PROJECTS : PROJECTS.filter(p => p.category === filter);
  grid.innerHTML = list.map(p => `
    <div class="project-card">
      <div class="pc-top">
        <div class="pc-title">${p.title}</div>
        <div class="pc-cat">${p.category}</div>
      </div>
      <div class="pc-desc">${p.desc}</div>
      <div class="pc-tags">${p.tags.map(t => `<span class="pc-tag">${t}</span>`).join('')}</div>
      <div class="pc-bottom">
        <div class="pc-diff" title="Difficulty">${'★'.repeat(p.difficulty)}${'☆'.repeat(5-p.difficulty)}</div>
        <div class="pc-completion"><b>${p.completion}%</b> complete</div>
      </div>
    </div>
  `).join('');
}

function renderFilters(){
  const categories = ['ALL', ...new Set(PROJECTS.map(p => p.category))];
  const bar = document.getElementById('filter-bar');
  bar.innerHTML = categories.map((c,i) => `<button class="filter-btn ${i===0?'active':''}" data-filter="${c}">${c}</button>`).join('');
  bar.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  });
}
renderFilters();
renderProjects('ALL');

/* ---------------- AWARDS RENDER ---------------- */
function renderAwards(){
  const grid = document.getElementById('awards-grid');
  grid.innerHTML = AWARDS.map(a => `
    <div class="award-card">
      <div class="award-medal">${a.medal}</div>
      <div>
        <div class="award-title">${a.title}</div>
        <div class="award-place">${a.place}</div>
        <div class="award-org">${a.org}</div>
      </div>
    </div>
  `).join('');
}
renderAwards();

/* ---------------- ANIMATED CIRCUIT BACKGROUND ---------------- */
(function circuitBackground(){
  const canvas = document.getElementById('circuit-bg');
  const ctx = canvas.getContext('2d');
  let w, h, nodes = [];

  function resize(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const nodeCount = Math.min(60, Math.floor((window.innerWidth*window.innerHeight)/28000));
  for(let i=0;i<nodeCount;i++){
    nodes.push({
      x: Math.random()*w, y: Math.random()*h,
      vx: (Math.random()-0.5)*0.25, vy: (Math.random()-0.5)*0.25
    });
  }

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function frame(){
    ctx.clearRect(0,0,w,h);
    ctx.fillStyle = 'rgba(79,216,232,0.6)';

    nodes.forEach(n => {
      if(!prefersReduced){
        n.x += n.vx; n.y += n.vy;
        if(n.x < 0 || n.x > w) n.vx *= -1;
        if(n.y < 0 || n.y > h) n.vy *= -1;
      }
      ctx.beginPath();
      ctx.arc(n.x, n.y, 1.6, 0, Math.PI*2);
      ctx.fill();
    });

    for(let i=0;i<nodes.length;i++){
      for(let j=i+1;j<nodes.length;j++){
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if(dist < 140){
          ctx.strokeStyle = `rgba(79,216,232,${0.12 * (1 - dist/140)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(frame);
  }
  frame();
})();

/* ---------------- RESUME BUTTON ---------------- */
document.getElementById('resume-btn').addEventListener('click', (e) => {
  e.preventDefault();
  alert('Add your resume PDF at assets/JAYASUBRAMANI_RESUME.pdf and update the href of #resume-btn in index.html to point to it.');
});
