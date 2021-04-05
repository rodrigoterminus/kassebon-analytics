import { Parser } from '../types'

export default class NumberParser implements Parser<string> {
  parse(content: string): string {
    const match = content.match(/Beleg-Nr.\s+(?<number>\w+)/)
    const { number } = match?.groups
    return number
  }
}
