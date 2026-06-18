# 🚀 Déployer Coin & Potager sur Cloudflare Pages

Guide pas à pas pour débutant. Compte sur **20-30 minutes** la première fois.

---

## Ce que tu as entre les mains

Un site **statique** complet et fonctionnel :
- Page d'accueil, 3 pages catégories (Jardin / Extérieur / Bricolage)
- 1 article-modèle complet (comparatif sécateurs) avec encarts affiliés
- Pages légales obligatoires (mentions légales, confidentialité)
- Pages À propos et Contact
- Header et pied de page partagés, design responsive (mobile)

Tout est en HTML/CSS/JS pur : **aucune dépendance, rien à installer.** Ça se déploie tel quel.

---

## Méthode 1 — La plus simple : glisser-déposer (sans GitHub)

Idéale pour mettre en ligne **tout de suite** et juger le résultat.

1. Crée un compte gratuit sur **[dash.cloudflare.com](https://dash.cloudflare.com)**
2. Dans le menu de gauche : **Workers & Pages** → **Create** → onglet **Pages** → **Upload assets**
3. Donne un nom à ton projet (ex. `coin-potager`)
4. **Glisse-dépose le dossier `coin-potager` entier** dans la zone d'upload
5. Clique **Deploy site**
6. En ~30 secondes, ton site est en ligne sur une adresse du type `coin-potager.pages.dev` 🎉

**Limite de cette méthode :** pour modifier le site, tu ré-uploades le dossier à chaque fois. Pratique pour démarrer, moins pour publier souvent.

---

## Méthode 2 — Recommandée sur la durée : via GitHub

Permet de mettre à jour le site automatiquement à chaque modification. C'est aussi la base pour brancher une interface visuelle plus tard (voir plus bas).

1. Crée un compte sur **[github.com](https://github.com)** (gratuit)
2. Crée un nouveau dépôt (**New repository**), nomme-le `coin-potager`, laisse-le public ou privé
3. Téléverse les fichiers du site dans ce dépôt :
   - Le plus simple sans ligne de commande : sur la page du dépôt, **Add file → Upload files**, puis glisse tout le contenu du dossier `coin-potager`.
4. Sur Cloudflare : **Workers & Pages → Create → Pages → Connect to Git**
5. Autorise Cloudflare à accéder à ton GitHub, sélectionne le dépôt `coin-potager`
6. Réglages de build : **laisse tout vide** (c'est un site statique, pas de commande de build). Output directory : `/` (la racine).
7. **Save and Deploy**

Désormais, **chaque modification poussée sur GitHub met le site à jour automatiquement.**

---

## Brancher ton propre nom de domaine

Une fois le site en ligne sur `.pages.dev` :

1. Achète ton domaine (ex. `coin-potager.fr`) — chez Cloudflare directement (Registrar) c'est le plus simple, ou ailleurs (OVH, Gandi).
2. Dans ton projet Pages : onglet **Custom domains → Set up a custom domain**
3. Suis les instructions (si le domaine est chez Cloudflare, c'est quasi automatique).

---

## Avant la mise en ligne « pour de vrai » — checklist

- [ ] Remplacer **toutes les infos dans Mentions légales** (nom, SIRET, adresse, email) — obligatoire en France
- [ ] Personnaliser la page **Qui sommes-nous** avec ta vraie histoire
- [ ] Relier le **formulaire de contact** à un service gratuit (Formspree ou Web3Forms) — un site statique ne peut pas envoyer d'emails seul
- [ ] Relier le **formulaire newsletter** à un outil (Brevo, MailerLite — gratuits au début)
- [ ] Remplacer les **liens affiliés `#`** dans l'article par tes vrais liens une fois tes programmes validés
- [ ] Vérifier la bannière cookies si tu ajoutes des outils de mesure d'audience (RGPD)

---

## Et l'interface visuelle pour écrire les articles ?

Le point que tu voulais : pouvoir publier facilement, sans coder.

Sur ce site statique, deux options selon ton envie :

**Option simple (recommandée pour démarrer) :** tu dupliques le fichier `articles/secateur.html`, tu remplaces le texte, tu changes le nom du fichier. C'est du copier-coller de texte, pas vraiment du code. Pour 1 article par semaine, c'est tout à fait gérable.

**Option « vraie interface visuelle » :** on branche un CMS gratuit comme **Decap CMS** ou **Pages CMS** sur ton dépôt GitHub. Tu écris alors tes articles dans une interface web propre (titre, paragraphes, images), et le site se met à jour tout seul. C'est un peu de configuration au départ, mais ensuite c'est aussi confortable que WordPress.

> 💡 Mon conseil : déploie d'abord le site avec la **Méthode 1** pour voir le résultat en vrai. Si le rendu te plaît, on passe à la Méthode 2 + un CMS visuel. Si tu trouves ça trop technique, WordPress reste une option parfaitement valable — dis-le moi et je t'oriente.

---

## Récap des coûts

| Poste | Coût |
|---|---|
| Hébergement Cloudflare Pages | **0 € / mois** |
| Compte GitHub | **0 €** |
| CMS visuel (Decap/Pages CMS) | **0 €** |
| Nom de domaine `.fr` | ~8-12 € / an |
| Newsletter (début) | **0 €** |

**Total pour démarrer : le prix du nom de domaine, soit environ 10 € par an.**
