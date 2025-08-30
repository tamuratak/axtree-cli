import * as assert from 'assert';
import { URI } from 'vscode-uri';
import { AXNode, convertAXTreeToMarkdown } from '../src/cdpaccessibilitydomain.js';


suite('MathML 02', () => {

    const testUri = URI.parse('https://example.com/test');

    test('empty tree returns empty string', () => {
        const nodes: AXNode[] = [

        ];

        const result = convertAXTreeToMarkdown(testUri, nodes);
        const expected = '';
        assert.strictEqual(result, expected);
    });

    test('simple MathML conversion', () => {
        const nodes: AXNode[] = [

        ];

        const result = convertAXTreeToMarkdown(testUri, nodes);
        const expected = '';
        assert.strictEqual(result, expected);
    });

});
