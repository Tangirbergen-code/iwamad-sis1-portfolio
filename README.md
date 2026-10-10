# iwamad-sis1-portfolio

# Personal Portfolio Website (SIS Assignment 1)

## Live Demo & Repository
- **Live Site (GitHub Pages):** https://tangirbergen-code.github.io/iwamad-sis1-portfolio/
- **Repository:** https://github.com/Tangirbergen-code/iwamad-sis1-portfolio
## About The Project
This website is a responsive personal portfolio designed and developed using foundational HTML5, CSS3, and vanilla JavaScript without external frameworks. It features an interactive layout with three primary sections (About Me, Projects, Contact), a global dark/light theme toggle, and a custom JavaScript form validation system. The interface is optimized for both mobile (375px) and desktop (1200px) viewports with accessible navigation and semantic structure.

## Design Decisions
1. **Layout Strategy & Responsiveness:** I chose a single-column layout for mobile devices (375px) to ensure clean readability and structured hierarchy. For desktop screens (1200px), the project section rearranges into a 3-column grid to maximize screen real estate and improve comparison visibility.
2. **Color Palette & Theme System:** I picked a refined purple color palette (`#7c3aed`) as the primary accent to give the portfolio a professional and modern luxury identity. CSS custom variables (`:root` and `html[data-theme="dark"]`) were used to allow smooth contrast transitions across light and dark modes.
3. **Form Validation Logic:** To improve user experience and accessibility, I replaced default browser tooltips with custom JavaScript validation that clearly distinguishes between empty field errors and malformed email inputs in real-time without reloading the page.