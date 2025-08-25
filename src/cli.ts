#!/usr/bin/env node
import { getFullAXTree } from './axtree'

import fs from 'fs'

interface CliArgs {
  out?: string
  pretty: boolean
  waitForMs: number
  waitForSelector?: string
  waitForStableMs: number
  networkIdleMs: number
  timeoutMs: number
  target: string
}

function printUsage() {
  console.log('Usage: axtree <url-or-path> [--out file.json] [--pretty] [--wait-for-ms N] [--wait-for-selector selector] [--timeout ms]')
}

async function main(argv: string[]) {
  const args = argv.slice(2)
  if (args.length === 0) {
    printUsage()
    process.exit(1)
  }
  const result: CliArgs = {
    out: undefined,
    pretty: false,
    waitForMs: 1000,
    waitForSelector: undefined,
    waitForStableMs: 500,
    networkIdleMs: 500,
    timeoutMs: 30000,
    target: ''
  }

  const it = args[Symbol.iterator]()
  let cur = it.next()
  while (!cur.done) {
    const v = cur.value
    if (!result.target) {
      result.target = v
      cur = it.next()
      continue
    }
    switch (v) {
      case '--out': {
        const n = it.next()
        if (n.done) { console.error('--out requires a file path'); process.exit(2) }
        result.out = String(n.value)
        break
      }
  case '--pretty': result.pretty = true; break
      case '--wait-for-ms': {
        const n = it.next(); if (n.done) { console.error('--wait-for-ms requires a number'); process.exit(2) }
        result.waitForMs = Number(n.value); break
      }
      case '--wait-for-selector': {
        const n = it.next(); if (n.done) { console.error('--wait-for-selector requires a selector'); process.exit(2) }
        result.waitForSelector = String(n.value); break
      }
      case '--wait-for-stable': {
        const n = it.next(); if (n.done) { console.error('--wait-for-stable requires a number'); process.exit(2) }
        result.waitForStableMs = Number(n.value); break
      }
      case '--networkidle-ms': {
        const n = it.next(); if (n.done) { console.error('--networkidle-ms requires a number'); process.exit(2) }
        result.networkIdleMs = Number(n.value); break
      }
      case '--timeout': {
        const n = it.next(); if (n.done) { console.error('--timeout requires a number'); process.exit(2) }
        result.timeoutMs = Number(n.value); break
      }
      default:
        console.error('Unknown arg', v)
        printUsage()
        process.exit(2)
    }
    cur = it.next()
  }

  try {
    const ax = await getFullAXTree(result.target, {
      waitForMs: result.waitForMs,
      waitForSelector: result.waitForSelector,
      waitForStableMs: result.waitForStableMs,
      networkIdleMs: result.networkIdleMs,
      timeoutMs: result.timeoutMs
    })
    const outStr = result.pretty ? JSON.stringify(ax, null, 2) : JSON.stringify(ax)
    if (result.out) {
      fs.writeFileSync(result.out, outStr)
    } else {
      console.log(outStr)
    }
    process.exit(0)
  } catch (err) {
    if (err instanceof Error) {
      console.error('Error:', err.message)
    } else {
      console.error('Error:', String(err))
    }
    process.exit(1)
  }
}

if (require.main === module) {
  void main(process.argv)
}

export default main
