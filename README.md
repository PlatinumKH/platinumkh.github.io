# Hakeem Kushoro — portfolio

Static HTML/CSS portfolio published through GitHub Pages at https://www.hkushoro.co.uk/.
There is no package installation or build step for the site.

## Editing

- `index.html`: page content, navigation, metadata and native expandable project details.
- `assets/css/portfolio.css`: current layout, colour, typography, accessibility and print styles.
- `assets/js/portfolio.js`: optional scrolling highlights that pause on hover or keyboard focus, with a static fallback for reduced motion or disabled JavaScript.
- The current page uses only `portfolio.css`, without a framework stylesheet or Sass compilation. Legacy template files in `assets/scss/` and `assets/css/devresume.css` are unused by the page.
- `CNAME`: custom domain configuration; keep this when deploying through GitHub Pages.

The portfolio uses custom HTML and CSS, system fonts, native expandable details and a small local script for the highlights, without external font or icon scripts.

## Local preview

From the repository root:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000`. Check desktop and mobile widths, keyboard navigation, expanded project details and social links. The page should remain readable with JavaScript disabled and when printed.

No project build, lint, type-check or test scripts existed in the original repository. The tests under the vendored Bootstrap folder belong to the upstream framework, not this page.

## Content notes

Content reflects the September 2026 career materials and subsequent corrections: Galatea Associates ended in September 2026, and technical presentations span 2020 to 2026. Performance figures retain their scope: 0.7 to 23 TPS is a team result; 97% is an API response-size reduction. The headline describes professional positioning, while the experience section preserves the formal job titles. The website does not publish a CV or personal email address.

Keep client names and proprietary implementation material private. Professional project summaries do not imply that source code is public. Historical projects are described without relying on abandoned live demos.

## Deployment and attribution

Commit and push through the repository’s existing GitHub Pages publishing workflow. The site remains compatible with static hosting and GitHub Pages; `_config.yml` contains only site metadata and an exclusion for this README.

The current page no longer loads or depends on DevResume. The original template files and `license.txt` remain unchanged in the repository as legacy source material.
