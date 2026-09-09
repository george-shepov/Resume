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
  themeToggle?.addEventListener('click', () => setTheme(root.dataset.theme === 'light' ? 'dark' : 'light'));

  const projectHeading = document.querySelector('#projects .project-heading > div:first-child');
  if (projectHeading) {
    projectHeading.innerHTML = `
      <p class="eyebrow">Selected systems</p>
      <h2>Software you can inspect and use</h2>
      <p>The portfolio is built from the current résumé and active product ecosystem. Each item links to a working deployment, public source, or both.</p>
    `;
  }

  const filters = document.querySelector('#projects .filters');
  if (filters) {
    filters.innerHTML = `
      <button class="filter active" type="button" data-filter="all">All</button>
      <button class="filter" type="button" data-filter="live">Live</button>
      <button class="filter" type="button" data-filter="offline">Offline-first</button>
      <button class="filter" type="button" data-filter="source">Source</button>
      <button class="filter" type="button" data-filter="infrastructure">Infrastructure</button>
    `;
  }

  const projectGrid = document.getElementById('projectGrid');
  if (projectGrid) {
    projectGrid.innerHTML = `
      <article class="project-card featured" data-tags="live offline source">
        <div class="project-topline">
          <span class="project-number">01</span>
          <span class="badge live">Primary portfolio platform</span>
        </div>
        <h3>FieldKit</h3>
        <p class="project-description">An offline-first application suite and launcher for productivity, training, legal, field, privacy, media, and business workflows.</p>
        <ul class="tech-list" aria-label="Technologies">
          <li>Go</li><li>Progressive Web Apps</li><li>Service Workers</li><li>JavaScript</li><li>Playwright</li><li>GitHub Pages</li>
        </ul>
        <p class="project-note"><strong>What it demonstrates:</strong> Reusable application modules, shared platform services, offline operation, installable tools, deployment, and a growing training lab.</p>
        <div class="card-actions">
          <a class="button small primary" href="https://fieldkit.giorgiy.org/" target="_blank" rel="noopener">Open FieldKit ↗</a>
          <a class="button small secondary" href="https://github.com/george-shepov/FieldKit" target="_blank" rel="noopener">View source ↗</a>
        </div>
      </article>

      <article class="project-card featured" data-tags="live offline source">
        <div class="project-topline">
          <span class="project-number">02</span>
          <span class="badge live">FieldKit training system</span>
        </div>
        <h3>Developer Interview Prep</h3>
        <p class="project-description">Searchable interview-question decks covering SQL, .NET, JavaScript, behavioral preparation, position analysis, bookmarks, local notes, backup/restore, and offline use.</p>
        <ul class="tech-list" aria-label="Technologies">
          <li>JavaScript</li><li>PWA</li><li>Service Worker</li><li>Local Storage</li><li>Responsive UI</li>
        </ul>
        <p class="project-note"><strong>FieldKit integration:</strong> Available as a Training Lab module with a full-screen standalone mode.</p>
        <div class="card-actions">
          <a class="button small primary" href="https://fieldkit.giorgiy.org/developer-interview-prep/" target="_blank" rel="noopener">Open training ↗</a>
          <a class="button small secondary" href="https://github.com/george-shepov/developer-interview-prep" target="_blank" rel="noopener">View source ↗</a>
        </div>
      </article>

      <article class="project-card featured" data-tags="live source infrastructure">
        <div class="project-topline">
          <span class="project-number">03</span>
          <span class="badge live">Deployed system</span>
        </div>
        <h3>Professional Legal &amp; Tax Assistant</h3>
        <p class="project-description">FastAPI and Next.js workspace for document ingestion, retrieval-augmented search, case management, document workflows, specialist teams, and controlled model access.</p>
        <ul class="tech-list" aria-label="Technologies">
          <li>FastAPI</li><li>Next.js</li><li>PostgreSQL</li><li>MongoDB</li><li>Qdrant / RAG</li><li>Docker</li><li>Nginx</li>
        </ul>
        <p class="project-note"><strong>Architecture:</strong> User-owned keys, paid platform access, server-side vault integration, specialist routing, and isolated deployment services.</p>
        <div class="card-actions">
          <a class="button small primary" href="https://legal.giorgiy.org/" target="_blank" rel="noopener">Open system ↗</a>
          <a class="button small secondary" href="https://github.com/george-shepov/professional_legal_tax_assistant" target="_blank" rel="noopener">View source ↗</a>
        </div>
      </article>

      <article class="project-card featured" data-tags="source infrastructure">
        <div class="project-topline">
          <span class="project-number">04</span>
          <span class="badge source">Public source</span>
        </div>
        <h3>Docket Intelligence Workbench</h3>
        <p class="project-description">Court-record monitoring, immutable snapshots, change detection, filing organization, timelines, querying, and source-grounded analysis.</p>
        <ul class="tech-list" aria-label="Technologies">
          <li>Python</li><li>Record normalization</li><li>Change detection</li><li>Audit trails</li><li>Cited analysis</li>
        </ul>
        <p class="project-note"><strong>Scale:</strong> Docket ingestion and analysis workflows designed around more than 20,000 court records.</p>
        <div class="card-actions">
          <a class="button small secondary" href="https://github.com/george-shepov/docket-intelligence-workbench" target="_blank" rel="noopener">View source ↗</a>
        </div>
      </article>

      <article class="project-card" data-tags="live infrastructure">
        <div class="project-topline">
          <span class="project-number">05</span>
          <span class="badge live">Security infrastructure</span>
        </div>
        <h3>Credential Vault</h3>
        <p class="project-description">Separate credential-management boundary for application secrets, user-scoped API keys, and production services.</p>
        <ul class="tech-list" aria-label="Technologies">
          <li>Secrets</li><li>User isolation</li><li>Key rotation</li><li>Linux</li><li>TLS</li><li>Reverse proxy</li>
        </ul>
        <p class="project-note"><strong>Purpose:</strong> Keep shared platform keys out of browser storage while supporting bring-your-own-key and paid access models.</p>
        <div class="card-actions">
          <a class="button small primary" href="https://vault.giorgiy.org/" target="_blank" rel="noopener">Open vault ↗</a>
        </div>
      </article>

      <article class="project-card" data-tags="live source infrastructure">
        <div class="project-topline">
          <span class="project-number">06</span>
          <span class="badge live">Repository portal</span>
        </div>
        <h3>Repository Matrix</h3>
        <p class="project-description">A navigable view across working products, predecessor systems, experiments, deployments, and source history.</p>
        <ul class="tech-list" aria-label="Technologies">
          <li>GitHub</li><li>Portfolio architecture</li><li>Product lineage</li><li>Deployment inventory</li>
        </ul>
        <p class="project-note"><strong>Why it matters:</strong> The portfolio shows not only polished demos, but how systems evolved and where reusable capabilities live.</p>
        <div class="card-actions">
          <a class="button small primary" href="https://repos.giorgiy.org/" target="_blank" rel="noopener">Browse repository portal ↗</a>
          <a class="button small secondary" href="https://github.com/george-shepov" target="_blank" rel="noopener">GitHub profile ↗</a>
        </div>
      </article>

      <article class="project-card" data-tags="offline source">
        <div class="project-topline">
          <span class="project-number">07</span>
          <span class="badge source">Commerce workflow</span>
        </div>
        <h3>OneOf Listing Assistant</h3>
        <p class="project-description">Phone-first inventory intake and marketplace-listing workflow for organizing product photos, preparing structured listings, validating publishing readiness, and running controlled optimization experiments.</p>
        <ul class="tech-list" aria-label="Technologies">
          <li>Offline PWA</li><li>IndexedDB</li><li>ASP.NET Core .NET 8</li><li>eBay APIs</li>
        </ul>
        <p class="project-note"><strong>Security boundary:</strong> Marketplace credentials and publishing operations remain behind a separately configured protected API.</p>
        <div class="card-actions">
          <a class="button small primary" href="https://oneof.store/" target="_blank" rel="noopener">Visit OneOf ↗</a>
          <a class="button small secondary" href="https://github.com/george-shepov/OneOf-Listing-Assistant" target="_blank" rel="noopener">View source ↗</a>
        </div>
      </article>
    `;
  }

  const consultingExperience = document.querySelector('.timeline .experience-item:first-child .experience-body');
  if (consultingExperience) {
    consultingExperience.innerHTML = `
      <ul>
        <li>Operate Independent Software Development / LODEX Software as the current production-work umbrella, building on a company history that began in October 2000.</li>
        <li>Current work includes Professional Legal &amp; Tax Assistant, Docket Intelligence Workbench, FieldKit, OneOf Listing Assistant, multi-provider LLM collaboration tools, credential infrastructure, and workflow automation.</li>
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
  document.getElementById('expandAll')?.addEventListener('click', () => experienceItems.forEach((item) => { item.open = true; }));
  document.getElementById('collapseAll')?.addEventListener('click', () => experienceItems.forEach((item, index) => { item.open = index < 5; }));

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
