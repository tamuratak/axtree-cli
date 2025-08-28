import * as assert from 'node:assert'
import { suite, test } from 'mocha'
import { getFullAXTreeFromHtml } from '../src/axtree'
import { createNodeTree, processTableNode, AXNode, AXNodeTree } from '../src/cdpaccessibilitydomain'

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
})
