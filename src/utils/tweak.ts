
export function removeHtmlElements(text: string): string {
	// Remove block tags with their content (non-greedy), allow attributes and newlines
	// Use case-insensitive matching for tags
	const tags = ['figure', 'aside', 'media']
	let out = text
	for (const tag of tags) {
	// remove pair tags: <tag ...>...</tag>
	// use dotAll (s) so '.' matches newlines and simplify the pattern
	const pairRe = new RegExp(`<${tag}\\b[^>]*>.*?<\\/${tag}>`, 'gis')
		out = out.replace(pairRe, '')
		// remove self-closing tags: <tag ... /> or <tag.../>
	const selfRe = new RegExp(`<${tag}\\b[^>]*\\/?>`, 'gi')
		out = out.replace(selfRe, '')
	}

	// Collapse multiple blank lines into one
	out = out.replace(/\n{3,}/g, '\n\n')
	// Trim leading/trailing whitespace
	return out.trim()
}
