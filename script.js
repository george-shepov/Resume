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
      <p>FieldKit leads the portfolio. Broken production links are not presented as live; systems still being deployed are labeled clearly.</p>
    `;
  }

  const filters = document.querySelector('#projects .filters');
  if (filters) {
    filters.innerHTML = `
      <button class="filter active" type="button" data-filter="all">All</button>
      <button class="filter" type="button" data-filter="live">Live</button>
      <button class="filter" type="button" data-filter="offline">Offline-first</button>
      <button class="filter" type="button" data-filter="source">Source / deployment</button>
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
          <a class="button small primary" href="https://george-shepov.github.io/FieldKit/" target="_blank" rel="noopener">Open FieldKit ↗</a>
          <a class="button small secondary" href="https://github.com/george-shepov/FieldKit" target="_blank" rel="noopener">View source ↗</a>
        </div>
      </article>

      <article class="project-card featured" data-tags="live offline source">
        <div class="project-topline">
          <span class="project-number">02</span>
          <span class="badge live">FieldKit Training Lab</span>
        </div>
        <h3>Developer Interview Prep</h3>
        <p class="project-description">Searchable interview-question decks covering SQL, .NET, JavaScript, behavioral preparation, position analysis, bookmarks, local notes, backup/restore, and offline use.</p>
        <ul class="tech-list" aria-label="Technologies">
          <li>JavaScript</li><li>PWA</li><li>Service Worker</li><li>Local Storage</li><li>Responsive UI</li>
        </ul>
        <p class="project-note"><strong>FieldKit integration:</strong> Available as a Training Lab module with a full-screen standalone mode.</p>
        <div class="card-actions">
          <a class="button small primary" href="https://george-shepov.github.io/FieldKit/developer-interview-prep/" target="_blank" rel="noopener">Open in FieldKit ↗</a>
          <a class="button small secondary" href="https://github.com/george-shepov/developer-interview-prep" target="_blank" rel="noopener">View source ↗</a>
        </div>
      </article>

      <article class="project-card" data-tags="offline source">
        <div class="project-topline">
          <span class="project-number">03</span>
          <span class="badge source">Public source</span>
        </div>
        <h3>OneOf Listing Assistant</h3>
        <p class="project-description">Phone-first inventory intake and marketplace-listing workflow for organizing product photos, preparing structured listings, validating publishing readiness, and running controlled optimization experiments.</p>
        <ul class="tech-list" aria-label="Technologies">
          <li>Offline PWA</li><li>IndexedDB</li><li>ASP.NET Core .NET 8</li><li>eBay APIs</li>
        </ul>
        <p class="project-note"><strong>Security boundary:</strong> Marketplace credentials and publishing operations remain behind a separately configured protected API.</p>
        <div class="card-actions">
          <a class="button small secondary" href="https://github.com/george-shepov/OneOf-Listing-Assistant" target="_blank" rel="noopener">View source ↗</a>
        </div>
      </article>

      <article class="project-card" data-tags="source">
        <div class="project-topline">
          <span class="project-number">04</span>
          <span class="badge source">Production deployment in progress</span>
        </div>
        <h3>Professional Legal &amp; Tax Assistant</h3>
        <p class="project-description">FastAPI and Next.js workspace for document ingestion, retrieval-augmented search, case management, document workflows, multi-agent assistance, and controlled access.</p>
        <ul class="tech-list" aria-label="Technologies">
          <li>FastAPI</li><li>Next.js</li><li>PostgreSQL</li><li>MongoDB</li><li>Qdrant / RAG</li><li>Docker</li><li>Nginx</li>
        </ul>
        <p class="project-note"><strong>Deployment target:</strong> legal.giorgiy.org on the LODEX Ubuntu VPS. The public link will be restored after the production health checks pass.</p>
      </article>
    `;
  }

  const consultingExperience = document.querySelector('.timeline .experience-item:first-child .experience-body');
  if (consultingExperience) {
    consultingExperience.innerHTML = `
      <ul>
        <li>Founded LODEX Software in October 2000 and have delivered independent product, consulting, and client work intermittently alongside contract and employee engagements.</li>
        <li>Current work includes FieldKit, Developer Interview Prep, Professional Legal &amp; Tax Assistant, docket-data systems, OneOf Listing Assistant, and workflow automation.</li>
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
