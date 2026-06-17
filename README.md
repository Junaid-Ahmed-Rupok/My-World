<div align="center">

# 🌌 My World

### *The Personal Universe of Sarder Junaid Ahmed*

**ML Researcher · Data Scientist · PhD Applicant in Computational Science**

<br/>

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-View_Portfolio-00e5ff?style=for-the-badge&labelColor=050810)](https://junaid-ahmed-rupok.github.io/My-World/)
[![License](https://img.shields.io/badge/License-MIT-22C55E?style=for-the-badge&labelColor=050810)](LICENSE)
[![Made with](https://img.shields.io/badge/Built_with-HTML_·_CSS_·_JS-7c3aed?style=for-the-badge&labelColor=050810)]()

<br/>

> *A single-page portfolio showcasing research, projects, and publications —*
> *engineered with the same rigor I bring to my statistical frameworks.*

<br/>

[✨ Overview](#-overview) •
[🎨 Design](#-design-philosophy) •
[📁 Structure](#-repository-structure) •
[🧩 Sections](#-sections) •
[🚀 Quick Start](#-quick-start) •
[🛠️ Customize](#%EF%B8%8F-customization-guide) •
[👨‍💻 Author](#-author)

---

</div>

## ✨ Overview

**My World** is the personal portfolio of **Sarder Junaid Ahmed** — a single-page, dark-themed, glassmorphic website built to showcase machine learning research, data science projects, and academic publications in one cohesive narrative.

No frameworks, no build step — just clean, hand-crafted **HTML, CSS, and vanilla JavaScript**, designed to load instantly and look striking on any device.

<br/>

### 🎯 Why This Exists

| Problem | Solution |
|---|---|
| Research scattered across GitHub repos | One destination linking everything together |
| Plain-text CVs don't show *impact* | Visual metrics, badges, and live demo links |
| Static portfolios feel lifeless | Scroll reveals, particle backgrounds, glass effects |
| Recruiters skim, they don't read | Stats-first hero, scannable project cards |

---

## 🎨 Design Philosophy

<div align="center">

| Element | Choice | Why |
|:---:|:---:|:---|
| 🌑 **Palette** | Midnight `#050810` + Neon Cyan `#00e5ff` | Evokes precision, computation, depth |
| 🔤 **Display Font** | `Space Grotesk` | Geometric, technical, confident |
| ⌨️ **Mono Font** | `JetBrains Mono` | Code-native feel for labels & tags |
| 📝 **Body Font** | `Inter` | Maximum readability at small sizes |
| 🪟 **Surfaces** | Glassmorphism (blurred, translucent cards) | Modern, layered, premium |
| ✨ **Motion** | Scroll-reveal + particle canvas | Subtle life without distraction |

</div>

<br/>

```
   ╭─────────────────────────────────────────╮
   │   ⚡ Dark   →   Glass   →   Neon Glow    │
   │   Background   Surfaces    Accents       │
   ╰─────────────────────────────────────────╯
```

---

## 📁 Repository Structure

```
My-World/
│
├── 📄 index.html              # Single-page portfolio markup
│
├── 🎨 css/
│   └── style.css              # Dark theme, glassmorphism, animations
│
├── ⚙️  js/
│   └── main.js                # Scroll reveals, nav, particles, contact form
│
├── 🖼️  assets/
│   └── images/
│       ├── .gitkeep
│       └── profile.jpg        # ← add your headshot here
│
├── 📄 academic-cv.pdf          # ← add your academic CV here
├── 📄 industry-resume.pdf      # ← add your industry resume here
│
└── 📖 README.md                # You are here
```

---

## 🧩 Sections

<table>
<tr><td width="60px" align="center">🏠</td><td><b>Hero</b><br/><sub>Name, tagline, key career stats, primary CTAs</sub></td></tr>
<tr><td align="center">👤</td><td><b>About</b><br/><sub>Background, focus areas, current role, quick links</sub></td></tr>
<tr><td align="center">⚙️</td><td><b>Skills</b><br/><sub>6 categories — Languages, Statistics, ML, Deep Learning, Data Viz, Math</sub></td></tr>
<tr><td align="center">🚀</td><td><b>Projects</b><br/><sub>Featured work with live demos, GitHub links, and performance metrics</sub></td></tr>
<tr><td align="center">📚</td><td><b>Research</b><br/><sub>Publications — awarded, accepted, and under review</sub></td></tr>
<tr><td align="center">📄</td><td><b>CV</b><br/><sub>One-click download for Academic CV and Industry Resume</sub></td></tr>
<tr><td align="center">📬</td><td><b>Contact</b><br/><sub>Direct links + a working mailto contact form</sub></td></tr>
</table>

---

## 🚀 Quick Start

### View Locally

```bash
# Clone the repository
git clone https://github.com/Junaid-Ahmed-Rupok/My-World.git
cd My-World

# Open directly in your browser
open index.html        # macOS
start index.html        # Windows
xdg-open index.html     # Linux
```

No dependencies. No build tools. No `npm install`. Just open and go.

<br/>

### Deploy with GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set **Source** → `Deploy from branch` → `main` → `/ (root)`
4. Your site goes live at:
   ```
   https://junaid-ahmed-rupok.github.io/My-World/
   ```

---

## 🛠️ Customization Guide

<details>
<summary><b>📸 Add a profile photo</b></summary>

<br/>

1. Drop your image at `assets/images/profile.jpg`
2. Add this inside the `.about-text` block in `index.html`:

```html
<img src="assets/images/profile.jpg" alt="Sarder Junaid Ahmed" class="profile-photo" />
```

</details>

<details>
<summary><b>📄 Enable CV downloads</b></summary>

<br/>

1. Place your PDFs in the repo root
2. Update the `href="#"` placeholders on the CV buttons:

```html
<a href="academic-cv.pdf" download>Academic CV</a>
<a href="industry-resume.pdf" download>Industry Resume</a>
```

</details>

<details>
<summary><b>🎨 Change the accent color</b></summary>

<br/>

Open `css/style.css` and edit the root token:

```css
:root {
  --accent: #00e5ff;   /* swap for any hex you like */
}
```

Every glow, border, and highlight updates automatically.

</details>

<details>
<summary><b>➕ Add a new project card</b></summary>

<br/>

Copy this block inside `<section id="projects">` in `index.html`:

```html
<div class="project-card glass">
  <div class="project-tag">Category</div>
  <h3 class="project-title">Project Name</h3>
  <p class="project-sub">One-line subtitle</p>
  <p class="project-desc">Short description of what it does and why it matters.</p>
  <div class="project-tech"><span>Tech1</span><span>Tech2</span></div>
  <div class="project-metrics"><span class="metric">Key result</span></div>
  <div class="project-links">
    <a href="#" class="btn-sm btn-ghost">GitHub</a>
  </div>
</div>
```

</details>

---

## 🧪 Tech Stack

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

No frameworks · No dependencies · Pure performance

</div>

---

## 🗺️ Roadmap

- [x] Dark glassmorphic single-page layout
- [x] Scroll-reveal animations + particle hero background
- [x] Responsive mobile navigation
- [ ] Add profile photo + downloadable CVs
- [ ] Wire contact form to a backend (Formspree / EmailJS)
- [ ] Add dedicated case-study pages per project
- [ ] Dark/Light theme toggle

---

## 👨‍💻 Author

<div align="center">

**Sarder Junaid Ahmed**

🎓 B.Sc. in Computer Science & Engineering, RUET
🔬 ML Researcher · 🏆 Best Paper Award, APMEE 2025

[![GitHub](https://img.shields.io/badge/GitHub-Junaid--Ahmed--Rupok-181717?style=for-the-badge&logo=github)](https://github.com/Junaid-Ahmed-Rupok)
[![Email](https://img.shields.io/badge/Email-junaidahmedrupok%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:junaidahmedrupok@gmail.com)

</div>

---

## 📜 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for details.

---

<div align="center">

### ⭐ If this inspired your own portfolio, consider starring the repo

<br/>

*"Built with precision & purpose."*

**— Sarder Junaid Ahmed**

</div>
