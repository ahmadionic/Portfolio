<div align="center">

# Ahmad Shahbaz — DevOps Portfolio

A premium, dark-themed developer portfolio built to showcase real DevOps
work — containerization, orchestration, CI/CD, and observability — through an
interactive 3D "cluster" visualization instead of generic stock animations.

**[Live Demo](#)** · **[Report an Issue](#)**

</div>

---

## ✨ Overview

This portfolio is designed around a single idea: the hero visual should *be*
the subject matter, not decorate it. The signature 3D element is an animated
Kubernetes-style cluster — a control-plane core with orbiting pod nodes — built
from scratch in React Three Fiber rather than a generic imported model.

The rest of the site follows the same logic: section labels read like shell
commands (`kubectl get skills`, `git log --oneline --graph`), the color system
maps to real infra status signals (mint = healthy, amber = pending, coral =
error), and every project, skill, and timeline entry reflects actual work.

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 19](https://react.dev) + [Vite](https://vitejs.dev) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) (CSS-first `@theme` tokens) |
| 3D / Graphics | [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + [drei](https://github.com/pmndrs/drei) + [Three.js](https://threejs.org) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [react-icons](https://react-icons.github.io/react-icons/) (Simple Icons + Font Awesome 6 sets) |
| Contact | `mailto:` fallback (zero-config) — optional [EmailJS](https://www.emailjs.com/) upgrade path |
| Linting | [oxlint](https://oxc.rs/docs/guide/usage/linter.html) |
| Deployment | Netlify / Vercel (static build) |

## 🎨 Design System

- **Theme**: dark background with glassmorphism cards (`backdrop-blur` + translucent surfaces)
- **Accent colors**: mint green (`#00e5a0`) for primary/status-healthy, blueprint blue (`#4c8dff`) for architecture/links, amber (`#ffb454`) for pending states, coral (`#ff6b6b`) for errors — reserved, not decorative
- **Typography**: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (display), [Inter](https://fonts.google.com/specimen/Inter) (body), [JetBrains Mono](https://www.jetbrains.com/lp/mono/) (terminal/labels)
- **Motion**: scroll-triggered reveals, a page-load terminal typing sequence, and an always-on orbiting cluster in the hero — `prefers-reduced-motion` respected throughout

## 📁 Project Structure

```
ahmad-portfolio/
├── public/
│   ├── images/ahmad.png        # profile photo (falls back to initials if missing)
│   └── Ahmad_Shahbaz_Resume.pdf
├── src/
│   ├── components/
│   │   ├── ClusterScene.jsx    # 3D signature element (R3F)
│   │   ├── ProfileCard.jsx     # glass avatar with neon glow + initials fallback
│   │   ├── FloatingIcons.jsx   # orbiting DevOps tool icons
│   │   ├── TypedTerminal.jsx   # typing-animation terminal
│   │   ├── ErrorBoundary.jsx   # catches crashes, shows a readable error instead of a blank page
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Stack.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data.js                 # all content lives here — name, links, stack, projects, experience
│   ├── index.css               # Tailwind v4 theme tokens + base styles
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## 🚀 Getting Started

```bash
# install dependencies
npm install

# start the dev server → http://localhost:5173
npm run dev

# type-check / lint
npx oxlint src/

# production build → dist/
npm run build

# preview the production build locally
npm run preview
```

## ✏️ Editing Content

All copy — name, tagline, social links, skills, project descriptions,
experience timeline — lives in **`src/data.js`**. You shouldn't need to touch
component files to update text.

To swap the profile photo, drop a square image (≈500×500px) at
`public/images/ahmad.png`. If it's missing, the profile card gracefully falls
back to initials on a gradient background instead of breaking.

## 📬 Contact Form

The contact form works out of the box via a `mailto:` link (opens the
visitor's email client, pre-filled) — no API keys required. To send messages
directly from the page instead:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Grab your Service ID, Template ID, and Public Key
3. In `src/components/Contact.jsx`, replace the `mailto:` call with
   `emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)`
   (the `@emailjs/browser` package is already installed)

## 🌐 Deployment

Works out of the box on both:

**Netlify**
- Build command: `npm run build`
- Publish directory: `dist`

**Vercel**
- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

## 🛡️ Resilience

The app is wrapped in a top-level `ErrorBoundary`. If any component throws at
runtime, the site shows a readable error message instead of going blank, and
logs the full stack trace to the browser console for fast debugging.

## 📄 License

Personal portfolio — feel free to reference the structure, but please don't
republish the content as your own.

---

<div align="center">

Built by **Ahmad Shahbaz** — [GitHub](https://github.com/ahmadionic) · [LinkedIn](https://www.linkedin.com/in/ahmad-shahbaz-dev/) · [Fiverr](https://www.fiverr.com/s/Ker9RoY) · [Upwork](https://www.upwork.com/freelancers/~011b1a22f0dd240ec5?mp_source=share)

</div>