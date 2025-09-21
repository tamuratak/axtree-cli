import * as assert from 'assert';
import { extractTime, ExtractedTime } from '../src/utils/extract.js';
import { extractTitle } from '../src/utils/extract.js'

suite('Utils Tests', () => {

	test('extract valid date with space after comma', () => {
		const res = extractTime('Published on January 2, 2020')
		const expected: ExtractedTime = { year: 2020, month: 1, day: 2 }
		assert.deepStrictEqual(res, expected)
	})

	test('extract valid date without space after comma', () => {
		const res = extractTime('Date: February 10,2021')
		const expected: ExtractedTime = { year: 2021, month: 2, day: 10 }
		assert.deepStrictEqual(res, expected)
	})

	test('returns undefined for non-matching text', () => {
		const res = extractTime('No date here')
		assert.strictEqual(res, undefined)
	})

	test('returns undefined for invalid day', () => {
		const res = extractTime('March 0, 2020')
		assert.strictEqual(res, undefined)
	})

	test('extractTitle basic heading', () => {
		const md = '# Hello World\n\nSome content'
		const res = extractTitle(md)
		assert.strictEqual(res, 'helloworld')
	})

	test('extractTitle truncates to 15 chars', () => {
		const md = '# This is a Very Long Title Indeed\nmore'
		const res = extractTitle(md)
		assert.strictEqual(res && res.length <= 15, true)
	})

	test('extractTitle returns undefined when no heading', () => {
		const md = 'No headings here\nJust text'
		const res = extractTitle(md)
		assert.strictEqual(res, undefined)
	})

	test('extractTime accepts abbreviated month with dot', () => {
		const res = extractTime('Published on Aug. 10, 2020')
		const expected: ExtractedTime = { year: 2020, month: 8, day: 10 }
		assert.deepStrictEqual(res, expected)
	})

	test('extractTime accepts abbreviated month without dot (Sept)', () => {
		const res = extractTime('Date: Sept 5, 2019')
		const expected: ExtractedTime = { year: 2019, month: 9, day: 5 }
		assert.deepStrictEqual(res, expected)
	})

})
