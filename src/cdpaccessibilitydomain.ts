/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

//#region Types

import { URI } from 'vscode-uri';

export interface AXValue {
	type: AXValueType;
	value?: unknown;
	relatedNodes?: AXNode[];
	sources?: AXValueSource[];
}

export interface AXValueSource {
	type: AXValueSourceType;
	value?: AXValue;
	attribute?: string;
	attributeValue?: string;
	superseded?: boolean;
	nativeSource?: AXValueNativeSourceType;
	nativeSourceValue?: string;
	invalid?: boolean;
	invalidReason?: string;
}

export interface AXNode {
	nodeId: string;
	ignored: boolean;
	ignoredReasons?: AXProperty[];
	role?: AXValue;
	chromeRole?: AXValue;
	name?: AXValue;
	description?: AXValue;
	value?: AXValue;
	properties?: AXProperty[];
	childIds?: string[];
	backendDOMNodeId?: number;
}

export interface AXProperty {
	name: AXPropertyName;
	value: AXValue;
}

export type AXValueType = 'boolean' | 'tristate' | 'booleanOrUndefined' | 'idref' | 'idrefList' | 'integer' | 'node' | 'nodeList' | 'number' | 'string' | 'computedString' | 'token' | 'tokenList' | 'domRelation' | 'role' | 'internalRole' | 'valueUndefined';

export type AXValueSourceType = 'attribute' | 'implicit' | 'style' | 'contents' | 'placeholder' | 'relatedElement';

export type AXValueNativeSourceType = 'description' | 'figcaption' | 'label' | 'labelfor' | 'labelwrapped' | 'legend' | 'rubyannotation' | 'tablecaption' | 'title' | 'other';

export type AXPropertyName = 'url' | 'busy' | 'disabled' | 'editable' | 'focusable' | 'focused' | 'hidden' | 'hiddenRoot' | 'invalid' | 'keyshortcuts' | 'settable' | 'roledescription' | 'live' | 'atomic' | 'relevant' | 'root' | 'autocomplete' | 'hasPopup' | 'level' | 'multiselectable' | 'orientation' | 'multiline' | 'readonly' | 'required' | 'valuemin' | 'valuemax' | 'valuetext' | 'checked' | 'expanded' | 'pressed' | 'selected' | 'activedescendant' | 'controls' | 'describedby' | 'details' | 'errormessage' | 'flowto' | 'labelledby' | 'owns';

//#endregion

export interface AXNodeTree {
	readonly node: AXNode;
	readonly children: AXNodeTree[];
	parent: AXNodeTree | null;
}

export function createNodeTree(nodes: AXNode[]): AXNodeTree | null {
	if (nodes.length === 0) {
		return null;
	}

	// Create a map of node IDs to their corresponding nodes for quick lookup
	const nodeLookup = new Map<string, AXNode>();
	for (const node of nodes) {
		nodeLookup.set(node.nodeId, node);
	}

	// Helper function to get all non-ignored descendants of a node
	function getNonIgnoredDescendants(nodeId: string): string[] {
		const node = nodeLookup.get(nodeId);
		if (!node || !node.childIds) {
			return [];
		}

		const result: string[] = [];
		for (const childId of node.childIds) {
			const childNode = nodeLookup.get(childId);
			if (!childNode) {
				continue;
			}

			if (childNode.ignored) {
				// If child is ignored, add its non-ignored descendants instead
				result.push(...getNonIgnoredDescendants(childId));
			} else {
				// Otherwise, add the child itself
				result.push(childId);
			}
		}
		return result;
	}

	// Create tree nodes only for non-ignored nodes
	const nodeMap = new Map<string, AXNodeTree>();
	for (const node of nodes) {
		if (!node.ignored) {
			nodeMap.set(node.nodeId, { node, children: [], parent: null });
		}
	}

	// Establish parent-child relationships, bypassing ignored nodes
	for (const node of nodes) {
		if (node.ignored) {
			continue;
		}

		const treeNode = nodeMap.get(node.nodeId)!;
		if (node.childIds) {
			for (const childId of node.childIds) {
				const childNode = nodeLookup.get(childId);
				if (!childNode) {
					continue;
				}

				if (childNode.ignored) {
					// If child is ignored, connect its non-ignored descendants to this node
					const nonIgnoredDescendants = getNonIgnoredDescendants(childId);
					for (const descendantId of nonIgnoredDescendants) {
						const descendantTreeNode = nodeMap.get(descendantId);
						if (descendantTreeNode) {
							descendantTreeNode.parent = treeNode;
							treeNode.children.push(descendantTreeNode);
						}
					}
				} else {
					// Normal case: add non-ignored child directly
					const childTreeNode = nodeMap.get(childId);
					if (childTreeNode) {
						childTreeNode.parent = treeNode;
						treeNode.children.push(childTreeNode);
					}
				}
			}
		}
	}

	// Find the root node (a node without a parent)
	for (const node of nodeMap.values()) {
		if (!node.parent) {
			return node;
		}
	}

	return null;
}

/**
 * When possible, we will make sure lines are no longer than 80. This is to help
 * certain pieces of software that can't handle long lines.
 */
const LINE_MAX_LENGTH = 80;

/**
 * Converts an accessibility tree represented by AXNode objects into a markdown string.
 *
 * @param uri The URI of the document
 * @param axNodes The array of AXNode objects representing the accessibility tree
 * @returns A markdown representation of the accessibility tree
 */
export function convertAXTreeToMarkdown(uri: URI, axNodes: AXNode[]): string {
	const tree = createNodeTree(axNodes);
	if (!tree) {
		return ''; // Return empty string for empty tree
	}

	// Process tree to extract main content and navigation links
	const mainContent = extractMainContent(uri, tree);
	const navLinks = collectNavigationLinks(tree);

	// Combine main content and navigation links
	return mainContent + (navLinks.length > 0 ? '\n\n## Additional Links\n' + navLinks.join('\n') : '');
}

function extractMainContent(uri: URI, tree: AXNodeTree): string {
	const contentBuffer: string[] = [];
	processNode(uri, tree, contentBuffer, 0, true);
	return contentBuffer.join('');
}

function processNode(uri: URI, node: AXNodeTree, buffer: string[], depth: number, allowWrap: boolean): void {
	const role = getNodeRole(node.node);

	switch (role) {
		case 'navigation':
			return; // Skip navigation nodes

		case 'heading':
			processHeadingNode(uri, node, buffer, depth);
			return;

		case 'paragraph':
			processParagraphNode(uri, node, buffer, depth, allowWrap);
			return;

		case 'list':
			buffer.push('\n');
			for (const descChild of node.children) {
				processNode(uri, descChild, buffer, depth + 1, true);
			}
			buffer.push('\n');
			return;

		case 'ListMarker':
			// TODO: Should we normalize these ListMarkers to `-` and normal lists?
			buffer.push(getNodeText(node.node, allowWrap));
			return;

		case 'listitem': {
			const tempBuffer: string[] = [];
			// Process the children of the list item
			for (const descChild of node.children) {
				processNode(uri, descChild, tempBuffer, depth + 1, true);
			}
			const indent = getLevel(node.node) > 1 ? ' '.repeat(getLevel(node.node)) : '';
			buffer.push(`${indent}${tempBuffer.join('').trim()}\n`);
			return;
		}

		case 'link':
			if (!isNavigationLink(node)) {
				const linkText = getNodeText(node.node, allowWrap);
				const url = getLinkUrl(node.node);
				if (!isSameUriIgnoringQueryAndFragment(uri, node.node)) {
					buffer.push(`[${linkText}](${url})`);
				} else {
					buffer.push(linkText);
				}
			}
			return;

		case 'MathMLMath': {
			// Convert MathML-like AXNode subtree into a LaTeX-like inline string
			const mathStr = convertMathMLNodeToLatex(node);
			if (mathStr) {
				buffer.push(mathStr);
			}
			return;
		}
		case 'StaticText': {
			const staticText = getNodeText(node.node, allowWrap);
			if (staticText) {
				buffer.push(staticText);
			}
			break;
		}
		case 'image': {
			const altText = getNodeText(node.node, allowWrap) || 'Image';
			const imageUrl = getImageUrl(node.node);
			if (imageUrl) {
				buffer.push(`![${altText}](${imageUrl})\n\n`);
			} else {
				buffer.push(`[Image: ${altText}]\n\n`);
			}
			break;
		}

		case 'DescriptionList':
			processDescriptionListNode(uri, node, buffer, depth);
			return;

		case 'blockquote':
			buffer.push('> ' + getNodeText(node.node, allowWrap).replace(/\n/g, '\n> ') + '\n\n');
			break;

		// TODO: Is this the correct way to handle the generic role?
		case 'generic':
			buffer.push(' ');
			break;

		case 'code': {
			processCodeNode(uri, node, buffer, depth);
			return;
		}

		case 'pre':
			buffer.push('```\n' + getNodeText(node.node, false) + '\n```\n\n');
			break;

		case 'table':
			processTableNode(node, buffer);
			return;
		default:
			break;
	}

	// Process children if not already handled in specific cases
	for (const child of node.children) {
		processNode(uri, child, buffer, depth + 1, allowWrap);
	}
}

function getNodeRole(node: AXNode): string {
	return node.role?.value as string || '';
}

function getNodeText(node: AXNode, allowWrap: boolean): string {
	const text = node.name?.value as string || node.value?.value as string || '';
	if (!allowWrap) {
		return text;
	}

	if (text.length <= LINE_MAX_LENGTH) {
		return text;
	}

	const chars = text.split('');
	let lastSpaceIndex = -1;
	for (let i = 1; i < chars.length; i++) {
		if (chars[i] === ' ') {
			lastSpaceIndex = i;
		}
		// Check if we reached the line max length, try to break at the last space
		// before the line max length
		if (i % LINE_MAX_LENGTH === 0 && lastSpaceIndex !== -1) {
			// replace the space with a new line
			chars[lastSpaceIndex] = '\n';
			lastSpaceIndex = i;
		}
	}
	return chars.join('');
}

function getLevel(node: AXNode): number {
	const levelProp = node.properties?.find(p => p.name === 'level');
	return levelProp ? Math.min(Number(levelProp.value.value) || 1, 6) : 1;
}

function getLinkUrl(node: AXNode): string {
	// Find URL in properties
	const urlProp = node.properties?.find(p => p.name === 'url');
	return urlProp?.value.value as string || '#';
}

function getImageUrl(node: AXNode): string | null {
	// Find URL in properties
	const urlProp = node.properties?.find(p => p.name === 'url');
	return urlProp?.value.value as string || null;
}

function isNavigationLink(node: AXNodeTree): boolean {
	// Check if this link is part of navigation
	let current: AXNodeTree | null = node;
	while (current) {
		const role = getNodeRole(current.node);
		if (['navigation', 'menu', 'menubar'].includes(role)) {
			return true;
		}
		current = current.parent;
	}
	return false;
}

function isSameUriIgnoringQueryAndFragment(uri: URI, node: AXNode): boolean {
	// Check if this link is an anchor link
	const link = getLinkUrl(node);
	try {
		const parsed = URI.parse(link);
		return parsed.scheme === uri.scheme && parsed.authority === uri.authority && parsed.path === uri.path;
	} catch {
		return false;
	}
}

function processParagraphNode(uri: URI, node: AXNodeTree, buffer: string[], depth: number, allowWrap: boolean): void {
	buffer.push('\n');
	// Process the children of the paragraph
	for (const child of node.children) {
		processNode(uri, child, buffer, depth + 1, allowWrap);
	}
	buffer.push('\n\n');
}

function processHeadingNode(uri: URI, node: AXNodeTree, buffer: string[], depth: number): void {
	buffer.push('\n');
	const level = getLevel(node.node);
	buffer.push(`${'#'.repeat(level)} `);
	// Process children nodes of the heading
	for (const child of node.children) {
		if (getNodeRole(child.node) === 'StaticText') {
			buffer.push(getNodeText(child.node, false));
		} else {
			processNode(uri, child, buffer, depth + 1, false);
		}
	}
	buffer.push('\n\n');
}

function processDescriptionListNode(uri: URI, node: AXNodeTree, buffer: string[], depth: number): void {
	buffer.push('\n');

	// Process each child of the description list
	for (const child of node.children) {
		if (getNodeRole(child.node) === 'term') {
			buffer.push('- **');
			// Process term nodes
			for (const termChild of child.children) {
				processNode(uri, termChild, buffer, depth + 1, true);
			}
			buffer.push('** ');
		} else if (getNodeRole(child.node) === 'definition') {
			// Process description nodes
			for (const descChild of child.children) {
				processNode(uri, descChild, buffer, depth + 1, true);
			}
			buffer.push('\n');
		}
	}

	buffer.push('\n');
}


export function processTableNode(node: AXNodeTree, buffer: string[]): void {
	buffer.push('\n');

	const rows: AXNodeTree[] = [];
	for (const c of node.children) {
		const role = getNodeRole(c.node);
		if (role === 'row') {
			rows.push(c);
		}
		for (const cc of c.children) {
			const ccrole = getNodeRole(cc.node);
			if (ccrole === 'row') {
				rows.push(cc);
			}
		}
	}

	if (rows.length > 0) {
		const isColumnHeader = (c: AXNodeTree) => {
			const rr = getNodeRole(c.node);
			return rr === 'columnheader';
		}
		let headerRowIndex = rows.findIndex(r => r.children.some(isColumnHeader));
		if (headerRowIndex === -1) {
			headerRowIndex = 0;
		}
		const headerCells = rows[headerRowIndex].children.filter(isColumnHeader);

		// Generate header row
		const headerContent = headerCells.map(cell => getNodeText(cell.node, false) || ' ');
		buffer.push('| ' + headerContent.join(' | ') + ' |\n');

		// Generate separator row
		buffer.push('| ' + headerCells.map(() => '---').join(' | ') + ' |\n');
		// Generate data rows: include all rows except the chosen header row
		for (let i = 0; i < rows.length; i++) {
			if (i === headerRowIndex) {
				continue;
			}
			const dataCells = rows[i].children.filter(cell => {
				const role = getNodeRole(cell.node);
				return role === 'cell' || role === 'rowheader';
			})
			const rowContent = dataCells.map(cell => getNodeText(cell.node, false) || ' ');
			buffer.push('| ' + rowContent.join(' | ') + ' |\n');
		}
	}

	buffer.push('\n');
}

function processCodeNode(uri: URI, node: AXNodeTree, buffer: string[], depth: number): void {
	const tempBuffer: string[] = [];
	// Process the children of the code node
	for (const child of node.children) {
		processNode(uri, child, tempBuffer, depth + 1, false);
	}
	const isCodeblock = tempBuffer.some(text => text.includes('\n'));
	if (isCodeblock) {
		buffer.push('\n```\n');
		// Append the processed text to the buffer
		buffer.push(tempBuffer.join(''));
		buffer.push('\n```\n');
	} else {
		buffer.push('`');
		let characterCount = 0;
		// Append the processed text to the buffer
		for (const tempItem of tempBuffer) {
			characterCount += tempItem.length;
			if (characterCount > LINE_MAX_LENGTH) {
				buffer.push('\n');
				characterCount = 0;
			}
			buffer.push(tempItem);
			buffer.push('`');
		}
	}
}

function collectNavigationLinks(tree: AXNodeTree): string[] {
	const links: string[] = [];
	collectLinks(tree, links);
	return links;
}

function collectLinks(node: AXNodeTree, links: string[]): void {
	const role = getNodeRole(node.node);

	if (role === 'link' && isNavigationLink(node)) {
		const linkText = getNodeText(node.node, true);
		const url = getLinkUrl(node.node);
		const description = node.node.description?.value as string || '';

		links.push(`- [${linkText}](${url})${description ? ' - ' + description : ''}`);
	}

	// Process children
	for (const child of node.children) {
		collectLinks(child, links);
	}
}

// -------------------- MathML -> LaTeX-like conversion helpers --------------------

function convertMathMLNodeToLatex(root: AXNodeTree): string {
	const visited = new Set<string>();

	// Lightweight internal representation for matrices so we can choose
	// the correct LaTeX environment (pmatrix/vmatrix/Vmatrix) without
	// relying on fragile string replace operations later.
	type MatrixEnv = 'pmatrix' | 'vmatrix' | 'Vmatrix';
	interface MatrixStruct {
		kind: 'matrix';
		rows: string[]; // each row like 'a & b & c'
		env: MatrixEnv;
	}

	function renderMatrixStruct(m: MatrixStruct): string {
		return `\\begin{${m.env}}\n${m.rows.join(' \\\\\n')}
\\end{${m.env}}`;
	}

	function renderMaybeMatrix(x: string | MatrixStruct): string {
		return typeof x === 'string' ? x : renderMatrixStruct(x);
	}

	function getTextFromNodeId(n: AXNodeTree): string {
		if (!n) { return ''; }
		const text = (n.node.name?.value as string) || (n.node.value?.value as string) || '';
		return normalizeMathIdentifier(text);
	}

	function recurseTree(node: AXNodeTree): string | MatrixStruct {
		if (!node || visited.has(node.node.nodeId)) {
			return '';
		}
		visited.add(node.node.nodeId);

		const role = (node.node.role?.value as string) || '';

		// Helper to render children concatenated. Children may return
		// either strings or MatrixStruct objects; renderMaybeMatrix
		// normalizes them to strings.
		const concatChildren = (n: AXNodeTree) => {
			if (n.children.length === 0) { return ''; }
			return n.children.map(child => {
				return renderMaybeMatrix(recurseTree(child));
			}).join('');
		};

		switch (role) {
			case 'MathMLIdentifier':
			case 'MathMLNumber':
			case 'StaticText':
			case 'InlineTextBox':
				// Prefer children text if present
				return node.children.length > 0 ? node.children.map(getTextFromNodeId).join('') : getTextFromNodeId(node);

			case 'MathMLOperator': {
				const text = node.children.length > 0 ? node.children.map(getTextFromNodeId).join('') : getTextFromNodeId(node);
				const trimmed = text.trim();
				const funcNames = new Set(['sin', 'cos', 'tan', 'sec', 'csc', 'cot', 'arcsin', 'arccos', 'arctan', 'sinh', 'cosh', 'tanh', 'log', 'ln', 'exp', 'max', 'min']);
				if (funcNames.has(trimmed)) {
					return `\\${trimmed}`;
				}
				return text;
			}

			case 'MathMLSup': {
				const base = node.children[0] ? renderMaybeMatrix(recurseTree(node.children[0])) : '';
				const exp = node.children[1] ? renderMaybeMatrix(recurseTree(node.children[1])) : '';
				return exp.length === 1 ? `${base}^${exp}` : `${base}^{${exp}}`;
			}

			case 'MathMLSub': {
				const base = node.children[0] ? renderMaybeMatrix(recurseTree(node.children[0])) : '';
				const sub = node.children[1] ? renderMaybeMatrix(recurseTree(node.children[1])) : '';
				return sub.length === 1 ? `${base}_${sub}` : `${base}_{${sub}}`;
			}

			case 'MathMLTable': {
				// Build a structural representation of the matrix (rows)
				const rows: string[] = [];
				for (const child of node.children) {
					if ((child.node.role?.value as string) === 'MathMLTableRow') {
						const cells: string[] = [];
							for (const cellChild of child.children) {
								const cellText = cellChild.children.length > 0
									? cellChild.children.map(n => {
										return renderMaybeMatrix(recurseTree(n))
									}).join('')
									: renderMaybeMatrix(recurseTree(cellChild));
								cells.push(cellText);
							}
						rows.push(cells.join(' & '));
					}
				}
				const matrix: MatrixStruct = { kind: 'matrix', rows, env: 'pmatrix' };
				return matrix;
			}

			case 'MathMLRow':
			case 'mrow':
			case 'MathMLMath': {
				// Build tokens from children
				const tokens = node.children.map(child => {
					return recurseTree(child)
				}) satisfies (string | MatrixStruct)[];

				// If pattern is a fenced matrix like '|' + pmatrix + '|' or '‖' + pmatrix + '‖', convert to vmatrix/Vmatrix
				const firstNonEmpty = tokens.findIndex(t => typeof t !== 'string' ? true : t !== '');
				if (firstNonEmpty !== -1) {
					// find last non-empty
					let lastNonEmpty = tokens.length - 1;
					while (lastNonEmpty >= 0 && (typeof tokens[lastNonEmpty] === 'string' ? tokens[lastNonEmpty] === '' : false)) { lastNonEmpty--; }
					if (lastNonEmpty > firstNonEmpty) {
						const firstTok = tokens[firstNonEmpty];
						const lastTok = tokens[lastNonEmpty];
						const middleTokens = tokens.slice(firstNonEmpty + 1, lastNonEmpty);

						// If the middle is a single MatrixStruct, we can pick the env directly.
						if (middleTokens.length === 1 && typeof middleTokens[0] !== 'string') {
							const middleMatrix = middleTokens[0];
							// single vertical bar fence -> vmatrix
							if (firstTok === '|' && lastTok === '|') {
								return renderMatrixStruct({ ...middleMatrix, env: 'vmatrix' });
							}
							// double vertical bar fence (either '||' or U+2016 '‖') -> Vmatrix
							if ((firstTok === '||' || firstTok === '‖') && (lastTok === '||' || lastTok === '‖')) {
								return renderMatrixStruct({ ...middleMatrix, env: 'Vmatrix' });
							}
						}

						// If the middle is strings (or mixed), fallback to rendering them into a string
						const middle = middleTokens.map(t => renderMaybeMatrix(t)).join('');
						if (middle.startsWith('\\begin{pmatrix}')) {
							// single vertical bar fence -> vmatrix
							if (firstTok === '|' && lastTok === '|') {
								return middle.replace('{pmatrix}', '{vmatrix}').replace('\\end{pmatrix}', '\\end{vmatrix}');
							}
							if ((firstTok === '||' || firstTok === '‖') && (lastTok === '||' || lastTok === '‖')) {
								return middle.replace('{pmatrix}', '{Vmatrix}').replace('\\end{pmatrix}', '\\end{Vmatrix}');
							}
						}
					}
					// look for '(' then a pmatrix then ')'
					const firstTokVal = tokens[firstNonEmpty];
					const lastTokVal = tokens[lastNonEmpty];
					if (typeof firstTokVal === 'string' && firstTokVal === '(') {
						if (lastNonEmpty > firstNonEmpty && typeof lastTokVal === 'string' && lastTokVal === ')') {
							// check middle tokens form a pmatrix structure
							const middleTokens = tokens.slice(firstNonEmpty + 1, lastNonEmpty);
							if (middleTokens.length === 1 && typeof middleTokens[0] !== 'string') {
								return renderMatrixStruct(middleTokens[0]);
							}
							const middle = middleTokens.map(t => renderMaybeMatrix(t)).join('');
							if (middle.startsWith('\\begin{pmatrix}')) {
								return middle;
							}
						}
					}
				}

				// otherwise, try to detect function names followed by parentheses
				const funcNames = new Set(['sin', 'cos', 'tan', 'sec', 'csc', 'cot', 'arcsin', 'arccos', 'arctan', 'sinh', 'cosh', 'tanh', 'log', 'ln', 'exp', 'max', 'min']);
				let out = '';
				for (let i = 0; i < tokens.length; i++) {
					const t = tokens[i];
					if (typeof t === 'string' && t && funcNames.has(t)) {
						// find next non-empty
						let j = i + 1; while (j < tokens.length && (typeof tokens[j] === 'string' ? tokens[j] === '' : false)) { j++; }
						if (j < tokens.length && typeof tokens[j] === 'string' && (tokens[j] as string).startsWith('(')) {
							out += `\\${t}`;
							continue;
						}
					}
					out += renderMaybeMatrix(t);
				}
				return out;
			}

			default:
				// Fallback: concatenate children
				return concatChildren(node);
		}
	}

	// Start from the root AXNode and ensure we always return a string
	return renderMaybeMatrix(recurseTree(root));
}

function normalizeMathIdentifier(text: string): string {
	if (!text) { return ''; }

	// Try a quick compatibility decomposition first
	const nfkc = text.normalize('NFKC');
	if (nfkc !== text) {
		text = nfkc;
	}

	// Remove common invisible / zero-width characters that may appear in copy-pasted math
	// Remove specific codepoints and the whole U+2060..U+206F block
	const explicitInvisible = new Set([0x200B, 0x200C, 0x200D, 0x200E, 0x200F, 0xFEFF]);
	function isInvisibleChar(ch: string): boolean {
		const cp = ch.codePointAt(0) || 0;
		if (cp >= 0x2060 && cp <= 0x206F) {
			return true;
		}
		return explicitInvisible.has(cp);
	}
	let cleaned = '';
	for (const ch of text) {
		if (!isInvisibleChar(ch)) {
			cleaned += ch;
		}
	}
	text = cleaned;

	// Explicit small map for characters that may not be covered by ranges
	const explicitMap: Record<string, string> = {};

	// Ranges of Mathematical Alphanumeric Symbols that map to A-Z / a-z
	// Each entry: [startCodePoint, endCodePoint, isUppercaseStart:boolean]
	const ranges: { start: number; end: number; upper: boolean }[] = [
		// Bold Capital A..Z
		{ start: 0x1D400, end: 0x1D419, upper: true },
		// Bold Small a..z
		{ start: 0x1D41A, end: 0x1D433, upper: false },
		// Italic Capital A..Z
		{ start: 0x1D434, end: 0x1D44D, upper: true },
		// Italic Small a..z
		{ start: 0x1D44E, end: 0x1D467, upper: false },
		// Bold Italic Capital A..Z
		{ start: 0x1D468, end: 0x1D481, upper: true },
		// Bold Italic Small a..z
		{ start: 0x1D482, end: 0x1D49B, upper: false },
		// Script Capital A..Z (note: there are gaps in unicode, best-effort)
		{ start: 0x1D49C, end: 0x1D4B5, upper: true },
		// Script Small a..z
		{ start: 0x1D4B6, end: 0x1D4CF, upper: false },
		// Fraktur Capital A..Z
		{ start: 0x1D504, end: 0x1D51D, upper: true },
		// Fraktur Small a..z
		{ start: 0x1D51E, end: 0x1D537, upper: false },
		// Double-struck Capital A..Z
		{ start: 0x1D538, end: 0x1D551, upper: true },
		// Bold Fraktur Capital A..Z
		{ start: 0x1D56C, end: 0x1D585, upper: true },
		// Sans-serif Capital A..Z
		{ start: 0x1D5A0, end: 0x1D5B9, upper: true },
		// Sans-serif Small a..z
		{ start: 0x1D5BA, end: 0x1D5D3, upper: false },
		// Sans-serif Bold Capital
		{ start: 0x1D5D4, end: 0x1D5ED, upper: true },
		// Sans-serif Bold Small
		{ start: 0x1D5EE, end: 0x1D607, upper: false },
		// Monospace Capital
		{ start: 0x1D670, end: 0x1D689, upper: true },
		// Monospace Small
		{ start: 0x1D68A, end: 0x1D6A3, upper: false }
	];

	let out = '';
	for (let i = 0; i < text.length; i++) {
		const ch = text[i];
		// handle surrogate pairs if any
		const code = text.codePointAt(i)!;
		if (code > 0xffff) {
			// advance an extra index for surrogate pair
			i++;
		}

		// explicit map first
		if (explicitMap[ch]) {
			out += explicitMap[ch];
			continue;
		}

		let mapped = '';
		for (const r of ranges) {
			if (code >= r.start && code <= r.end) {
				const index = code - r.start;
				const base = r.upper ? 0x41 : 0x61; // 'A' or 'a'
				if (index >= 0 && index < 26) {
					mapped = String.fromCharCode(base + index);
				}
				break;
			}
		}

		if (mapped) {
			out += mapped;
			continue;
		}

		// fallback: keep original character
		out += String.fromCodePoint(code);
	}
	return out;
}

