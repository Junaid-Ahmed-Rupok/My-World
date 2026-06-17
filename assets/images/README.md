# My World — Sarder Junaid Ahmed's Portfolio

Personal portfolio website of **Sarder Junaid Ahmed** — ML Researcher, Data Scientist, and PhD Applicant in Computational Science.

## Structure

```
My-World/
├── css/
│   └── style.css          # Dark futuristic theme, glassmorphism
├── js/
│   └── main.js            # Scroll effects, nav, particles, contact form
├── assets/
│   └── images/            # Profile photo and project screenshots
├── index.html             # Single-page portfolio
└── README.md
```

## Sections

1. **Hero** — Name, tagline, key stats, CTAs
2. **About** — Background, focus areas, links
3. **Skills** — Technical arsenal across 6 categories
4. **Projects** — 6 featured projects with metrics and links
5. **Research** — 5 publications (1 awarded, 2 accepted, 2 under review)
6. **CV** — Download links for Academic CV and Industry Resume
7. **Contact** — Links + contact form (mailto)

## Projects Featured

- StatsPro — AI-powered statistical analysis platform
- Continuum AI — Persistent memory RAG chatbot
- FAI — Feature-Wise Adaptive Imputation
- Crime Classification — Fairness-aware ML for Dhaka
- Environmental Livability — Bootstrap SHAP + XGBoost
- IMDb Sentiment Analysis — DistilBERT + Classical ML

## To Add Your Photo

Place your profile image at `assets/images/profile.jpg` and add this to the About section in `index.html`:

```html
<img src="assets/images/profile.jpg" alt="Sarder Junaid Ahmed" class="profile-photo" />
```

## To Enable CV Downloads

Replace the `href="#"` on the CV buttons in `index.html` with the actual file paths:

```html
<a href="assets/cv-academic.pdf" ...>Academic CV</a>
<a href="assets/cv-industry.pdf" ...>Industry Resume</a>
```

## Live Deployment

Push to GitHub and enable **GitHub Pages** from `Settings → Pages → Deploy from branch: main`.

---

Built with precision & purpose by Sarder Junaid Ahmed.
