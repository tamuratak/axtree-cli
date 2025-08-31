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
        const expected = '\\partial_x f(x,y)';
        assert.strictEqual(result, expected);
    });

});
