// ===== Coin & Potager — header + footer partagés =====
// "base" gère les chemins relatifs selon la profondeur de la page.
(function () {
  const base = document.currentScript.getAttribute('data-base') || '';

  // Icônes SVG (Lucide, stroke 2)
  const ico = {
    leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>'
  };

  const links = [
    ['guides/index.html', 'Tous les guides'],
    ['jardin/index.html', 'Jardin'],
    ['exterieur/index.html', 'Extérieur'],
    ['bricolage/index.html', 'Bricolage'],
    ['a-propos/index.html', 'À propos'],
    ['contact/index.html', 'Contact'],
  ];

  // Lien actif : compare le chemin courant
  const path = location.pathname;
  const isActive = (href) => {
    const seg = href.split('/')[0];
    return seg && path.includes('/' + seg + '/');
  };

  const navItems = links.map(([href, label]) =>
    `<li><a href="${base}${href}"${isActive(href) ? ' aria-current="page"' : ''}>${label}</a></li>`
  ).join('');

  const header = `
  <div class="topbar">${ico.leaf} Conseils testés &amp; comparatifs honnêtes — certains liens sont affiliés, sans surcoût pour vous</div>
  <header>
    <div class="nav">
      <a href="${base}index.html" class="logo"><span class="leaf"></span>Coin&nbsp;&amp;&nbsp;Potager</a>
      <button class="nav-toggle" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="main-nav">${ico.menu}</button>
      <nav aria-label="Navigation principale">
        <ul id="main-nav">${navItems}</ul>
      </nav>
    </div>
    <div class="nav-scrim" hidden></div>
  </header>`;

  const year = new Date().getFullYear();

  const footer = `
  <footer>
    <div class="foot-in">
      <div>
        <a href="${base}index.html" class="logo"><span class="leaf"></span>Coin&nbsp;&amp;&nbsp;Potager</a>
        <p class="foot-text">Le site qui vous aide à choisir le bon matériel pour votre jardin et vos projets extérieurs.</p>
      </div>
      <div class="foot-links">
        <div>
          <h4>Thèmes</h4>
          <ul>
            <li><a href="${base}guides/index.html">Tous les guides</a></li>
            <li><a href="${base}jardin/index.html">Jardin</a></li>
            <li><a href="${base}exterieur/index.html">Extérieur</a></li>
            <li><a href="${base}bricolage/index.html">Bricolage</a></li>
          </ul>
        </div>
        <div>
          <h4>Le site</h4>
          <ul>
            <li><a href="${base}a-propos/index.html">Qui sommes-nous</a></li>
            <li><a href="${base}contact/index.html">Contact</a></li>
            <li><a href="${base}mentions-legales/index.html">Mentions légales</a></li>
            <li><a href="${base}confidentialite/index.html">Confidentialité</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="disclaimer">
      Coin &amp; Potager participe à des programmes d'affiliation (Amazon Partenaires, ManoMano, etc.). Lorsque vous achetez via certains liens, le site perçoit une commission sans surcoût pour vous. Cela finance les tests et garde le site gratuit. Les recommandations restent indépendantes.
    </div>
    <div class="copy">© ${year} Coin &amp; Potager — Tous droits réservés.</div>
  </footer>`;

  const h = document.getElementById('site-header');
  const f = document.getElementById('site-footer');
  if (h) h.innerHTML = header;
  if (f) f.innerHTML = footer;

  // ----- Menu mobile -----
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('main-nav');
  const scrim = document.querySelector('.nav-scrim');
  if (toggle && menu) {
    const setOpen = (open) => {
      menu.classList.toggle('open', open);
      if (scrim) { scrim.classList.toggle('open', open); scrim.hidden = !open; }
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
      toggle.innerHTML = open ? ico.close : ico.menu;
      document.body.style.overflow = open ? 'hidden' : '';
    };
    toggle.addEventListener('click', () => setOpen(!menu.classList.contains('open')));
    if (scrim) scrim.addEventListener('click', () => setOpen(false));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(false)));
  }
})();
