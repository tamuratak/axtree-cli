axtree - Accessibility.getFullAXTree CLI

Usage:
  npm run build
  node dist/cli.js <url-or-path> [--raw] [--wait-for-ms N] [--wait-for-selector selector] [--wait-for-stable N] [--timeout ms]

Example:
  node dist/cli.js https://example.com

Notes:
- Headless Chromium (Playwright) is used. On first run Playwright may download browser binaries.
- Defaults: --wait-for-ms 1000, --wait-for-stable 500, --timeout 30000
