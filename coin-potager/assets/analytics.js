/* Coin & Potager — Google Analytics 4 + consentement RGPD (Consent Mode v2)
   ID de mesure : G-YQP9N3K5ZP
   GA ne se déclenche QU'APRÈS acceptation de l'utilisateur. */
(function () {
  var GA_ID = "G-YQP9N3K5ZP";
  var STORE = "cp_consent"; // "granted" | "denied"

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;

  // Par défaut : tout refusé (conforme RGPD tant que pas de consentement)
  gtag('consent', 'default', {
    ad_storage: 'denied',
    analytics_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    wait_for_update: 500
  });

  function loadGA() {
    if (window.__gaLoaded) return;
    window.__gaLoaded = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    gtag('js', new Date());
    gtag('config', GA_ID, { anonymize_ip: true });
  }

  function grant() {
    gtag('consent', 'update', {
      ad_storage: 'granted', analytics_storage: 'granted',
      ad_user_data: 'granted', ad_personalization: 'granted'
    });
    loadGA();
  }

  function setChoice(val) {
    try { localStorage.setItem(STORE, val); } catch (e) {}
    var b = document.getElementById('cp-cookie');
    if (b) b.parentNode.removeChild(b);
    if (val === 'granted') grant();
  }

  function showBanner() {
    var css = '#cp-cookie{position:fixed;left:0;right:0;bottom:0;z-index:9999;background:#1f2d23;color:#f2f2ee;'
      + 'padding:16px 18px;font:15px/1.5 system-ui,sans-serif;display:flex;flex-wrap:wrap;align-items:center;'
      + 'gap:12px;justify-content:center;box-shadow:0 -2px 12px rgba(0,0,0,.25)}'
      + '#cp-cookie p{margin:0;flex:1 1 320px;max-width:680px}'
      + '#cp-cookie a{color:#bfe3c6;text-decoration:underline}'
      + '#cp-cookie button{cursor:pointer;border:0;border-radius:8px;padding:10px 18px;font-weight:600;font-size:14px}'
      + '#cp-cookie .acc{background:#5cab6e;color:#0e1a12}#cp-cookie .ref{background:transparent;color:#f2f2ee;border:1px solid #6b7d70}';
    var style = document.createElement('style'); style.textContent = css; document.head.appendChild(style);
    var bar = document.createElement('div');
    bar.id = 'cp-cookie';
    bar.innerHTML = '<p>Nous utilisons des cookies de mesure d’audience (Google Analytics) pour améliorer le site. '
      + 'Vous pouvez accepter ou refuser. <a href="/confidentialite/index.html">En savoir plus</a>.</p>'
      + '<button class="ref" id="cp-ref">Refuser</button>'
      + '<button class="acc" id="cp-acc">Accepter</button>';
    document.body.appendChild(bar);
    document.getElementById('cp-acc').onclick = function () { setChoice('granted'); };
    document.getElementById('cp-ref').onclick = function () { setChoice('denied'); };
  }

  function init() {
    var choice = null;
    try { choice = localStorage.getItem(STORE); } catch (e) {}
    if (choice === 'granted') { grant(); }
    else if (choice === 'denied') { /* rien */ }
    else { showBanner(); }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
