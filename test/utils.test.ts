import * as assert from 'assert';
import { extractTime, ExtractedTime } from '../src/utils/extracttime.js';

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

})
