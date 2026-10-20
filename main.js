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

const deck = new Reveal()
deck.initialize({
  hash: true,
  controls: true,
  progress: true,
  center: true,
  hash: true,
  transition: 'slide',
  plugins: [ Highlight, Markdown, Math.KaTeX, Notes, Search, Zoom, Decorations ],  // Menu from separate reveal.js plugins
})
