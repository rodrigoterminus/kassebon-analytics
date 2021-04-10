import { Parser } from '../types'

export default class DateParser implements Parser<Date> {
  parse(content: string): Date {
    const { date: dateString } =
      content.match(/Datum:\s+(?<date>[\d\.]+)/)?.groups || {}
    const { time } = content.match(/Uhrzeit:\s+(?<time>[\d:]+)/)?.groups || {}
    const date = dateString.split('.').reverse().join('-')
    return new Date(`${date}T${time}`)
  }
}
