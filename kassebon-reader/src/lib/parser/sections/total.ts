import { Parser, Total } from '../types'

export default class TotalParser implements Parser<Total> {
  parse(content: string): Total {
    const match = content.match(
      /\s?-+\n.+(?<currency>[A-Z]{3})\s+(?<value>[\d,]+)\s?\n\s+=+/,
    )
    const { currency, value } = match?.groups as Total

    return {
      currency,
      value,
    }
  }
}
