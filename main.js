import 'reveal.js/dist/reveal.css'
import './nlesc-decorations.scss'
import './custom.scss'
import Reveal from 'reveal.js'
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Math from 'reveal.js/plugin/math/math.esm.js';
import Notes from 'reveal.js/plugin/notes/notes.esm.js';
import Search from 'reveal.js/plugin/search/search.esm.js';
import Zoom from 'reveal.js/plugin/zoom/zoom.esm.js';
import Decorations from './nlesc-decorations.js';
import mermaid from 'mermaid';

// 3D model slides use <model-viewer>; load it lazily so the main bundle stays small
import('@google/model-viewer')

const deck = new Reveal()
deck.initialize({
  hash: true,
  controls: true,
  progress: true,
  center: true,
  hash: true,
  transition: 'slide',
  plugins: [ Highlight, Markdown, Math.KaTeX, Notes, Search, Zoom, Decorations ],  // Menu from separate reveal.js plugins
}).then(() => {
  // the Markdown plugin renders ```mermaid fences as <code class="mermaid">; swap them for diagrams
  mermaid.initialize({ startOnLoad: false, theme: 'neutral', useMaxWidth: false })
  const nodes = [...document.querySelectorAll('pre > code.mermaid')].map((code) => {
    const div = document.createElement('div')
    div.className = 'mermaid'
    div.textContent = code.textContent
    code.closest('pre').replaceWith(div)
    return div
  })
  mermaid.run({ nodes })
})
