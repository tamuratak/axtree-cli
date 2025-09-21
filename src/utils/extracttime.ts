import * as fs from 'fs'
import * as path from 'path'

export interface ExtractedTime {
    year: number
    month: number
    day: number
}

const monthNames: Record<string, number> = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12,
}

export function extractTime(text: string): ExtractedTime | undefined {
    // Match e.g. "January 2, 2020" or "January 02,2020" (allow optional space after comma)
    const re = /(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),\s*(\d{4})/
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

export function mkExtractedTimeDir(parentDir: string, time: ExtractedTime, suffix: string): string {
    if (!path.isAbsolute(parentDir)) {
        throw new TypeError('parentDir must be an absolute path')
    }
    // format YYMMDD
    const yy = String(time.year % 100).padStart(2, '0')
    const mm = String(time.month).padStart(2, '0')
    const dd = String(time.day).padStart(2, '0')
    const name = `${yy}${mm}${dd}${suffix}`

    const dirPath = path.join(parentDir, name)
    if (fs.existsSync(dirPath)) {
        return dirPath
    }
    fs.mkdirSync(dirPath)
    return dirPath
}
