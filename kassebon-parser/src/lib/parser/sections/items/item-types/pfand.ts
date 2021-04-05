import { ItemType, Parser, Pfand } from '../../../types'

export default class PfandParser implements Parser<Pfand> {
  parse(content: string): Pfand {
    const match = content.match(
      /^PFAND\s(?<price>[\d,]+)?\s+(?<currency>[A-Z]{3})?\s+(?<total>[\d,]+)\s(?<taxClass>[A-Z])?(?<extra>.*)/,
    )
    const { currency, price, total, taxClass, extra } = match?.groups as Pfand
    return {
      extra,
      currency,
      price,
      total,
      taxClass,
      type: ItemType.pfand,
    }
  }
}
