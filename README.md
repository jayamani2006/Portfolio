# JAYASUBRAMANI S — Engineering Analytics Dashboard (Phase 1)

A single-page, animated resume/portfolio dashboard. Pure HTML/CSS/JS — no build step, no framework, no dependencies to install.

## File structure
```
js-portfolio/
├── index.html              ← main entry file (this is what Render serves)
├── render.yaml              ← Render static site config
├── run.bat                  ← double-click to test locally on Windows
├── run.sh                   ← run locally on Mac/Linux
├── assets/
│   ├── css/style.css        ← all styling (dark navy/cyan theme)
│   ├── js/main.js           ← all interactivity (typing fx, counters, radar chart, filters)
│   └── data/projects.js     ← EDIT THIS to update your projects/timeline/awards/roles
```

## Test it locally
**Windows:** double-click `run.bat` (requires Python installed), then open http://localhost:8000
**Mac/Linux:** run `./run.sh` in terminal, then open http://localhost:8000

You can also just double-click `index.html` directly in a browser — it'll mostly work, but the canvas/font loading is more reliable through a local server, so prefer `run.bat`/`run.sh`.

## Editing content
Open `assets/data/projects.js`. Everything (projects, awards, timeline, rotating role titles) is in plain JS arrays/objects — no need to touch HTML or CSS to update your resume content.

To add a resume PDF download: drop your file at `assets/JAYASUBRAMANI_RESUME.pdf` and update the `href` on the `#resume-btn` link in `index.html`.

## Deploy to Render
1. Push this folder to a GitHub repo.
2. On Render: **New → Static Site**.
3. Connect the repo.
4. Build command: leave **blank**.
5. Publish directory: `.` (root)
6. Deploy. Render will auto-detect `render.yaml` if present.

That's it — no server, no runtime needed, since this is a static site.

## What's built (Phase 1)
- Animated hero with typing role rotation + circuit-node canvas background
- Animated stat counters
- Skills radar chart (canvas, no chart library) + progress bars
- Build-log timeline
- Filterable project grid (12 projects from your resume)
- Awards grid
- Contact cards
- Fully responsive, keyboard-focus visible, respects `prefers-reduced-motion`

## Next phases (not yet built)
- Certificate grid with PDF preview/search
- Tech-distribution pie chart + skills heatmap
- 3D tilt on project cards
- GitHub contributions widget
- AI chatbot trained on your resume
# Portfolio
