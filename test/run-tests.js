const { spawnSync } = require('child_process')
const path = require('path')
const fs = require('fs')

function run(cmd, args) {
  const res = spawnSync(cmd, args, { stdio: 'inherit' })
  if (res.status !== 0) process.exit(res.status)
}

// Build must have produced dist/cli.js
if (!fs.existsSync(path.join(__dirname, '..', 'dist', 'cli.js'))) {
  console.error('dist/cli.js not found. Run npm run build first.')
  process.exit(2)
}

// Create a tiny test HTML
const html = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>AX Test</title>
    <script>
      setTimeout(()=>{
        const p = document.createElement('p')
        p.id = 'dynamic'
        p.textContent = 'loaded'
        document.body.appendChild(p)
      }, 300)
    </script>
  </head>
  <body>
    <h1 id="title">Hello</h1>
  </body>
</html>`
const tmpHtml = path.join(__dirname, 'fixture.html')
fs.writeFileSync(tmpHtml, html)

// Run axtree against file:// fixture
run('node', [path.join(__dirname, '..', 'dist', 'cli.js'), `file://${tmpHtml}`])

console.log('Basic run completed')
