import { Parser } from '../types'

export default class DateParser implements Parser<Date> {
  parse(content: string): Date {
    const { date } = content.match(/Datum:\s+(?<date>[\d\.]+)/)?.groups
    const { time } = content.match(/Uhrzeit:\s+(?<time>[\d:]+)/)?.groups
    const [day, month, year] = date.split('.')
    const [hours, minutes, seconds] = time.split(':')

    return new Date(year, month - 1, day, hours, minutes, seconds)
  }
}
