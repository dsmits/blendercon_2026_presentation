import { defineConfig } from 'vite'

// slides.md is fetched at runtime by reveal's markdown plugin, so Vite doesn't
// know about it. Reload the page when it changes (dev server only).
const reloadOnSlidesChange = {
  name: 'reload-on-slides-change',
  configureServer(server) {
    server.watcher.add('slides.md')
    server.watcher.on('change', (file) => {
      if (file.endsWith('slides.md')) server.ws.send({ type: 'full-reload' })
    })
  },
}

export default defineConfig({
  plugins: [reloadOnSlidesChange],
})
