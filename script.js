(() => {
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('resume-theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

  const setTheme = (theme) => {
    root.dataset.theme = theme;
    localStorage.setItem('resume-theme', theme);
    if (themeToggle) {
      themeToggle.textContent = theme === 'light' ? '◑' : '◐';
      themeToggle.setAttribute('aria-label', `Switch to ${theme === 'light' ? 'dark' : 'light'} theme`);
    }
  };

  setTheme(savedTheme || (prefersLight ? 'light' : 'dark'));

  themeToggle?.addEventListener('click', () => {
    setTheme(root.dataset.theme === 'light' ? 'dark' : 'light');
  });

  const projectHeading = document.querySelector('#projects .project-heading > div:first-child');
  if (projectHeading) {
    projectHeading.innerHTML = `
      <p class="eyebrow">Selected systems</p>
      <h2>Deployed products you can open and use</h2>
      <p>These are not screenshots or code fragments. They are working systems covering legal AI, court-data engineering, offline software, and e-commerce automation.</p>
    `;
  }

  const filters = document.querySelector('#projects .filters');
  if (filters) {
    filters.innerHTML = `
      <button class="filter active" type="button" data-filter="all">All</button>
      <button class="filter" type="button" data-filter="live">Live systems</button>
      <button class="filter" type="button" data-filter="data">Data &amp; AI</button>
      <button class="filter" type="button" data-filter="offline">Offline-first</button>
    `;
  }

  const projectGrid = document.getElementById('projectGrid');
  if (projectGrid) {
    projectGrid.innerHTML = `
      <article class="project-card featured" data-tags="live data platform">
        <div class="project-topline">
          <span class="project-number">01</span>
          <span class="badge live">Deployed full-stack system</span>
        </div>
        <h3>Professional Legal &amp; Tax Assistant</h3>
        <p class="project-description">A production-oriented legal and tax workspace for document ingestion, retrieval-augmented search, case management, multi-agent chat, document workflows, and controlled access.</p>
        <ul class="tech-list" aria-label="Technologies">
          <li>FastAPI</li><li>Next.js</li><li>PostgreSQL</li><li>MongoDB</li><li>Qdrant / RAG</li><li>Docker</li><li>Nginx</li>
        </ul>
        <p class="project-note"><strong>What it demonstrates:</strong> Product architecture, authenticated workflows, document processing, AI orchestration, multiple data stores, deployment automation, backups, health checks, and production operations. Access may require sign-in.</p>
        <div class="card-actions">
          <a class="button small primary" href="https://legal.giorgiy.org/" target="_blank" rel="noopener">Open live system ↗</a>
        </div>
      </article>

      <article class="project-card featured" data-tags="live data platform">
        <div class="project-topline">
          <span class="project-number">02</span>
          <span class="badge live">Live court-data platform</span>
        </div>
        <h3>DIW — Docket Intelligence Workbench</h3>
        <p class="project-description">A Cuyahoga County Common Pleas data platform built from the Cuyahoga CP Scraper: scheduled collection, PDF acquisition, normalization, change detection, case monitoring, API access, analytics, graph data, and a public workbench.</p>
        <ul class="tech-list" aria-label="Technologies">
          <li>Python</li><li>Playwright</li><li>FastAPI</li><li>Vue / Vite</li><li>PostgreSQL</li><li>MongoDB</li><li>Docker</li>
        </ul>
        <p class="project-note"><strong>What it demonstrates:</strong> Resilient scraping, scheduled jobs, auditability, large-dataset handling, data-quality review, containerized deployment, backups, monitoring, and turning raw public records into a usable application.</p>
        <div class="card-actions">
          <a class="button small primary" href="https://diw.giorgiy.org/" target="_blank" rel="noopener">Open live workbench ↗</a>
        </div>
      </article>

      <article class="project-card" data-tags="live offline platform">
        <div class="project-topline">
          <span class="project-number">03</span>
          <span class="badge live">Live offline-first suite</span>
        </div>
        <h3>FieldKit</h3>
        <p class="project-description">A deployable offline-first software suite containing more than 30 independent tools and learning applications, served through a compact Go launcher and installable individually or as a complete kit.</p>
        <ul class="tech-list" aria-label="Technologies">
          <li>Go</li><li>Progressive Web Apps</li><li>Service Workers</li><li>JavaScript</li><li>Playwright</li><li>GitHub Pages</li>
        </ul>
        <p class="project-note"><strong>Try it:</strong> Open the launcher, filter tools by airplane-mode or connected operation, launch individual apps, and install supported tools. Includes productivity, training, privacy, media, legal, and field-use applications.</p>
        <div class="card-actions">
          <a class="button small primary" href="https://george-shepov.github.io/FieldKit/" target="_blank" rel="noopener">Open FieldKit ↗</a>
          <a class="button small secondary" href="https://github.com/george-shepov/FieldKit" target="_blank" rel="noopener">View source ↗</a>
        </div>
      </article>

      <article class="project-card" data-tags="live offline platform">
        <div class="project-topline">
          <span class="project-number">04</span>
          <span class="badge live">Live commerce workflow</span>
        </div>
        <h3>OneOf Listing Assistant</h3>
        <p class="project-description">A phone-first inventory and listing workflow for organizing product photos, preparing structured eBay listings, validating publishing readiness, and running controlled listing-optimization experiments.</p>
        <ul class="tech-list" aria-label="Technologies">
          <li>Offline PWA</li><li>IndexedDB</li><li>ASP.NET Core .NET 8</li><li>eBay APIs</li>
        </ul>
        <p class="project-note"><strong>Demo scope:</strong> The public PWA runs without an account. Publishing is intentionally separated behind a protected API because eBay credentials must never be exposed in a static front end.</p>
        <div class="card-actions">
          <a class="button small primary" href="https://george-shepov.github.io/OneOf-Listing-Assistant/" target="_blank" rel="noopener">Open live PWA ↗</a>
          <a class="button small secondary" href="https://github.com/george-shepov/OneOf-Listing-Assistant" target="_blank" rel="noopener">View source ↗</a>
        </div>
      </article>
    `;
  }

  const consultingExperience = document.querySelector('.timeline .experience-item:first-child .experience-body');
  if (consultingExperience) {
    consultingExperience.innerHTML = `
      <ul>
        <li>Design and build full-stack applications, data platforms, automation systems, and AI-assisted workflows from discovery through deployment.</li>
        <li>Built and deployed Professional Legal &amp; Tax Assistant, DIW / Cuyahoga court-data systems, FieldKit, OneOf Listing Assistant, and additional internal tools.</li>
        <li>Work across .NET 8, ASP.NET Core, SQL Server, PostgreSQL, MongoDB, Python/FastAPI, Next.js, TypeScript, Vue, Go, Docker, GitHub Actions, and LLM APIs.</li>
      </ul>
    `;
  }

  const filterButtons = [...document.querySelectorAll('.filter')];
  const projectCards = [...document.querySelectorAll('.project-card')];

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter || 'all';
      filterButtons.forEach((item) => item.classList.toggle('active', item === button));
      projectCards.forEach((card) => {
        const tags = (card.dataset.tags || '').split(/\s+/);
        card.hidden = filter !== 'all' && !tags.includes(filter);
      });
    });
  });

  const experienceItems = [...document.querySelectorAll('.experience-item')];
  document.getElementById('expandAll')?.addEventListener('click', () => {
    experienceItems.forEach((item) => { item.open = true; });
  });

  document.getElementById('collapseAll')?.addEventListener('click', () => {
    experienceItems.forEach((item, index) => { item.open = index < 5; });
  });

  const toast = document.getElementById('toast');
  let toastTimer;
  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
  };

  document.getElementById('copyEmail')?.addEventListener('click', async (event) => {
    const email = event.currentTarget.dataset.email;
    if (!email) return;
    try {
      await navigator.clipboard.writeText(email);
      showToast('Email copied to clipboard.');
    } catch {
      window.location.href = `mailto:${email}`;
    }
  });

  document.getElementById('printResume')?.addEventListener('click', () => {
    const previousStates = experienceItems.map((item) => item.open);
    experienceItems.forEach((item) => { item.open = true; });
    window.print();
    experienceItems.forEach((item, index) => { item.open = previousStates[index]; });
  });

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
