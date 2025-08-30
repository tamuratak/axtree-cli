import * as assert from 'assert';
import { URI } from 'vscode-uri';
import { AXNode, convertAXTreeToMarkdown } from '../src/cdpaccessibilitydomain.js';


suite('CDP Accessibility Domain', () => {

    const testUri = URI.parse('https://example.com/test');
    /*
        function createAXValue(type: AXValueType, value: unknown) {
            return { type, value };
        }
            */
    /*
        function createAXProperty(name: AXPropertyName, value: unknown, type: AXValueType = 'string'): AXProperty {
            return {
                name,
                value: createAXValue(type, value)
            };
        }
    */
    test('empty tree returns empty string', () => {
        const result = convertAXTreeToMarkdown(testUri, []);
        assert.strictEqual(result, '');
    });

    //#region MathML Tests
    test('simple MathML conversion', () => {
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
                    '7',
                    '8',
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
                nodeId: '7',
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
                    '18'
                ]
            },
            {
                nodeId: '8',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLSup'
                },
                name: {
                    type: 'computedString',
                    value: ''
                },
                childIds: [
                    '9',
                    '10'
                ]
            },
            {
                nodeId: '11',
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
                    '21'
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
                    '22'
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
                    '23'
                ]
            },
            {
                nodeId: '14',
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
                nodeId: '16',
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
                    '26'
                ]
            },
            {
                nodeId: '17',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLNumber'
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
                nodeId: '18',
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
                nodeId: '9',
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
                    '19'
                ]
            },
            {
                nodeId: '10',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLNumber'
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
                nodeId: '21',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'StaticText'
                },
                name: {
                    type: 'computedString',
                    value: '+'
                },
                childIds: [
                    '-1000000005'
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
                    value: '𝑏'
                },
                childIds: [
                    '-1000000006'
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
                    value: '𝑥'
                },
                childIds: [
                    '-1000000007'
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
                    value: '+'
                },
                childIds: [
                    '-1000000008'
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
                    value: '𝑐'
                },
                childIds: [
                    '-1000000009'
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
                    value: '='
                },
                childIds: [
                    '-1000000010'
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
                    value: '0'
                },
                childIds: [
                    '-1000000011'
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
                    value: '𝑎'
                },
                childIds: []
            },
            {
                nodeId: '19',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'StaticText'
                },
                name: {
                    type: 'computedString',
                    value: '𝑥'
                },
                childIds: [
                    '-1000000003'
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
                    value: '2'
                },
                childIds: [
                    '-1000000004'
                ]
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
                    value: '+'
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
                    value: '𝑏'
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
                    value: '𝑥'
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
                    value: '+'
                },
                childIds: []
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
                    value: '𝑐'
                },
                childIds: []
            },
            {
                nodeId: '-1000000010',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'InlineTextBox'
                },
                name: {
                    type: 'computedString',
                    value: '='
                },
                childIds: []
            },
            {
                nodeId: '-1000000011',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'InlineTextBox'
                },
                name: {
                    type: 'computedString',
                    value: '0'
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
                    value: '𝑥'
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
                    value: '2'
                },
                childIds: []
            }
        ]

        const result = convertAXTreeToMarkdown(testUri, nodes);
        const expected = 'ax^2+bx+c=0';
        assert.strictEqual(result, expected);
    })

    test('sin(x+y)', () => {
        const nodes: AXNode[] = [
            {
                nodeId: '5',
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
                    '6',
                    '7',
                    '8',
                    '9',
                    '10',
                    '11',
                    '12'
                ]
            },
            {
                nodeId: '6',
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
                    '13'
                ]
            },
            {
                nodeId: '7',
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
                    '14'
                ]
            },
            {
                nodeId: '8',
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
                    '15'
                ]
            },
            {
                nodeId: '9',
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
                    '16'
                ]
            },
            {
                nodeId: '10',
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
                    '17'
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
                    '18'
                ]
            },
            {
                nodeId: '12',
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
                    '19'
                ]
            },
            {
                nodeId: '13',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'StaticText'
                },
                name: {
                    type: 'computedString',
                    value: 'sin'
                },
                childIds: [
                    '-1000000002'
                ]
            },
            {
                nodeId: '14',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'StaticText'
                },
                name: {
                    type: 'computedString',
                    value: '⁡'
                },
                childIds: [
                    '-1000000003'
                ]
            },
            {
                nodeId: '15',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'StaticText'
                },
                name: {
                    type: 'computedString',
                    value: '('
                },
                childIds: [
                    '-1000000004'
                ]
            },
            {
                nodeId: '16',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'StaticText'
                },
                name: {
                    type: 'computedString',
                    value: '𝑥'
                },
                childIds: [
                    '-1000000005'
                ]
            },
            {
                nodeId: '17',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'StaticText'
                },
                name: {
                    type: 'computedString',
                    value: '+'
                },
                childIds: [
                    '-1000000006'
                ]
            },
            {
                nodeId: '18',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'StaticText'
                },
                name: {
                    type: 'computedString',
                    value: '𝑦'
                },
                childIds: [
                    '-1000000007'
                ]
            },
            {
                nodeId: '19',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'StaticText'
                },
                name: {
                    type: 'computedString',
                    value: ')'
                },
                childIds: [
                    '-1000000008'
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
                    value: 'sin'
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
                    value: '⁡'
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
                    value: '('
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
                    value: '𝑥'
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
                    value: '+'
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
                    value: '𝑦'
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
                    value: ')'
                },
                childIds: []
            }
        ];

        const result = convertAXTreeToMarkdown(testUri, nodes);
        const expected = '\\sin(x+y)';
        assert.strictEqual(result, expected);
    });

    test('pmatrix', () => {
        const nodes: AXNode[] = [
            {
                nodeId: '5',
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
                    '6'
                ]
            },
            {
                nodeId: '6',
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
                    '7',
                    '8',
                    '19'
                ]
            },
            {
                nodeId: '7',
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
                    '20'
                ]
            },
            {
                nodeId: '8',
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
                    '9',
                    '14'
                ]
            },
            {
                nodeId: '19',
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
                    '25'
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
                    value: '('
                },
                childIds: [
                    '-1000000002'
                ]
            },
            {
                nodeId: '9',
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
                    '10',
                    '12'
                ]
            },
            {
                nodeId: '14',
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
                    '15',
                    '17'
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
                    value: ')'
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
                    value: '('
                },
                childIds: []
            },
            {
                nodeId: '10',
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
                    '11'
                ]
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
                nodeId: '15',
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
                    '16'
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
                nodeId: '-1000000007',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'InlineTextBox'
                },
                name: {
                    type: 'computedString',
                    value: ')'
                },
                childIds: []
            },
            {
                nodeId: '11',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLNumber'
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
                    value: 'MathMLNumber'
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
                nodeId: '16',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLNumber'
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
                nodeId: '18',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLNumber'
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
                nodeId: '21',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'StaticText'
                },
                name: {
                    type: 'computedString',
                    value: '1'
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
                    value: '2'
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
                    value: '3'
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
                    value: '4'
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
                    value: '1'
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
                    value: '2'
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
                    value: '3'
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
                    value: '4'
                },
                childIds: []
            }
        ];

        const result = convertAXTreeToMarkdown(testUri, nodes);
        const expected = `\\begin{pmatrix}
1 & 2 \\\\
3 & 4
\\end{pmatrix}`;
        assert.strictEqual(result, expected);
    });
    test('vmatrix', () => {
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
                    '8',
                    '9',
                    '20'
                ]
            },
            {
                nodeId: '8',
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
                    '21'
                ]
            },
            {
                nodeId: '9',
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
                    '10',
                    '15'
                ]
            },
            {
                nodeId: '20',
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
                    '26'
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
                    value: '|'
                },
                childIds: [
                    '-1000000002'
                ]
            },
            {
                nodeId: '10',
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
                    '11',
                    '13'
                ]
            },
            {
                nodeId: '15',
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
                    '16',
                    '18'
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
                    value: '|'
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
                    value: '|'
                },
                childIds: []
            },
            {
                nodeId: '11',
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
                    '12'
                ]
            },
            {
                nodeId: '13',
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
                    '14'
                ]
            },
            {
                nodeId: '16',
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
                    '17'
                ]
            },
            {
                nodeId: '18',
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
                    '19'
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
                    value: '|'
                },
                childIds: []
            },
            {
                nodeId: '12',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLNumber'
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
                    value: 'MathMLNumber'
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
                nodeId: '17',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLNumber'
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
                nodeId: '19',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLNumber'
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
                nodeId: '22',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'StaticText'
                },
                name: {
                    type: 'computedString',
                    value: '1'
                },
                childIds: [
                    '-1000000003'
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
                    value: '2'
                },
                childIds: [
                    '-1000000004'
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
                    value: '3'
                },
                childIds: [
                    '-1000000005'
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
                    value: '4'
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
                    value: '1'
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
                    value: '2'
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
                    value: '3'
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
                    value: '4'
                },
                childIds: []
            }
        ];
        const result = convertAXTreeToMarkdown(testUri, nodes);
        const expected = `\\begin{vmatrix}
1 & 2 \\\\
3 & 4
\\end{vmatrix}`;
        assert.strictEqual(result, expected);
    });
    //#endregion
});
