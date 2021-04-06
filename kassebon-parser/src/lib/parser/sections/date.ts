import { Parser } from '../types'

export default class DateParser implements Parser<Date> {
  parse(content: string): Date {
    const { date: dateString } =
      content.match(/Datum:\s+(?<date>[\d\.]+)/)?.groups || {}
    const { time: timeString } =
      content.match(/Uhrzeit:\s+(?<time>[\d:]+)/)?.groups || {}
    const datePieces = dateString.split('.')
    const timePieces = timeString.split(':')
    const dateArgs = [...datePieces.reverse(), ...timePieces].map((s) =>
      parseInt(s, 10),
    ) as []

    return new Date(...dateArgs)
  }
}
