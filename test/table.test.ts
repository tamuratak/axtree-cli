import * as assert from 'assert';
import { URI } from 'vscode-uri';
import { convertAXTreeToMarkdown } from '../src/cdpaccessibilitydomain.js';


suite('Table 01', () => {

    const testUri = URI.parse('https://example.com/test');

    test('empty tree returns empty string', () => {
        const result = convertAXTreeToMarkdown(testUri, []);
        assert.strictEqual(result, '');
    });

    test('empty tree returns empty string', () => {
        const result = convertAXTreeToMarkdown(testUri, [{
            nodeId: '5',
            ignored: false,
            role: {
                type: 'role',
                value: 'table'
            },
            name: {
                type: 'computedString',
                value: 'Alien football stars'
            },
            childIds: [
                '6',
                '7'
            ]
        },
        {
            nodeId: '6',
            ignored: false,
            role: {
                type: 'role',
                value: 'caption'
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
            nodeId: '7',
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
                '8',
                '12',
                '16'
            ]
        },
        {
            nodeId: '8',
            ignored: false,
            role: {
                type: 'role',
                value: 'row'
            },
            name: {
                type: 'computedString',
                value: ''
            },
            childIds: [
                '9',
                '10',
                '11'
            ]
        },
        {
            nodeId: '12',
            ignored: false,
            role: {
                type: 'role',
                value: 'row'
            },
            name: {
                type: 'computedString',
                value: ''
            },
            childIds: [
                '13',
                '14',
                '15'
            ]
        },
        {
            nodeId: '16',
            ignored: false,
            role: {
                type: 'role',
                value: 'row'
            },
            name: {
                type: 'computedString',
                value: ''
            },
            childIds: [
                '17',
                '18',
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
                value: 'Alien football stars'
            },
            childIds: [
                '-1000000002'
            ]
        },
        {
            nodeId: '9',
            ignored: false,
            role: {
                type: 'role',
                value: 'rowheader'
            },
            name: {
                type: 'computedString',
                value: 'TR-7'
            },
            childIds: [
                '21'
            ]
        },
        {
            nodeId: '10',
            ignored: false,
            role: {
                type: 'role',
                value: 'cell'
            },
            name: {
                type: 'computedString',
                value: '7'
            },
            childIds: [
                '22'
            ]
        },
        {
            nodeId: '11',
            ignored: false,
            role: {
                type: 'role',
                value: 'cell'
            },
            name: {
                type: 'computedString',
                value: '4,569'
            },
            childIds: [
                '23'
            ]
        },
        {
            nodeId: '13',
            ignored: false,
            role: {
                type: 'role',
                value: 'rowheader'
            },
            name: {
                type: 'computedString',
                value: 'Khiresh Odo'
            },
            childIds: [
                '24'
            ]
        },
        {
            nodeId: '14',
            ignored: false,
            role: {
                type: 'role',
                value: 'cell'
            },
            name: {
                type: 'computedString',
                value: '7'
            },
            childIds: [
                '25'
            ]
        },
        {
            nodeId: '15',
            ignored: false,
            role: {
                type: 'role',
                value: 'cell'
            },
            name: {
                type: 'computedString',
                value: '7,223'
            },
            childIds: [
                '26'
            ]
        },
        {
            nodeId: '17',
            ignored: false,
            role: {
                type: 'role',
                value: 'rowheader'
            },
            name: {
                type: 'computedString',
                value: 'Mia Oolong'
            },
            childIds: [
                '27'
            ]
        },
        {
            nodeId: '18',
            ignored: false,
            role: {
                type: 'role',
                value: 'cell'
            },
            name: {
                type: 'computedString',
                value: '9'
            },
            childIds: [
                '28'
            ]
        },
        {
            nodeId: '19',
            ignored: false,
            role: {
                type: 'role',
                value: 'cell'
            },
            name: {
                type: 'computedString',
                value: '6,219'
            },
            childIds: [
                '29'
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
                value: 'Alien football stars'
            },
            childIds: []
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
                value: 'TR-7'
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
                value: '7'
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
                value: '4,569'
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
                value: 'Khiresh Odo'
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
                value: '7'
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
                value: '7,223'
            },
            childIds: [
                '-1000000008'
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
                value: 'Mia Oolong'
            },
            childIds: [
                '-1000000009'
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
                value: '9'
            },
            childIds: [
                '-1000000010'
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
                value: '6,219'
            },
            childIds: [
                '-1000000011'
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
                value: 'TR-7'
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
                value: '7'
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
                value: '4,569'
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
                value: 'Khiresh Odo'
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
                value: '7'
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
                value: '7,223'
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
                value: 'Mia Oolong'
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
                value: '9'
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
                value: '6,219'
            },
            childIds: []
        }]);
        const expected = `
| TR-7 | 7 | 4,569 |
| --- | --- | --- |
| Khiresh Odo | 7 | 7,223 |
| Mia Oolong | 9 | 6,219 |`;
        assert.strictEqual(result.trim(), expected.trim());
    });
});
