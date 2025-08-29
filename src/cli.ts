#!/usr/bin/env node
import { getFullAXTree } from './axtree'

import { AXNode, convertAXTreeToMarkdown } from './cdpaccessibilitydomain.js'
import { URI } from 'vscode-uri'
import { inspectReadable } from './utils/inspect'
import { trimOptionalProperties } from './utils/ax.js'

interface CliArgs {
    out?: string
    raw?: boolean
    waitForMs: number
    waitForSelector?: string
    waitForStableMs: number
    networkIdleMs: number
    timeoutMs: number
    target: string
}

function printUsage() {
    console.log('Usage: axtree <url-or-path> [--raw] [--wait-for-ms N] [--wait-for-selector selector] [--timeout ms]')
}

async function main(argv: string[]) {
    const args = argv.slice(2)
    if (args.length === 0) {
        printUsage()
        process.exit(1)
    }
    const result: CliArgs = {
        raw: false,
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
            case '--raw': result.raw = true; break
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
        if (result.raw) {
            const readable = inspectReadable({ nodes: trimOptionalProperties(ax.nodes as AXNode[]) })
            console.log(readable)
        } else {
            const md = convertAXTreeToMarkdown(URI.parse(result.target), ax.nodes as AXNode[])
            console.log(md)
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
