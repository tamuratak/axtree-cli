import * as path from 'node:path'

export interface ExtractedTime {
    year: number
    month: number
    day: number
}

const monthNames: Record<string, number> = {
    'January': 1,
    'Jan': 1,
    'Jan.': 1,
    'February': 2,
    'Feb': 2,
    'Feb.': 2,
    'March': 3,
    'Mar': 3,
    'Mar.': 3,
    'April': 4,
    'Apr': 4,
    'Apr.': 4,
    'May': 5,
    'May.': 5,
    'June': 6,
    'Jun': 6,
    'Jun.': 6,
    'July': 7,
    'Jul': 7,
    'Jul.': 7,
    'August': 8,
    'Aug': 8,
    'Aug.': 8,
    'September': 9,
    'Sept': 9,
    'Sep': 9,
    'Sept.': 9,
    'Sep.': 9,
    'October': 10,
    'Oct': 10,
    'Oct.': 10,
    'November': 11,
    'Nov': 11,
    'Nov.': 11,
    'December': 12,
    'Dec': 12,
    'Dec.': 12,
}

export function extractTime(text: string): ExtractedTime | undefined {
    // Match e.g. "January 2, 2020" or "January 02,2020" (allow optional space after comma)
    // Accept full month names and common abbreviations (with optional trailing period)
    const re = /((?:January|Jan\.?|February|Feb\.?|March|Mar\.?|April|Apr\.?|May\.?|June|Jun\.?|July|Jul\.?|August|Aug\.?|September|Sept\.?|Sep\.?|October|Oct\.?|November|Nov\.?|December|Dec\.?))\s+(\d{1,2}),\s*(\d{4})/
    const match = text.match(re)
    if (!match) {
        return undefined
    }

    const [, monthName, dayStr, yearStr] = match
    const month = monthNames[monthName]
    if (!month) {
        return undefined
    }

    const day = Number(dayStr)
    const year = Number(yearStr)

    if (!Number.isFinite(day) || !Number.isFinite(year)) {
        return undefined
    }

    // basic validation
    if (day < 1 || day > 31) {
        return undefined
    }
    if (year < 0 || year > 9999) {
        return undefined
    }

    return { year, month, day }
}

export function generateExtractedTimeDirPath(parentDir: string, time: ExtractedTime, suffix: string): string {
    if (!path.isAbsolute(parentDir)) {
        throw new TypeError('parentDir must be an absolute path')
    }
    // format YYMMDD
    const yy = String(time.year % 100).padStart(2, '0')
    const mm = String(time.month).padStart(2, '0')
    const dd = String(time.day).padStart(2, '0')
    const name = `${yy}${mm}${dd}${suffix}`
    const dirPath = path.join(parentDir, name)
    return dirPath
}

export function extractDirSuffix(text: string): string {
    if (text.includes('Dow Jones & Company, Inc. All Rights Reserved')) {
        return 'wsj'
    } else if (text.includes('The New York Times Company')) {
        return 'nytimes'
    } else {
        return 'unknown'
    }
}

export function extractTitle(text: string): string | undefined {
    // Find first-level markdown heading: a line that starts with '# ' (not '##')
    const lines = text.split(/\r?\n/)
    for (const line of lines) {
        const m = line.match(/^#\s+(.*)$/)
        if (m) {
            let title = m[1].trim()
            if (title.length === 0) {
                return undefined
            }

            // Normalize: convert to lower-case, replace non-ascii letters with ascii equivalents if possible
            // For simplicity, remove diacritics using Unicode normalization, then remove non-alphanum chars
            title = title.normalize('NFKD').replace(/\p{Diacritic}/gu, '')

            // Keep only letters and digits and spaces, then collapse spaces to single dash
            title = title.replace(/[^\p{L}\p{N} ]+/gu, '')
            title = title.trim().replace(/\s+/g, '')
            title = title.toLowerCase()

            // Truncate to max 15 characters
            if (title.length > 15) {
                title = title.slice(0, 15)
            }

            // Remove leading/trailing dashes
            title = title.replace(/^-+|-+$/g, '')

            return title.length > 0 ? title : undefined
        }
    }
    return undefined
}
