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

    test('partial derivative', () => {
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
                    '10',
                    '11',
                    '12',
                    '13',
                    '14',
                    '15'
                ]
            },
            {
                nodeId: '7',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLSub'
                },
                name: {
                    type: 'computedString',
                    value: ''
                },
                childIds: [
                    '8',
                    '9'
                ]
            },
            {
                nodeId: '10',
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
                    '19'
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
                    '20'
                ]
            },
            {
                nodeId: '13',
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
                    '22'
                ]
            },
            {
                nodeId: '15',
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
                nodeId: '8',
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
                    '17'
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
                    value: '𝑓'
                },
                childIds: [
                    '-1000000004'
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
                    value: '('
                },
                childIds: [
                    '-1000000005'
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
                    value: '𝑥'
                },
                childIds: [
                    '-1000000006'
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
                    value: ','
                },
                childIds: [
                    '-1000000007'
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
                    value: '𝑦'
                },
                childIds: [
                    '-1000000008'
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
                    value: ')'
                },
                childIds: [
                    '-1000000009'
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
                    value: '𝜕'
                },
                childIds: [
                    '-1000000002'
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
                    value: '𝑥'
                },
                childIds: [
                    '-1000000003'
                ]
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
                    value: '𝑓'
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
                    value: '('
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
                    value: '𝑥'
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
                    value: ','
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
                    value: '𝑦'
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
                    value: ')'
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
                    value: '𝜕'
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
            }
        ];

        const result = convertAXTreeToMarkdown(testUri, nodes);
        const expected = '$∂_xf(x,y)$';
        assert.strictEqual(result.trim(), expected);
    });

    test('integral', () => {
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
                    '10',
                    '11',
                    '12',
                    '13',
                    '14',
                    '15',
                    '16'
                ]
            },
            {
                nodeId: '6',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLSubSup'
                },
                name: {
                    type: 'computedString',
                    value: ''
                },
                childIds: [
                    '7',
                    '8',
                    '9'
                ]
            },
            {
                nodeId: '10',
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
                nodeId: '14',
                ignored: true,
                role: {
                    type: 'role',
                    value: 'none'
                },
                name: {
                    type: 'valueUndefined',
                    value: undefined
                },
                childIds: []
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
                    '17'
                ]
            },
            {
                nodeId: '8',
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
                nodeId: '20',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'StaticText'
                },
                name: {
                    type: 'computedString',
                    value: '𝑓'
                },
                childIds: [
                    '-1000000005'
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
                    value: '('
                },
                childIds: [
                    '-1000000006'
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
                    value: '𝑥'
                },
                childIds: [
                    '-1000000007'
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
                    value: ')'
                },
                childIds: [
                    '-1000000008'
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
                    value: '𝑑'
                },
                childIds: [
                    '-1000000009'
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
                    value: '𝑥'
                },
                childIds: [
                    '-1000000010'
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
                    value: '∫'
                },
                childIds: [
                    '-1000000002'
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
                    '-1000000003'
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
                    value: '𝑏'
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
                    value: '𝑓'
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
                    value: '('
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
                    value: ')'
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
                    value: '𝑑'
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
                    value: '𝑥'
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
                    value: '∫'
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
            }
        ];

        const result = convertAXTreeToMarkdown(testUri, nodes);
        const expected = '$∫_a^bf(x)dx$';
        assert.strictEqual(result.trim(), expected);
    });

    test('hat', () => {
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
                    value: 'MathMLOver'
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
                    '11'
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
                    '12'
                ]
            },
            {
                nodeId: '11',
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
                nodeId: '12',
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
                    '-1000000003'
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
                nodeId: '-1000000003',
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
            }
        ];

        const result = convertAXTreeToMarkdown(testUri, nodes);
        const expected = '$\\hat{a}$';
        assert.strictEqual(result.trim(), expected);
    });

    test('ddot', () => {
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
                    '7'
                ]
            },
            {
                nodeId: '7',
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
                    '8',
                    '9'
                ]
            },
            {
                nodeId: '8',
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
                    '10'
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
                    '11'
                ]
            },
            {
                nodeId: '10',
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
                nodeId: '11',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'StaticText'
                },
                name: {
                    type: 'computedString',
                    value: '¨'
                },
                childIds: [
                    '-1000000003'
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
                nodeId: '-1000000003',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'InlineTextBox'
                },
                name: {
                    type: 'computedString',
                    value: '¨'
                },
                childIds: []
            }
        ];

        const result = convertAXTreeToMarkdown(testUri, nodes);
        const expected = '$\\ddot{a}$';
        assert.strictEqual(result.trim(), expected);
    });

    test('\\ln\\ln T', () => {
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
                    value: 'MathMLSquareRoot'
                },
                name: {
                    type: 'computedString',
                    value: ''
                },
                childIds: [
                    '9',
                    '10',
                    '11',
                    '12',
                    '13'
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
                    '15'
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
                    '16'
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
                    '17'
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
                    '18'
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
                    '19'
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
                    value: 'ln'
                },
                childIds: [
                    '-1000000002'
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
                    value: '⁡'
                },
                childIds: [
                    '-1000000003'
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
                    value: 'ln'
                },
                childIds: [
                    '-1000000004'
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
                    value: '⁡'
                },
                childIds: [
                    '-1000000005'
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
                    value: '𝑇'
                },
                childIds: [
                    '-1000000006'
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
                    value: 'ln'
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
                    value: 'ln'
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
                    value: '⁡'
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
                    value: '𝑇'
                },
                childIds: []
            }
        ];

        const result = convertAXTreeToMarkdown(testUri, nodes);
        const expected = '$\\sqrt{\\ln\\ln T}$';
        assert.strictEqual(result.trim(), expected);
    });

    test('cases', () => {
        const nodes: AXNode[] = [
            {
                nodeId: '2',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'RootWebArea'
                },
                name: {
                    type: 'computedString',
                    value: ''
                },
                childIds: [
                    '3'
                ]
            },
            {
                nodeId: '3',
                ignored: true,
                role: {
                    type: 'role',
                    value: 'none'
                },
                name: {
                    type: 'valueUndefined',
                    value: undefined
                },
                childIds: [
                    '5'
                ]
            },
            {
                nodeId: '5',
                ignored: true,
                role: {
                    type: 'role',
                    value: 'none'
                },
                name: {
                    type: 'valueUndefined',
                    value: undefined
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
                    value: 'MathMLMath'
                },
                name: {
                    type: 'computedString',
                    value: ''
                },
                childIds: [
                    '7',
                    '8',
                    '9'
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
                    '26'
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
                    '27'
                ]
            },
            {
                nodeId: '9',
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
                    '10',
                    '11',
                    '25'
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
                    value: '𝑎'
                },
                childIds: [
                    '-1000000002'
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
                    value: '='
                },
                childIds: [
                    '-1000000003'
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
                    '28'
                ]
            },
            {
                nodeId: '11',
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
                    '12',
                    '20'
                ]
            },
            {
                nodeId: '25',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLOperator'
                },
                name: {
                    type: 'computedString',
                    value: ''
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
                    value: '='
                },
                childIds: []
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
                    value: '{'
                },
                childIds: [
                    '-1000000004'
                ]
            },
            {
                nodeId: '12',
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
                    '13',
                    '17'
                ]
            },
            {
                nodeId: '20',
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
                    '21',
                    '23'
                ]
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
                    value: '{'
                },
                childIds: []
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
                    '14',
                    '15',
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
                    '18',
                    '19'
                ]
            },
            {
                nodeId: '21',
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
                    '22'
                ]
            },
            {
                nodeId: '23',
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
                    '24'
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
                    '29'
                ]
            },
            {
                nodeId: '15',
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
                    '30'
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
                    '31'
                ]
            },
            {
                nodeId: '18',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLText'
                },
                name: {
                    type: 'computedString',
                    value: ''
                },
                childIds: [
                    '32'
                ]
            },
            {
                nodeId: '19',
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
                    '33'
                ]
            },
            {
                nodeId: '22',
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
                    '34'
                ]
            },
            {
                nodeId: '24',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'MathMLText'
                },
                name: {
                    type: 'computedString',
                    value: ''
                },
                childIds: [
                    '35'
                ]
            },
            {
                nodeId: '29',
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
                    '-1000000005'
                ]
            },
            {
                nodeId: '30',
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
                nodeId: '31',
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
                    '-1000000007'
                ]
            },
            {
                nodeId: '32',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'StaticText'
                },
                name: {
                    type: 'computedString',
                    value: ' if '
                },
                childIds: [
                    '-1000000008'
                ]
            },
            {
                nodeId: '33',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'StaticText'
                },
                name: {
                    type: 'computedString',
                    value: '𝐵'
                },
                childIds: [
                    '-1000000009'
                ]
            },
            {
                nodeId: '34',
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
                    '-1000000010'
                ]
            },
            {
                nodeId: '35',
                ignored: false,
                role: {
                    type: 'internalRole',
                    value: 'StaticText'
                },
                name: {
                    type: 'computedString',
                    value: ' otherwise '
                },
                childIds: [
                    '-1000000011'
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
                    value: '𝑏'
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
                    value: '𝑐'
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
                    value: ' if '
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
                    value: '𝐵'
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
                    value: '𝑐'
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
                    value: ' otherwise '
                },
                childIds: []
            }];

        const result = convertAXTreeToMarkdown(testUri, nodes);
        const expected = `$a=\\begin{cases}
b+c & \\text{ if }B \\\\
c & \\text{ otherwise }
\\end{cases}$`;
        assert.strictEqual(result.trim(), expected);
    });
});
