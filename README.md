# Shastika L — Student Portfolio Website

A responsive, multi-page personal portfolio built with **HTML, CSS, and vanilla JavaScript**, following the Student Portfolio Website Project brief. It does not use a frontend framework, CSS framework, database, or backend service.

## Pages

- `index.html` — home / introduction and featured projects
- `about.html` — education, interests, and introduction
- `skills.html` — skills and learning areas
- `projects.html` — three projects and category filters
- `contact.html` — email details and a client-side validated contact form

## Folder structure

```text
shastika-portfolio/
├── index.html
├── about.html
├── skills.html
├── projects.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── profile-illustration.svg
│   ├── complaint-system.svg
│   ├── route-wise.svg
│   └── book-system.svg
└── README.md
```

## Features

- Responsive navigation with a mobile menu
- Light/dark theme toggle (remembers the preference where browser storage is available)
- Project category filters on the Projects page
- Contact form required-field validation and email-app handoff
- Back-to-top button
- Keyboard focus indicators, semantic page structure, and image alternative text
- Current year in the footer

### Contact form limitation

This project is a static website. The form validates its fields and prepares a `mailto:` link for the visitor's email app. It does **not** send, save, or store a message on its own. No backend or third-party form service is configured.

## Preview locally

You can open `index.html` directly in a browser to preview the pages. For a more server-like local preview, open this folder in VS Code and use a local static preview extension. **A local preview is not sufficient for assignment submission**; publish the site and submit its live URL.

## Publish to a public GitHub repository and GitHub Pages

1. Sign in to GitHub and create a **new public repository**, for example `shastika-portfolio`.
2. Extract this project folder. Open the extracted folder in a terminal.
3. Run the following commands, replacing the repository URL with your own URL:

   ```bash
   git init
   git add .
   git commit -m "Build student portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/shastika-portfolio.git
   git push -u origin main
   ```

4. On GitHub, open the repository and select **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Select branch `main` and folder `/ (root)`, then save.
7. Wait for GitHub Pages to finish publishing. The live URL will normally look like `https://YOUR-USERNAME.github.io/shastika-portfolio/`.
8. Open the published URL on a laptop and phone. Test all navigation links, theme toggle, project filters, and the contact form. If the page is not available immediately, check the Pages deployment status and try again after it completes.
9. Submit both the public repository URL and the working live URL to your teacher.

Because the project has not been connected to your GitHub account, no repository or live URL has been created by this package. You must complete the publishing steps using your account.

## Before submitting

- Replace the illustration with your own photo if you later choose to provide one.
- Replace the sample project illustrations with screenshots of your actual projects, if available.
- Add GitHub/demo links only when those URLs work.
- Check that your displayed details are correct and that you are comfortable sharing your email publicly.
- Verify the public repository and live site from a signed-out/incognito browser window.
