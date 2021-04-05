import { Parser } from '../types'

export default class TracerParser implements Parser<string> {
  parse(content: string): string {
    const match = content.match(/Trace-Nr.\s+(?<number>\w+)/)
    const { number } = match?.groups
    return number
  }
}
