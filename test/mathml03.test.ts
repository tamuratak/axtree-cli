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

    test('Vmatrix', () => {
        const nodes: AXNode[] = [
            {
                nodeId: '6',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLMath'
                },
                name: {
                    type: 'computedString',
                    value: ''
                },
                childIds: [
                    '7'
                ]
            },
            {
                nodeId: '7',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLRow'
                },
                name: {
                    type: 'computedString',
                    value: ''
                },
                childIds: [
                    '8'
                ]
            },
            {
                nodeId: '8',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLRow'
                },
                name: {
                    type: 'computedString',
                    value: ''
                },
                childIds: [
                    '9',
                    '10',
                    '21'
                ]
            },
            {
                nodeId: '9',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLOperator'
                },
                name: {
                    type: 'computedString',
                    value: ''
                },
                childIds: [
                    '23'
                ]
            },
            {
                nodeId: '10',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLTable'
                },
                name: {
                    type: 'computedString',
                    value: ''
                },
                childIds: [
                    '11',
                    '16'
                ]
            },
            {
                nodeId: '21',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLOperator'
                },
                name: {
                    type: 'computedString',
                    value: ''
                },
                childIds: [
                    '28'
                ]
            },
            {
                nodeId: '23',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'StaticText'
                },
                name: {
                    type: 'computedString',
                    value: '‖'
                },
                childIds: [
                    '-1000000002'
                ]
            },
            {
                nodeId: '11',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLTableRow'
                },
                name: {
                    type: 'computedString',
                    value: ''
                },
                childIds: [
                    '12',
                    '14'
                ]
            },
            {
                nodeId: '16',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLTableRow'
                },
                name: {
                    type: 'computedString',
                    value: ''
                },
                childIds: [
                    '17',
                    '19'
                ]
            },
            {
                nodeId: '28',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'StaticText'
                },
                name: {
                    type: 'computedString',
                    value: '‖'
                },
                childIds: [
                    '-1000000007'
                ]
            },
            {
                nodeId: '-1000000002',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'InlineTextBox'
                },
                name: {
                    type: 'computedString',
                    value: '‖'
                },
                childIds: []
            },
            {
                nodeId: '12',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLTableCell'
                },
                name: {
                    type: 'computedString',
                    value: ''
                },
                childIds: [
                    '13'
                ]
            },
            {
                nodeId: '14',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLTableCell'
                },
                name: {
                    type: 'computedString',
                    value: ''
                },
                childIds: [
                    '15'
                ]
            },
            {
                nodeId: '17',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLTableCell'
                },
                name: {
                    type: 'computedString',
                    value: ''
                },
                childIds: [
                    '18'
                ]
            },
            {
                nodeId: '19',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLTableCell'
                },
                name: {
                    type: 'computedString',
                    value: ''
                },
                childIds: [
                    '20'
                ]
            },
            {
                nodeId: '-1000000007',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'InlineTextBox'
                },
                name: {
                    type: 'computedString',
                    value: '‖'
                },
                childIds: []
            },
            {
                nodeId: '13',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLIdentifier'
                },
                name: {
                    type: 'computedString',
                    value: ''
                },
                childIds: [
                    '24'
                ]
            },
            {
                nodeId: '15',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLIdentifier'
                },
                name: {
                    type: 'computedString',
                    value: ''
                },
                childIds: [
                    '25'
                ]
            },
            {
                nodeId: '18',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLIdentifier'
                },
                name: {
                    type: 'computedString',
                    value: ''
                },
                childIds: [
                    '26'
                ]
            },
            {
                nodeId: '20',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLIdentifier'
                },
                name: {
                    type: 'computedString',
                    value: ''
                },
                childIds: [
                    '27'
                ]
            },
            {
                nodeId: '24',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'StaticText'
                },
                name: {
                    type: 'computedString',
                    value: '𝑎'
                },
                childIds: [
                    '-1000000003'
                ]
            },
            {
                nodeId: '25',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'StaticText'
                },
                name: {
                    type: 'computedString',
                    value: '𝑏'
                },
                childIds: [
                    '-1000000004'
                ]
            },
            {
                nodeId: '26',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'StaticText'
                },
                name: {
                    type: 'computedString',
                    value: '𝑐'
                },
                childIds: [
                    '-1000000005'
                ]
            },
            {
                nodeId: '27',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'StaticText'
                },
                name: {
                    type: 'computedString',
                    value: '𝑑'
                },
                childIds: [
                    '-1000000006'
                ]
            },
            {
                nodeId: '-1000000003',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'InlineTextBox'
                },
                name: {
                    type: 'computedString',
                    value: '𝑎'
                },
                childIds: []
            },
            {
                nodeId: '-1000000004',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'InlineTextBox'
                },
                name: {
                    type: 'computedString',
                    value: '𝑏'
                },
                childIds: []
            },
            {
                nodeId: '-1000000005',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'InlineTextBox'
                },
                name: {
                    type: 'computedString',
                    value: '𝑐'
                },
                childIds: []
            },
            {
                nodeId: '-1000000006',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'InlineTextBox'
                },
                name: {
                    type: 'computedString',
                    value: '𝑑'
                },
                childIds: []
            }
        ];

        const result = convertAXTreeToMarkdown(testUri, nodes);
        const expected = `
$$
\\begin{Vmatrix}
a & b \\\\
c & d
\\end{Vmatrix}
$$`;
        assert.strictEqual(result, expected);
    });

    test('widehat', () => {
        const nodes: AXNode[] = [
            {
                nodeId: '6',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLMath'
                },
                name: {
                    type: 'computedString',
                    value: ''
                },
                childIds: [
                    '7'
                ]
            },
            {
                nodeId: '7',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLRow'
                },
                name: {
                    type: 'computedString',
                    value: ''
                },
                childIds: [
                    '8'
                ]
            },
            {
                nodeId: '8',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLRow'
                },
                name: {
                    type: 'computedString',
                    value: ''
                },
                childIds: [
                    '9'
                ]
            },
            {
                nodeId: '9',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLOver'
                },
                name: {
                    type: 'computedString',
                    value: ''
                },
                childIds: [
                    '10',
                    '18'
                ]
            },
            {
                nodeId: '10',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLRow'
                },
                name: {
                    type: 'computedString',
                    value: ''
                },
                childIds: [
                    '11',
                    '12',
                    '13',
                    '14',
                    '15',
                    '16',
                    '17'
                ]
            },
            {
                nodeId: '18',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLOperator'
                },
                name: {
                    type: 'computedString',
                    value: ''
                },
                childIds: [
                    '27'
                ]
            },
            {
                nodeId: '11',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLIdentifier'
                },
                name: {
                    type: 'computedString',
                    value: ''
                },
                childIds: [
                    '20'
                ]
            },
            {
                nodeId: '12',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLIdentifier'
                },
                name: {
                    type: 'computedString',
                    value: ''
                },
                childIds: [
                    '21'
                ]
            },
            {
                nodeId: '13',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLIdentifier'
                },
                name: {
                    type: 'computedString',
                    value: ''
                },
                childIds: [
                    '22'
                ]
            },
            {
                nodeId: '14',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLIdentifier'
                },
                name: {
                    type: 'computedString',
                    value: ''
                },
                childIds: [
                    '23'
                ]
            },
            {
                nodeId: '15',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLIdentifier'
                },
                name: {
                    type: 'computedString',
                    value: ''
                },
                childIds: [
                    '24'
                ]
            },
            {
                nodeId: '16',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLIdentifier'
                },
                name: {
                    type: 'computedString',
                    value: ''
                },
                childIds: [
                    '25'
                ]
            },
            {
                nodeId: '17',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLIdentifier'
                },
                name: {
                    type: 'computedString',
                    value: ''
                },
                childIds: [
                    '26'
                ]
            },
            {
                nodeId: '27',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'StaticText'
                },
                name: {
                    type: 'computedString',
                    value: '^'
                },
                childIds: [
                    '-1000000009'
                ]
            },
            {
                nodeId: '20',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'StaticText'
                },
                name: {
                    type: 'computedString',
                    value: '𝑎'
                },
                childIds: [
                    '-1000000002'
                ]
            },
            {
                nodeId: '21',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'StaticText'
                },
                name: {
                    type: 'computedString',
                    value: '𝑏'
                },
                childIds: [
                    '-1000000003'
                ]
            },
            {
                nodeId: '22',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'StaticText'
                },
                name: {
                    type: 'computedString',
                    value: '𝑐'
                },
                childIds: [
                    '-1000000004'
                ]
            },
            {
                nodeId: '23',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'StaticText'
                },
                name: {
                    type: 'computedString',
                    value: '𝑑'
                },
                childIds: [
                    '-1000000005'
                ]
            },
            {
                nodeId: '24',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'StaticText'
                },
                name: {
                    type: 'computedString',
                    value: '𝑒'
                },
                childIds: [
                    '-1000000006'
                ]
            },
            {
                nodeId: '25',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'StaticText'
                },
                name: {
                    type: 'computedString',
                    value: '𝑑'
                },
                childIds: [
                    '-1000000007'
                ]
            },
            {
                nodeId: '26',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'StaticText'
                },
                name: {
                    type: 'computedString',
                    value: '𝑔'
                },
                childIds: [
                    '-1000000008'
                ]
            },
            {
                nodeId: '-1000000009',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'InlineTextBox'
                },
                name: {
                    type: 'computedString',
                    value: '^'
                },
                childIds: []
            },
            {
                nodeId: '-1000000002',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'InlineTextBox'
                },
                name: {
                    type: 'computedString',
                    value: '𝑎'
                },
                childIds: []
            },
            {
                nodeId: '-1000000003',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'InlineTextBox'
                },
                name: {
                    type: 'computedString',
                    value: '𝑏'
                },
                childIds: []
            },
            {
                nodeId: '-1000000004',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'InlineTextBox'
                },
                name: {
                    type: 'computedString',
                    value: '𝑐'
                },
                childIds: []
            },
            {
                nodeId: '-1000000005',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'InlineTextBox'
                },
                name: {
                    type: 'computedString',
                    value: '𝑑'
                },
                childIds: []
            },
            {
                nodeId: '-1000000006',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'InlineTextBox'
                },
                name: {
                    type: 'computedString',
                    value: '𝑒'
                },
                childIds: []
            },
            {
                nodeId: '-1000000007',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'InlineTextBox'
                },
                name: {
                    type: 'computedString',
                    value: '𝑑'
                },
                childIds: []
            },
            {
                nodeId: '-1000000008',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'InlineTextBox'
                },
                name: {
                    type: 'computedString',
                    value: '𝑔'
                },
                childIds: []
            }
        ];

        const result = convertAXTreeToMarkdown(testUri, nodes);
        const expected = '$\\widehat{abcdedg}$';
        assert.strictEqual(result.trim(), expected);
    });

});
