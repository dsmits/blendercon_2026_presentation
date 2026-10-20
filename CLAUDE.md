# Blendercon 2026 talk

Talk for the eScience Center Analytics and Visualization SIG (audience: research software engineers, ~45 min, goal: inspiration). It reports on what Blendercon 2026 showed about using Blender for science.

Built with reveal.js and Vite, styled with the eScience Center theme (from https://github.com/NLeSC/reveal-slides, which is old).

## Run

- `yarn dev` to preview with hot reload.
- `yarn build` to produce `dist/`. The build script also copies `slides.md` into `dist/`. Vite doesn't do that, and without it the built deck is blank.

## Where things live

- `slides.md` is the single source of the content. `===` starts a new section (a column), `---` a slide stacked under it. Speaker notes follow a `Note:` line.
- `custom.scss` holds presentation-specific styling (image pane, video, two-column Talks slide). The theme is in `nlesc-decorations.scss` and `nlesc-decorations.js`.
- Slide layouts are chosen with `<!-- .slide: data-state="..." -->`: `title`, `standard`, `two-pane`, `about`, `keepintouch`. In a `two-pane` slide, put an image in the blue pane with `<img class="pane-img" src="./images/...">`.
- `public/images` holds the media, referenced as `./images/...`. The Rijkswaterstaat video is not stored locally. It streams from rovid.nl (588 MB), so the deck needs internet on that slide.

## Structure of the talk

1. Opening: Blender, Blendercon, my question, the Sciviz Meetup sneak peek, and an outline.
2. Data storytelling with cinematic quality: stellar evolution, SciGraphs, the .blend collaboration struggle, Rijkswaterstaat code and Git (with video), the code as source of truth, nodebpy.
3. Blender as a simulation hub: procedural simulation environments (EM propagation), animals in motion.
4. Add-ons that borrow Blender's 3D tools: Gaussian splatting, SciExplorer (with Cella), accident visualization.
5. Making it accurate: scientific data on surfaces, accuracy tips (Nicole Feng).
6. Conclusion: why Blender, caveats, is it worth it, and a Talks slide with links to all 11 talks.

## Content notes

- Talk links all point to `conference.blender.org/2026/presentations/NNNN/`, not YouTube.
- Accident visualization is not a talk. It comes from a conversation with Holly at the conference, who does crime scene reconstruction. The slide says so.
- The Sionna RT description on the simulation slide is background knowledge, not from the talk, so check it.
- Z-Anatomy and Molecular Nodes were cut from the deck on purpose.
- Source notes: `~/Documents/second_brain/second_brain/Blendercon 2026.md`. Written report: `~/claude_space/blendercon-2026-blender-for-scientific-visualization.md`.
