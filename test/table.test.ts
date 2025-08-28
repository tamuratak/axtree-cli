import * as assert from 'node:assert'
import { suite, test } from 'mocha'
import { getFullAXTreeFromHtml } from '../src/axtree'
import { createNodeTree, processTableNode, AXNode, AXNodeTree } from '../src/cdpaccessibilitydomain'
import { inspectReadable } from '../src/utils/inspect.js'

suite('table processing', () => {
    test('generates markdown table from html table', async () => {
        const html = `<!doctype html>
                <html>
                    <body>
                        <table>
                            <tr><th>H1</th><th>H2</th></tr>
                            <tr><td>A</td><td>B</td></tr>
                            <tr><td>C</td><td>D</td></tr>
                        </table>
                    </body>
                </html>`

        const ax = await getFullAXTreeFromHtml(html)
        // ax.nodes is the raw nodes returned by CDP
        const nodes = (ax as { nodes?: AXNode[] } | null)?.nodes ?? []
        const tree = createNodeTree(nodes)
        assert.ok(tree, 'expected non-null tree')

        // find first table node in tree (DFS)
        const findTable = (n: AXNodeTree | null): AXNodeTree | null => {
            if (!n) {
                return null
            }
            if (n.node.role?.value === 'table') {
                return n
            }
            for (const c of n.children) {
                const r = findTable(c)
                if (r) {
                    return r
                }
            }
            return null
        }

        const tableNode = findTable(tree)
        assert.ok(tableNode, 'expected table node')

        const buffer: string[] = []
        processTableNode(tableNode, buffer)
        const md = buffer.join('')

        // basic assertions on generated markdown
        assert.ok(md.includes('| H1 | H2 |'))
        assert.ok(md.includes('| --- | --- |') || md.includes('| --- | --- |\n'))
        assert.ok(md.includes('| A | B |'))
        assert.ok(md.includes('| C | D |'))
    })

    test('generates markdown table from table with rowspan and colspan headers', async () => {
        const html = `<!doctype html>
                <html>
                    <body>
                        <table>
                            <thead>
                                <tr>
                                    <th rowspan="2">Header 1</th>
                                    <th colspan="2">Header 2</th>
                                </tr>
                                <tr>
                                    <th>Subheader 1</th>
                                    <th>Subheader 2</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </body>
                </html>`

        const ax = await getFullAXTreeFromHtml(html)
        const nodes = (ax as { nodes?: AXNode[] } | null)?.nodes ?? []
        const tree = createNodeTree(nodes)
        console.log(inspectReadable(tree))
        assert.ok(tree, 'expected non-null tree')

        // find first table node in tree (DFS)
        const findTable = (n: AXNodeTree | null): AXNodeTree | null => {
            if (!n) {
                return null
            }
            if (n.node.role?.value === 'table') {
                return n
            }
            for (const c of n.children) {
                const r = findTable(c)
                if (r) {
                    return r
                }
            }
            return null
        }

        const tableNode = findTable(tree)
        assert.ok(tableNode, 'expected table node')

        const buffer: string[] = []
        processTableNode(tableNode, buffer)
        const md = buffer.join('')

        // assertions: ensure all header texts appear in generated markdown
        assert.ok(md.includes('Header 1'))
        assert.ok(md.includes('Header 2'))
        assert.ok(md.includes('Subheader 1'))
        assert.ok(md.includes('Subheader 2'))
    })
})
