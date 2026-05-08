# Texas State University Space Lab

Static website for Space Lab at Texas State University. Hosted on GitHub Pages at [txstspacelab.org](https://txstspacelab.org).

## Stack

Plain HTML, CSS, and a small amount of vanilla JavaScript. No build step. Hosted on GitHub Pages with a custom domain.

- **Type**: [Fraunces](https://fonts.google.com/specimen/Fraunces) (display) + [Inter](https://fonts.google.com/specimen/Inter) (UI/body), loaded from Google Fonts
- **Color**: warm off-white (`#fafaf7`) editorial palette with restrained TXST maroon (`#501214`) accent
- **Layout**: responsive, mobile-first; sticky header; CSS Grid sections

## Site structure

```
/                       index.html         Home
/about/                 About Us
/missions/              Missions index
  /missions/pleiades-maia/
  /missions/bobcat-orbiter/
  /missions/past/                         Past missions (Helios-I, Icarus, etc.)
/team/                  People
/news/                  News index
  /news/<slug>/                            Individual posts
/students/              For Students
/contact/               Contact
```

## Local development

No tooling required. Just open `index.html` in a browser, or run a local static server for cleaner relative paths:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Adding a news post

1. Create `news/<slug>/index.html` from the news template.
2. Add a new `<li class="news-item">` entry to the top of the news list on `index.html` and on `news/index.html`.
3. Commit and push — GitHub Pages will deploy on push to `main`.

## Deployment

Pushed to `main` → GitHub Pages serves from the repo root. Custom domain `txstspacelab.org` configured via `CNAME` file at the repo root.

## Credits

Maintained by Space Lab, Department of Physics, Texas State University. Site by Dr. Blagoy Rangelov with Claude.
