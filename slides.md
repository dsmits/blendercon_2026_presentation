<!-- .slide: data-state="title" -->

# Blendercon 2026

Analytics and Visualization SIG

<br>

Djura Smits | 20 October 2026


===

<!-- .slide: data-state="standard" -->

## Blender

Open source software for:

- 3D modeling/sculpting
- Animation
- Video editing
- Scripting in Python
- Thriving community of plugin developers

---

<!-- .slide: data-state="standard" -->

## Blendercon

- Heart of Amsterdam
- 3 days
- 700+ attendees
- 126 speakers

---

<!-- .slide: data-state="standard" -->

## My question

- What kind of scientific applications does Blender have?
- What are the pros (and cons) of using Blender for scientific visualization?
- Is Blender worth recommending despite the steep learning curve?

---

<!-- .slide: data-state="two-pane" -->

## Spoiler: yes, blender is worth it

There are a lot of excited scientific Blender users out there!

<img class="pane-img fill" src="./images/sciviz_meetup.jpg">

---

<!-- .slide: data-state="standard" -->

## Ways Blender is used for science

1. Data storytelling with cinematic quality
2. Blender as a simulation hub
3. Add-ons that borrow Blender's 3D tools
4. Making it accurate

===

<!-- .slide: data-state="title" -->

# 1. Data storytelling with cinematic quality

---

<!-- .slide: data-state="two-pane" -->

## Stellar evolution

- TULIPS-3D: MESA computes the physics
- Science data is converted to textures
- Scrub through a star's interior over time
- Mass transfer in binary systems, made visible

<img class="pane-img" src="./images/PXL_20260924_081642114.jpg">

Note:
Eva Laplace and Ben de Vries (SURF / UvA / KU Leuven). Stellar evolution is usually shown as tracks on a Hertzsprung-Russell diagram: accurate but abstract. TULIPS-3D is a Blender add-on, successor to the 2D TULIPS visualisation, still under construction and open source. Their claim: the first visualisation where you can intuitively see mass transfer happen in binary star systems.

---

<!-- .slide: data-state="two-pane" -->

## SciGraphs

- Gephi, Cytoscape and Graphia animate the data
- Animation as a craft is missing: curves, ease, camera, light
- SciGraphs: graph analysis + filmmaking, built on Geometry Nodes

<img class="pane-img" src="./images/PXL_20260924_085619771.jpg">

Note:
José Marín (CoMMLab, Universitat de València / SciBlend). Quote from the talk: "Graph animation lives in tools built for analysis. Film-making lives in tools that have never heard of a graph." Layouts, centrality, communities, geospatial graphs. Open source, installable from Blender Extensions (github.com/SciBlend/SciGraphs).

---

<!-- .slide: data-state="standard" -->

## The struggle: collaborating in .blend files

- Rijkswaterstaat made a film about the Dutch rivers
- Contributions from many teams: tides, wind, an accurate GIS map, camera work
- Everyone working directly in one .blend file got chaotic

Note:
Rijkswaterstaat (Neele Dijkstra, Torben Hanegraaf, Jop van Roosmalen, with Casper Vissers and Blooming Data). A sea-tide animation, a 2D wind animation, an accurate GIS map and the camera work all came from different people. Having that many collaborators work directly in Blender quickly became chaotic.

---

<!-- .slide: data-state="standard" -->

## Code-based collaboration with git

<video class="video" src="https://www.rovid.nl/ienw/rws/2026/ienw-rws-20260729-id1s1rkmwu-web.mp4" controls muted preload="metadata"></video>

- Their fix: back to code and Git

[rijkswaterstaat.nl/water/waterbeheer](https://www.rijkswaterstaat.nl/water/waterbeheer)

Note:
Play the film here. The video was made entirely with this code-and-Git workflow.

---

<!-- .slide: data-state="two-pane" -->

## The code is the source of truth

- The whole scene is written in Python, including adding objects
- Blender runs from that code
- The .blend file is never saved
- Data and scripts live together in Git

<img class="pane-img" src="./images/PXL_20260923_133719619.jpg">

Note:
Collaboration now works like normal software development. The scene is rebuilt from data and code at any time, which also makes it reproducible. This is the strongest argument for RSEs: it fits tooling we already use.

---

<!-- .slide: data-state="standard" -->

## Node trees as code: nodebpy

- Node trees are nicer to read than the equivalent Python
- Python for the same scene is very verbose
- nodebpy converts both ways (Brady Johnston)

Note:
Brady Johnston, who created Molecular Nodes, presented nodebpy in "Build Your Node Trees With Code". Node trees built in the GUI become human-readable .py files; Python written by hand becomes a neatly arranged node tree. Node trees can then be versioned, diffed and reviewed in Git while artists keep working visually. This answers the verbosity problem raised by the Rijkswaterstaat team.

===

<!-- .slide: data-state="title" -->

# 2. Blender as a simulation hub

---

<!-- .slide: data-state="two-pane" -->

## Procedural simulation environments

- Procedural scene: Geometry Nodes and parameters
- External solver: Sionna RT (EM propagation)
- Python API drives the solver and reads results back
- Visualize and render in Blender

<img class="pane-img" src="./images/pasted_20261013112321.png">

Note:
"Building Procedural Simulation Environments" by Felipe Oliveira Ribas. Ray-tracing simulations are getting faster, but the 3D environments are still often static, simplified and prepared by hand for one scenario. Blender becomes a procedural scene-generation layer: Geometry Nodes and Python create controlled scene variations, expose geometric assumptions, and generate different levels of detail for different computational budgets. EM propagation is one example (procedural greenhouses, plants at any growth stage, heatmap shown in the 3D scene). Main point: Blender can connect different simulations into one tool. (The Sionna RT description is background knowledge, not from the talk: check it.)

---

<!-- .slide: data-state="two-pane" -->

## Animals in motion

- Neuromechanical modelling: full CT/MRI scans of animals
- Organs segmented, so muscles can be identified
- Rigged in Blender, then simulated walking

<img class="pane-img" src="./images/pasted_20260930094946.png">

Note:
Shravan Tata Ramalingasetty (Janelia Research Campus). Example: a mouse walking over uneven terrain, driven by a model of its spinal circuitry. Open source as FARMS (Framework for Animal and Robot Modeling and Simulation), with a custom Blender add-on. UPBGE, a fork that keeps the Blender Game Engine alive, also came up for real-time simulation.

===

<!-- .slide: data-state="title" -->

# 3. Add-ons that borrow Blender's 3D tools

---

<!-- .slide: data-state="standard" -->

## Why build an add-on?

- Blender has powerful 3D manipulation and navigation
- These are difficult to implement in a custom tool
- Scientists add their own data types and workflows on top

Note:
A recurring pattern: scientists build their own add-on so Blender understands their data, instead of building a 3D viewer from scratch.

---

<!-- .slide: data-state="two-pane" -->

## Gaussian splatting

- Photoreal 3D scenes reconstructed from photos
- BlendSplat: import splats, edit with Geometry Nodes
- Real-world scans sit in the same scene as data

<img class="pane-img" src="./images/PXL_20260923_140450377.jpg">

Note:
"Procedural Workflows with Gaussian Splatting". Gaussian splatting (3DGS) reconstructs photoreal 3D scenes from photos. A lab, a field site or an artefact can be placed in the same scene as the scientific data.

---

<!-- .slide: data-state="two-pane" -->

## SciExplorer: microscopy data

- Alisa Ovsiannikova (ETH Zurich / Maastricht University)
- Links objects from microscopy data to their measurements
- Filter and inspect structures in 3D
- Also: Cella, for plant single-cell transcriptomics

<img class="pane-img" src="./images/pasted_20260930094214.png">

Note:
Researchers can filter and inspect structures in 3D. Cella paper: onlinelibrary.wiley.com/doi/full/10.1111/ppl.14068.

---

<!-- .slide: data-state="standard" -->

## Accident visualization

- Not a talk: a conversation at the conference
- Crime scene and accident reconstruction
- Attorneys want Blender's output, not its interface
- Solution: plugins that simplify Blender for them

Note:
I talked to Holly, who does crime scene reconstruction. It is hard for attorneys to interact with Blender, but they do want what it provides. She built plugins to simplify the interface. Related ideas from the Sciviz meetup: application templates, export to glTF or Sketchfab, straight to the browser.

===

<!-- .slide: data-state="title" -->

# 4. Making it accurate

---

<!-- .slide: data-state="two-pane" -->

## Scientific data on surfaces

- Nicole Feng, geometry processing researcher
- Compute the scalar field in your own tools
- Pack values into the mesh UVs on export
- Look them up in a colormap in shader nodes

<img class="pane-img" src="./images/pasted_20260930094531.png">

Note:
A pretty picture is not the same as a correct one. The scalar values are looked up in a colormap image such as viridis through UV, Separate XYZ, image texture, BSDF. nzfeng.github.io. Second image: pasted_20260930094614.png.

---

<!-- .slide: data-state="two-pane" -->

## Accuracy tips

- Color management: Standard, not AgX or Filmic
- Emission shader: color is the data, not the lighting
- Fresnel highlights small details and silhouettes

<img class="pane-img" src="./images/pasted_20260930094656.png">

Note:
Tone-mapping view transforms change the colormap, so the rendered colors no longer match the legend. Accuracy is not the default in Blender: it is tuned for pleasing images, not faithful ones.

===

<!-- .slide: data-state="title" -->

# Conclusion

---

<!-- .slide: data-state="standard" -->

## Why Blender for science?

- Customisability: Python API and add-ons
- Reproducibility: scenes generated from code, versioned in Git
- Cinematic quality: cameras, light, materials, animation curves
- Free and open source
- A thriving community and ecosystem

---

<!-- .slide: data-state="standard" -->

## And the caveats

- Learning curve and UI are a barrier for collaborators and end users
- Collaboration inside .blend files doesn't scale; code-first does, but is verbose

Note:
Mitigations: application templates, custom panels, web export, nodebpy. Accuracy is covered in section 4.

---

<!-- .slide: data-state="standard" -->

## So, is it worth it?

- Blender is an incredible, customisable tool for scientific visualization
- Strong sci-viz community and a wealth of extensions
- Low-risk first step: try the code-first workflow on one project

Note:
Return to the opening question: what scientific applications does Blender have, and what are the pros and cons? Close on possibility, with one concrete first step.

---

<!-- .slide: data-state="standard" -->

## Talks

<div class="talks">

- [Co-Creating 3D Data Animations With Code](https://conference.blender.org/2026/presentations/4200/)
- [Build Your Node Trees With Code](https://conference.blender.org/2026/presentations/4257/)
- [From Stardust to Black Holes: Visualising the Physics of Stellar Evolution in Blender](https://conference.blender.org/2026/presentations/4202/)
- [Graph Visualization and Analysis with SciGraphs](https://conference.blender.org/2026/presentations/4165/)
- [Building Procedural Simulation Environments](https://conference.blender.org/2026/presentations/4184/)
- [Neuromechanical Modeling and Simulation of Animals and Robots](https://conference.blender.org/2026/presentations/4240/)
- [SciExplorer: From Microscopy Data to Interactive Scientific Visualisation](https://conference.blender.org/2026/presentations/4215/)
- [Cella: 3D Data Visualization for Plant Single-Cell Transcriptomics](https://conference.blender.org/2026/presentations/4127/)
- [Procedural Workflows with Gaussian Splatting](https://conference.blender.org/2026/presentations/4214/)
- [Scientific Data on Surfaces](https://conference.blender.org/2026/presentations/4293/)
- [Scientific Visualization Meetup: Tools, Trends, Community](https://conference.blender.org/2026/presentations/4229/)

</div>
