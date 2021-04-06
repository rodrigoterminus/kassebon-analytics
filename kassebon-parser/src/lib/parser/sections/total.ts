import { Parser, Total } from '../types'

export default class TotalParser implements Parser<Total> {
  parse(content: string): Total {
    const match = content.match(
      /SUMME\s+(?<currency>[A-Z]{3})\s+(?<value>[\d,]+)/,
    )
    const { currency, value } = match?.groups || {}

    return {
      currency,
      value: Number(value.replace(',', '.')),
    }
  }
}
