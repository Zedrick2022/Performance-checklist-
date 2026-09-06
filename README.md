# Zedrick Salupito — ICP & UVP Landing Page

A responsive, animated one-page portfolio and lead-generation website for **Zedrick Salupito — Data Analysis & Visualisation**.

## What is included

- `index.html` — page structure and content
- `styles.css` — full responsive design and animations
- `script.js` — navigation, reveal animations, certificate viewer, feature hub, EmailJS submission and checklist gating
- `assets/images/zedrick-suit-transparent.png` — professional portrait used in the hero and About section
- `assets/images/zs-logo.png` — animated ZS logo
- `assets/images/` — portfolio charts and data visualisations
- `assets/certificates/` — certificate preview images (view-only interface)
- `assets/videos/` — portfolio videos
- `assets/resources/campaign-performance-reporting-checklist.pdf` — gated checklist file

## EmailJS configuration already included

The project is configured with:

- Public key: `adJKCbEeD3htCpqle`
- Service ID: `service_ztrinq5`
- Client template: `template_u3420ql`
- Owner template: `template_e09v302`

The owner template receives these variables:

```text
{{name}}
{{email}}
{{agency}}
{{role}}
{{campaign_type}}
{{client_outcome}}
{{reporting_process}}
{{reporting_challenge}}
{{message}}
```

The checklist download is hidden until both EmailJS sends succeed.

> Important: this is client-side gating, not strong access control. A technically experienced visitor could still discover a static file path in the deployed site. Strong access control requires a backend or protected storage.

## Certificate behaviour

Certificate images are displayed in a modal viewer only. There are no certificate download buttons in the interface. Browser-level copying cannot be completely prevented on a public website.

## Logo animation

The ZS logo uses combined:
- zoom in / zoom out
- clockwise rotation
- anti-clockwise rotation
- floating/orbit motion

The page also includes scroll reveals, flip effects, floating cards, glow animations, animated hover effects and reduced-motion accessibility support.

## Social and contact links

- LinkedIn: https://na.linkedin.com/in/zedrick-salupito-346599208
- GitHub: https://github.com/Zedrick2022
- Instagram: https://www.instagram.com/zedrick368?stkn=MTcxbWM0NWh6Z204Nw==
- Email: zedricksalupito@gmail.com
- Phone / WhatsApp: +264 81 292 4221

## Publish on GitHub Pages

1. Extract this ZIP.
2. Create a new GitHub repository, for example `icp-uvp-landing-page`.
3. Upload **all files and folders** from this project. Keep the folder structure unchanged.
4. Commit the files to the `main` branch.
5. Open the repository **Settings**.
6. Go to **Pages**.
7. Under **Build and deployment**, choose **Deploy from a branch**.
8. Select `main` and `/ (root)`.
9. Save.
10. Wait for GitHub Pages to publish your site.

Your page URL will normally look like:

```text
https://YOUR-GITHUB-USERNAME.github.io/REPOSITORY-NAME/
```

## Test before publishing

For the simplest test, open `index.html` in a browser. For a more realistic local test, serve the folder using a local web server.

### Python

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

### Node.js

```bash
npx serve .
```

## EmailJS test checklist

Before sharing the public page:

1. Submit the form with a real test email address.
2. Confirm the owner notification arrives.
3. Confirm the client email arrives.
4. Confirm the download button appears only after successful sending.
5. Confirm the checklist file downloads.
6. If either email fails, check your EmailJS dashboard, template variable names, quota and service connection.

## Main page positioning

**ICP:** Small and mid-sized Creative & Digital Marketing Agencies, especially in Namibia and Southern Africa, that need clearer ways to turn campaign activity into client-ready proof of business outcomes.

**UVP:** Zedrick helps small creative agencies attract bigger clients by turning creative work into measurable business results through case-study positioning, data-backed content strategy and video-led storytelling.

## Notes

- No traffic/analytics tracking is included, as requested.
- Videos make the ZIP larger, but they are included so the project can be uploaded as one complete package.
- Keep file and folder names unchanged unless you also update their paths inside `index.html`.
